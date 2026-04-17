import { Container, Grid, GridCol, Stack } from "@mantine/core";
import { Post } from "@/components/Post";
import { PostsHandler } from "@/lib/postsHandler";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  const handler = new PostsHandler();
  const { posts } = handler.getPaginatedPosts(1, 10);

  return (
    <Container size="lg" pb="xl">

      <Grid gutter={60}>
        <GridCol span={{ base: 12, md: 8 }}>
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
    </Container >
  );
}
