"use client";

import { Title, Text, Group, Badge, Box, Anchor } from "@mantine/core";
import Link from "next/link";
import { PostProps } from "@/types/posts";

export function Post({ title, date, tag, description, slug, children }: PostProps) {

  const TitleComponent = slug ? (
    <Anchor component={Link} href={`/posts/${slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
      <Title order={2} mb="xs" style={{ lineHeight: 1.25, letterSpacing: "-0.5px" }}>
        {title}
      </Title>
    </Anchor>
  ) : (
    <Title order={1} mb="md" style={{ lineHeight: 1.25, letterSpacing: "-0.5px" }}>
      {title}
    </Title>
  );

  return (
    <Box component="article">
      {TitleComponent}
      <Group gap="sm" mb="md">
        <Badge variant="light" color="gray" radius="sm" size="sm">{tag}</Badge>
        <Text size="sm" c="dimmed">
          {date}
        </Text>
      </Group>
      {description && !children && (
        <Text c="dimmed" size="md" lh={1.7}>
          {description}
        </Text>
      )}
      {children && (
        <Box mt="xl" style={{ lineHeight: 1.8 }}>
          {children}
        </Box>
      )}
    </Box>
  );
}
