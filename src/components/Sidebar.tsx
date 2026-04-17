import { Box, Group, Avatar, Text, Divider, Title, Stack, Anchor, Badge } from "@mantine/core";
import Link from "next/link";
import { PostsHandler } from "@/lib/postsHandler";
import { SITE_CONFIG } from "@/config/site";

export function Sidebar() {
  const handler = new PostsHandler();
  const tags = handler.getAllTags();

  const projects = [
    { name: "Capaolab", desc: "Plataforma SaaS para gestão" },
    { name: "Dev Minimal", desc: "Ferramenta CLI para scaffolds focados em performance" }
  ];

  return (
    <Stack gap={36}>
      <Box>
        <Group wrap="nowrap" align="center" mb="md">
          <Avatar src="vt.jpeg" size="lg" radius="100%" color="gray" />
          <div>
            <Text fw={600} size="lg">{SITE_CONFIG.name}</Text>
            <Text size="sm" c="dimmed">{SITE_CONFIG.Headline}</Text>
          </div>
        </Group>
        <Text size="sm" c="dimmed" lh={1.6}>
          {SITE_CONFIG.description}
        </Text>
      </Box>

      <Divider />

      <Box>
        <Title order={4} mb="lg" fw={600}>Tags</Title>
        <Group gap="xs">
          {tags.map((tag) => (
            <Box key={tag}>
              <Link href={`/tags/${encodeURIComponent(tag.toLowerCase())}`} style={{ textDecoration: 'none' }}>
                <Badge
                  variant="light"
                  color="gray"
                  style={{ cursor: 'pointer' }}
                >
                  {tag}
                </Badge>
              </Link>
            </Box>
          ))}
        </Group>
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
  );
}
