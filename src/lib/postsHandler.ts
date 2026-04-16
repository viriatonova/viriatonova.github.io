import fs from 'fs';
import path from 'path';
import { PostProps, PaginatedPosts } from '@/types/posts';

export class PostsHandler {
  private contentDir: string;

  constructor() {
    this.contentDir = path.join(process.cwd(), 'src', 'content');
  }

  /**
   * Helper privately used to parse the JS metadata export from MDX files
   */
  private parseMetadata(fileContent: string): Partial<PostProps> {
    const metadataMatch = fileContent.match(/export const metadata = {([\s\S]*?)};/);
    if (!metadataMatch) return {};

    const metadataStr = metadataMatch[1];

    const titleMatch = metadataStr.match(/title:\s*["']([\s\S]*?)["']/);
    const dateMatch = metadataStr.match(/date:\s*["']([\s\S]*?)["']/);
    const tagMatch = metadataStr.match(/tag:\s*["']([\s\S]*?)["']/);
    const descMatch = metadataStr.match(/description:\s*["']([\s\S]*?)["']/);

    return {
      title: titleMatch ? titleMatch[1] : '',
      date: dateMatch ? dateMatch[1] : '',
      tag: tagMatch ? tagMatch[1] : '',
      description: descMatch ? descMatch[1] : '',
    };
  }

  /**
   * Retrieves all posts from the MDX content directory.
   */
  public getAllPosts(): PostProps[] {
    if (!fs.existsSync(this.contentDir)) {
      return [];
    }

    const files = fs.readdirSync(this.contentDir);
    const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

    const posts: PostProps[] = mdxFiles.map((fileName) => {
      const filePath = path.join(this.contentDir, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf8');

      const slug = fileName.replace(/\.mdx$/, '');
      const metadata = this.parseMetadata(fileContent);

      // Clean content by removing the metadata export
      const content = fileContent.replace(/export const metadata = {[\s\S]*?};/, '').trim();

      return {
        slug,
        title: metadata.title || slug,
        date: metadata.date || '',
        tag: metadata.tag || '',
        description: metadata.description || '',
        content,
      };
    });

    // Optionally sort posts here, e.g. based on date string if they are uniform 
    // In this case, we rely on the order in the filesystem or return as is

    return posts;
  }

  /**
   * Retrieves a paginated unpaginated list of posts.
   * @param page Current page (1-indexed)
   * @param limit Items per page
   */
  public getPaginatedPosts(page: number = 1, limit: number = 6): PaginatedPosts {
    const allPosts = this.getAllPosts();

    // Calculate pagination offsets
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedPosts = allPosts.slice(startIndex, endIndex);
    const totalPages = Math.ceil(allPosts.length / limit);

    return {
      posts: paginatedPosts,
      totalPages,
      currentPage: page,
      totalPosts: allPosts.length,
    };
  }

  /**
   * Retrieves a single post by its slug.
   * @param slug Post identifier without extension
   */
  public getPostBySlug(slug: string): PostProps | null {
    const filePath = path.join(this.contentDir, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const metadata = this.parseMetadata(fileContent);
    const content = fileContent.replace(/export const metadata = {[\s\S]*?};/, '').trim();

    return {
      slug,
      title: metadata.title || slug,
      date: metadata.date || '',
      tag: metadata.tag || '',
      description: metadata.description || '',
      content,
    };
  }
}
