import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "sonner";

import { Header } from "@/components/header";
import { Footer } from "@/components/Footer";

import { ThemeProvider } from "./providers/theme-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const playfair = Playfair_Display({
  variable: "--font-play",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Lingnau | Desenvolvedor Front-End",
  description:
    "Portfólio com meus projetos, experiências e experimentos em desenvolvimento web. Foco em performance, código limpo e interfaces bem construídas.",
  keywords: [
    "Desenvolvedor Front-End",
    "React",
    "Next.js",
    "TypeScript",
    "Portfólio",
  ],
  authors: [{ name: "Gabriel Lingnau" }],
  creator: "Gabriel Lingnau",
  openGraph: {
    title: "Gabriel Lingnau | Desenvolvedor Front-End",
    description:
      "Conheça meus projetos e minha forma de construir aplicações modernas para a web.",
    url: "https://portfolio-2-0-lemon-six.vercel.app/",
    siteName: "Gabriel Lingnau - Portfólio",
    images: [
      {
        url: "https://portfolio-2-0-lemon-six.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Preview do portfólio de Gabriel Lingnau",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Lingnau | Desenvolvedor Front-End",
    description:
      "Projetos, experiências e experimentos em desenvolvimento web.",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://portfolio-2-0-lemon-six.vercel.app/"),
  icons: {
    icon: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-inter relative pb-21`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
