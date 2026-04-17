import { Post } from "@/components/Post";
import { Container, Anchor, Group } from "@mantine/core";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PostsHandler } from "@/lib/postsHandler";

export async function generateStaticParams() {
  const handler = new PostsHandler();
  return handler.getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  const handler = new PostsHandler();
  const post = handler.getPostBySlug(slug);
  if (!post) notFound();

  try {
    const { default: PostContent } = await import(`@/content/${slug}.mdx`);

    return (
      <Container size="lg" pb="xl">
        <Group mb="xl">
          <Link href="/" passHref>
            <Anchor c="dimmed">
              ← Voltar para a página inicial
            </Anchor>
          </Link>
        </Group>
        <Post
          title={post.title}
          date={post.date}
          tag={post.tag}
          description={post.description}
        >
          <PostContent />
        </Post>
      </Container>
    );
  } catch {
    notFound();
  }
}
