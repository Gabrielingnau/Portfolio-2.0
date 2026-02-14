"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
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
            Olá, eu sou
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-inter-700-72 text-inter-700-72 whitespace-nowrap font-bold text-foreground"
          >
            Gabriel Developer
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-inter-500-24 text-primary"
          >
            Frontend Developer
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-inter-400-16 text-muted-foreground text-center max-w-xl"
          >
            Transformo ideias em experiências digitais elegantes e
            performáticas. Especializado em React, TypeScript e interfaces
            modernas.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center sm:gap-4 gap-2"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button>
              <Link href="#projects">Ver Projetos</Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button variant="secondary">
              <Download size={16} />
              <Link href="#projects" className="text-foreground">
                Baixar CV
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex items-center justify-center gap-4"
        >
          <motion.div whileHover={{ y: -4 }}>
            <Link
              href="https://github.com/Gabrielingnau"
              target="_blank"
              className="transition-colors duration-200 hover:text-primary text-muted-foreground"
            >
              <Github size={20} />
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -4 }}>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="transition-colors duration-200 hover:text-primary text-muted-foreground"
            >
              <Linkedin size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
