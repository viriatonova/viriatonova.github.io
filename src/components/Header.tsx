"use client";

import { Group, Title, Anchor, Burger, Drawer, ActionIcon, Stack, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useMantineColorScheme, useComputedColorScheme } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { PROJECT_PATTERNS } from "@/theme";

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "light" ? "dark" : "light");
  };

  const pathname = usePathname();

  const links = [
    { label: "Blog", href: "/" },
    { label: "Projetos", href: "#" },
    { label: "Currículo", href: "#" },
  ];

  const ThemeIcon = () => (
    <ActionIcon
      onClick={toggleColorScheme}
      variant="default"
      size="lg"
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === "dark" ? (
        <MoonIcon size={PROJECT_PATTERNS.icons.width} />
      ) : (
        <SunIcon size={PROJECT_PATTERNS.icons.width} />
      )}
    </ActionIcon>
  );

  return (
    <Container size="lg" pt="xl">
      <Group justify="space-between" mb="40px" component="header" wrap="nowrap">
        <Anchor component={Link} href="/" style={{ color: "inherit", textDecoration: "none" }}>
          <Title order={1} style={{ letterSpacing: "-1px" }}>
            Viriato Nova
          </Title>
        </Anchor>

        {/* Desktop Menu */}
        <Group gap="md" visibleFrom="lg">
          {links.map((link) => (
            <Anchor
              key={link.label}
              component={Link}
              href={link.href}
              c={pathname === link.href ? "inherit" : "dimmed"}
              unstyled
              fw={500}
            >
              {link.label}
            </Anchor>
          ))}
          <ThemeIcon />
        </Group>

        {/* Mobile Burger */}
        <Burger opened={opened} onClick={toggle} hiddenFrom="lg" size="sm" />

        {/* Mobile Drawer */}
        <Drawer
          opened={opened}
          onClose={close}
          size="100%"
          padding="md"
          title={<Title order={3}>Navegação</Title>}
          hiddenFrom="lg"
          position="right"
          zIndex={1000000}
        >
          <Stack gap="lg" mt="xl">
            {links.map((link) => (
              <Anchor
                key={link.label}
                component={Link}
                href={link.href}
                c={pathname === link.href ? "inherit" : "dimmed"}
                unstyled
                fw={500}
                size="xl"
                onClick={close}
              >
                {link.label}
              </Anchor>
            ))}
            <Group justify="space-between" mt="xl" pt="md" style={{ borderTop: "1px solid var(--mantine-color-default-border)" }}>
              <span style={{ fontWeight: 500, fontSize: "1.1rem" }}>Tema</span>
              <ThemeIcon />
            </Group>
          </Stack>
        </Drawer>
      </Group>
    </Container>
  );
}
