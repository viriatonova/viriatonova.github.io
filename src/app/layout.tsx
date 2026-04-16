import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider, createTheme, mantineHtmlProps } from "@mantine/core";
import theme from "@/theme";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viriato Nova",
  description: "Publicações, Projetos e Portfólio de Viriato Nova",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript suppressHydrationWarning />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <Header />
          {children}
        </MantineProvider>

      </body>
    </html>
  );
}
