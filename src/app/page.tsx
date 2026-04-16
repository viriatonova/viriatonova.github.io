import { Container, Grid, GridCol, Title, Text, Group, Badge, Divider, Stack, Anchor, Space, Box, Avatar } from "@mantine/core";
import { Post } from "@/components/Post";
import { PostsHandler } from "@/lib/postsHandler";

export default function Home() {
  const handler = new PostsHandler();
  const { posts } = handler.getPaginatedPosts(1, 10);

  const projects = [
    { name: "Capaolab", desc: "Plataforma SaaS para gestão" },
    { name: "Dev Minimal", desc: "Ferramenta CLI para scaffolds focados em performance" }
  ];

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
          <Stack gap={40}>
            <Box>
              <Group wrap="nowrap" align="center" mb="md">
                <Avatar size="lg" radius="100%" color="gray" />
                <div>
                  <Text fw={600} size="lg">Viriato Nova</Text>
                  <Text size="sm" c="dimmed">Engenheiro & Designer</Text>
                </div>
              </Group>
              <Text size="sm" c="dimmed" lh={1.6}>
                Meu espaço pessoal na internet. Ensaios sobre tecnologia, design e desenvolvimento de software. A busca por construir pontes através da simplicidade.
              </Text>
            </Box>

            <Divider />
            <Box>
              <Title order={4} mb="lg" fw={600}>Projetos Recentes</Title>
              <Stack gap="md">
                {projects.map((project, idx) => (
                  <Box key={idx}>
                    <Anchor fw={600} size="sm" style={{ color: 'inherit' }}>{project.name}</Anchor>
                    <Text size="xs" c="dimmed" mt={4}>{project.desc}</Text>
                  </Box>
                ))}
              </Stack>
              <Anchor size="sm" mt="xl" display="inline-block" fw={500}>
                Ver todos os projetos →
              </Anchor>
            </Box>
          </Stack>
        </GridCol>
      </Grid>
    </Container >
  );
}
