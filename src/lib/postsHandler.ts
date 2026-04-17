import fs from 'fs';
import path from 'path';
import { PostProps, PaginatedPosts } from '@/types/posts';

export class PostsHandler {
  private contentDir: string;

  constructor() {
    const dirParts = [process.cwd(), 'src', 'content'];
    this.contentDir = dirParts.join(path.sep);
  }

  private parseFrontmatter(fileContent: string): { metadata: Partial<PostProps>; content: string } {
    const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
    if (!match) return { metadata: {}, content: fileContent.trim() };

    const frontmatter = match[1];
    const content = match[2].trim();
    const metadata: Partial<PostProps> = {};

    for (const line of frontmatter.split('\n')) {
      const colonIdx = line.indexOf(':');
      if (colonIdx === -1) continue;
      const key = line.slice(0, colonIdx).trim();
      const value = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, '');
      if (key === 'title') metadata.title = value;
      else if (key === 'date') metadata.date = value;
      else if (key === 'tag') metadata.tag = value;
      else if (key === 'description') metadata.description = value;
    }

    return { metadata, content };
  }

  public getAllPosts(): PostProps[] {
    if (!fs.existsSync(this.contentDir)) return [];

    const files = fs.readdirSync(this.contentDir);

    return files
      .filter((file) => file.endsWith('.mdx'))
      .map((fileName) => {
        const filePath = path.join(this.contentDir, fileName);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const slug = fileName.replace(/\.mdx$/, '');
        const { metadata, content } = this.parseFrontmatter(fileContent);

        return {
          slug,
          title: metadata.title || slug,
          date: metadata.date || '',
          tag: metadata.tag || '',
          description: metadata.description || '',
          content,
        };
      });
  }

  public getPaginatedPosts(page: number = 1, limit: number = 6): PaginatedPosts {
    const allPosts = this.getAllPosts();
    const startIndex = (page - 1) * limit;
    const paginatedPosts = allPosts.slice(startIndex, startIndex + limit);

    return {
      posts: paginatedPosts,
      totalPages: Math.ceil(allPosts.length / limit),
      currentPage: page,
      totalPosts: allPosts.length,
    };
  }

  public getPostBySlug(slug: string): PostProps | null {
    const filePath = path.join(this.contentDir, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { metadata, content } = this.parseFrontmatter(fileContent);

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
