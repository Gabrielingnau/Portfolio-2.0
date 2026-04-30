"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  // Em vez de null, retornamos um placeholder para evitar que o layout pule
  if (!mounted) {
    return <div className="w-16 h-9" aria-hidden="true" />;
  }

  const isDark = theme === "dark";

  return (
    <Button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      variant="outline"
      className={cn(
        "relative w-16 min-h-6 rounded-full border border-muted p-0",
        "bg-transparent hover:bg-transparent",
      )}
    >
      <motion.div
        className="absolute top-1/2 -left-1 -translate-y-1/2 size-8 rounded-full bg-muted flex items-center justify-center"
        animate={{ x: isDark ? 0 : 32 }} // Ajustei o valor de X para caber melhor
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <Moon size={14} className="text-foreground" />
        ) : (
          <Sun size={14} className="text-foreground" />
        )}
      </motion.div>
    </Button>
  );
}
