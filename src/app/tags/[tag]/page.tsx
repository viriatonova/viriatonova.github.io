import { Container, Grid, GridCol, Stack, Title, Text, Box, Anchor } from "@mantine/core";
import { Post } from "@/components/Post";
import { PostsHandler } from "@/lib/postsHandler";
import { Sidebar } from "@/components/Sidebar";
import Link from 'next/link';
import { notFound } from "next/navigation";

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const resolvedParams = await params;
  const decodedTag = decodeURIComponent(resolvedParams.tag);

  const handler = new PostsHandler();
  const { posts } = handler.getPaginatedPostsByTag(decodedTag, 1, 10);

  if (!posts || posts.length === 0) {
    notFound();
  }

  const displayTag = posts[0].tag;

  return (
    <Container size="lg" pb="xl">
      <Grid gutter={60}>
        <GridCol span={{ base: 12, md: 8 }}>
          <Box mb="xl">
            <Text size="sm" c="dimmed" mb={4}>Mostrando posts sobre:</Text>
            <Title order={2} mb="xs">{displayTag}</Title>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Anchor component="span" size="sm" display="inline-block">← Voltar para o início</Anchor>
            </Link>
          </Box>

          <Stack gap={50}>
            {posts.map((post) => (
              <Post
                key={post.slug}
                title={post.title}
                date={post.date}
                tag={post.tag}
                description={post.description}
                slug={post.slug}
              />
            ))}
          </Stack>
        </GridCol>

        <GridCol span={{ base: 12, md: 4 }}>
          <Sidebar />
        </GridCol>
      </Grid>
    </Container>
  );
}

export async function generateStaticParams() {
  const handler = new PostsHandler();
  const tags = handler.getAllTags();

  return tags.map((tag) => ({
    tag: tag.toLowerCase(),
  }));
}
