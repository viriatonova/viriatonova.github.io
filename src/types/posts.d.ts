export interface PostProps {
  title: string;
  date: string;
  tag: string;
  description?: string;
  slug?: string;
  content?: string;
  children?: React.ReactNode;
}

export interface PaginatedPosts {
  posts: PostProps[];
  totalPages: number;
  currentPage: number;
  totalPosts: number;
}