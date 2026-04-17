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

  private parseDate(dateStr: string | undefined): number {
    if (!dateStr) return 0;
    const months: Record<string, number> = {
      'janeiro': 0, 'fevereiro': 1, 'março': 2, 'abril': 3, 'maio': 4, 'junho': 5,
      'julho': 6, 'agosto': 7, 'setembro': 8, 'outubro': 9, 'novembro': 10, 'dezembro': 11
    };
    
    const match = dateStr.match(/(\d{1,2})\s+de\s+([A-Za-zçÇ]+)(?:,?\s+)?(\d{4})/i);
    if (!match) return new Date(dateStr).getTime() || 0;
    
    const day = parseInt(match[1], 10);
    const monthStr = match[2].toLowerCase();
    const month = months[monthStr] ?? 0;
    const year = parseInt(match[3], 10);
    return new Date(year, month, day).getTime();
  }

  public getAllPosts(): PostProps[] {
    if (!fs.existsSync(this.contentDir)) return [];

    const files = fs.readdirSync(this.contentDir);

    return files
      .filter((file: string) => file.endsWith('.mdx'))
      .map((fileName: string) => {
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
      })
      .sort((a: PostProps, b: PostProps) => this.parseDate(b.date) - this.parseDate(a.date));
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

  public getAllTags(): string[] {
    const posts = this.getAllPosts();
    const tags = new Set<string>();
    posts.forEach(post => {
      if (post.tag) {
        tags.add(post.tag);
      }
    });
    return Array.from(tags).sort();
  }

  public getPaginatedPostsByTag(tag: string, page: number = 1, limit: number = 6): PaginatedPosts {
    const decodedTag = tag.toLowerCase();
    const allPosts = this.getAllPosts().filter(p => 
      p.tag.toLowerCase() === decodedTag || 
      p.tag.toLowerCase().replace(/ /g, '-') === decodedTag
    );
    
    const startIndex = (page - 1) * limit;
    const paginatedPosts = allPosts.slice(startIndex, startIndex + limit);

    return {
      posts: paginatedPosts,
      totalPages: Math.ceil(allPosts.length / limit),
      currentPage: page,
      totalPosts: allPosts.length,
    };
  }
}
