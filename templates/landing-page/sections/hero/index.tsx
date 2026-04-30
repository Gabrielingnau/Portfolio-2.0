"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Content, asLink } from "@prismicio/client";
import { PrismicRichText, PrismicText } from "@prismicio/react";

interface HeroProps {
  data: Content.HeroIntroSlice;
}

export function Hero({ data }: HeroProps) {
  const {
    intro_label,
    headline,
    subtitle,
    description,
    cta_buttons,
    social_links,
  } = data.primary;

  return (
    <section
      id="home"
      className="container-spacing flex items-center justify-center w-full h-screen overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center justify-center gap-8 sm:gap-10 max-w-max"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-inter-500-14 uppercase text-muted-foreground"
          >
            <PrismicText field={intro_label} />
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-inter-700-72 whitespace-nowrap font-bold text-foreground text-center"
          >
            <PrismicText field={headline} />
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-inter-500-24 text-primary"
          >
            <PrismicText field={subtitle} />
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-inter-400-16 text-muted-foreground text-center max-w-xl"
          >
            <PrismicRichText field={description} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center sm:gap-4 gap-2"
        >
          {cta_buttons.map((item, index) => {
            // asLink resolve a URL independente se for link Web ou Documento
            const url = asLink(item) ?? "#";

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant={item.variant} asChild>
                  <Link href={url}>{item.text}</Link>
                </Button>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex items-center justify-center gap-4"
        >
          {social_links.map((item, index) => {
            const url = asLink(item) ?? "#";
            const IconComponent = item.variant === "GitHub" ? Github : Linkedin;

            return (
              <motion.div key={index} whileHover={{ y: -4 }}>
                <Link
                  href={url}
                  target="_blank"
                  className="transition-colors duration-200 hover:text-primary text-muted-foreground"
                >
                  <IconComponent size={20} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
