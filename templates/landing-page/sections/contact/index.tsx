"use client";

import { Send, Github, Linkedin, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormSchemaContact, formSchemaContact } from "./types/contact-yup-type";

export function Contact() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormSchemaContact>({
    resolver: yupResolver(formSchemaContact()),
  });

  async function onSubmit(data: FormSchemaContact) {
    try {
      reset();
      toast.success("Email enviado com sucesso");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Erro inesperado");
      }
    }
  }

  return (
    <section
      id="contact"
      className="container-spacing overflow-hidden bg-ring/20 dark:bg-muted/50"
    >
      <div className="max-w-(--max-content) mx-auto">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-inter-700-56 text-inter-700-56 text-foreground mb-4">
            Vamos <span className="text-primary">Conversar</span>
          </h2>
          <p className="text-inter-400-16 text-muted-foreground max-w-(--medium-content) mx-auto">
            Tem um projeto em mente? Vamos conversar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 sm:gap-10 gap-6">
          {/* FORM */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label className="text-inter-500-14 mb-2 block">Nome</Label>
              <Input placeholder="Seu nome" {...register("name")} />
              {errors.name?.message && (
                <p className={`text-inter-400-16 text-destructive`}>
                  {errors.name?.message}
                </p>
              )}
            </div>

            <div>
              <Label className="text-inter-500-14 mb-2 block">Email</Label>
              <Input
                type="email"
                placeholder="seu@email.com"
                {...register("email")}
              />
              {errors.email?.message && (
                <p className={`text-inter-400-16 text-destructive`}>
                  {errors.email?.message}
                </p>
              )}
            </div>

            <div>
              <Label className="text-inter-500-14 mb-2 block">Mensagem</Label>
              <Textarea
                rows={5}
                placeholder="Conte sobre seu projeto..."
                {...register("message")}
              />
              {errors.message?.message && (
                <p className={`text-inter-400-16 text-destructive`}>
                  {errors.message?.message}
                </p>
              )}
            </div>

            <Button className="w-full" type="submit">
              <Send className="w-4 h-4 mr-2" />
              Enviar Mensagem
            </Button>
          </form>

          {/* INFO / SOCIAL */}
          <div className="flex flex-col justify-center">
            <h3 className="text-play-700-20 text-foreground mb-6">
              Ou me encontre por aqui
            </h3>

            <p className="text-inter-400-16 text-muted-foreground mb-10 max-w-(--medium-content)">
              Estou sempre aberto a novas oportunidades, colaborações e boas
              conversas sobre tecnologia e design.
            </p>

            <div className="flex gap-5">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-xl border bg-card hover:bg-primary/10 hover:border-primary/40 flex items-center justify-center transition-all duration-300 hover:scale-105 group"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
