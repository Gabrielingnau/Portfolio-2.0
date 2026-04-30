"use client";

import { Github, Globe, Linkedin, Mail, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { yupResolver } from "@hookform/resolvers/yup";
import { asLink, Content } from "@prismicio/client";
import { PrismicText } from "@prismicio/react";

import { FormSchemaContact, formSchemaContact } from "./types/contact-yup-type";

interface ContactProps {
  data: Content.ContactGatewaySlice;
}

export function Contact({ data }: ContactProps) {
  const { badge, description, contact_methods_panel } = data.primary;
  
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaContact>({
    resolver: yupResolver(formSchemaContact()),
  });

  const iconMap = {
    GitHub: Github,
    Linkedin: Linkedin,
    Mail: Mail,
  };

  async function onSubmit(formData: FormSchemaContact) {
    const toastId = toast.loading("Enviando sua mensagem...");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Falha no servidor");
      }

      toast.success("Mensagem enviada com sucesso!", { id: toastId });
      reset(); // Limpa o formulário após o sucesso
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      toast.error("Não foi possível enviar a mensagem agora. Tente novamente.", { id: toastId });
    }
  }

  return (
    <section
      id="contact"
      className="container-spacing overflow-hidden border-t border-border bg-muted/30 py-20 dark:bg-muted/10"
    >
      <div className="mx-auto max-w-(--max-content) px-6">
        <div className="mb-12 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary"
          >
            <PrismicText field={badge} />
          </Badge>
          <h2 className="font-play text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Vamos <span className="text-primary">Conversar</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] font-inter text-muted-foreground">
            <PrismicText field={description} />
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* FORM ATIVADO */}
          <div className="relative">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="font-medium">Nome</Label>
                <Input 
                  id="name"
                  placeholder="Seu nome" 
                  {...register("name")} 
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  {...register("email")}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-medium">Mensagem</Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Conte sobre seu projeto..."
                  {...register("message")}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
              </div>

              <Button 
                className="w-full" 
                type="submit" 
                disabled={isSubmitting}
              >
                <Send className="mr-2 size-4" />
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </div>

          {/* INFO / SOCIAL */}
          <div className="flex flex-col justify-center">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h3 className="font-play text-2xl font-bold text-foreground mb-4">
                Me encontre por aqui
              </h3>

              <p className="font-inter text-muted-foreground mb-8">
                Fique à vontade para me contatar diretamente pelas redes sociais. 
                Respondo o mais rápido possível!
              </p>

              <div className="flex gap-4">
                {contact_methods_panel[0]?.contact_links.map((linkItem, i) => {
                  const url = asLink(linkItem) ?? "#";
                  const label = linkItem.text as keyof typeof iconMap;
                  const Icon = iconMap[label] || Globe;

                  return (
                    <a
                      key={i}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-14 items-center justify-center rounded-2xl border border-border bg-background transition-all duration-300 hover:scale-110 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg group"
                    >
                      <Icon className="size-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}