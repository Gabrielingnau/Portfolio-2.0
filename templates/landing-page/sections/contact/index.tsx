"use client";

import { AlertCircle, Github, Globe, Linkedin, Mail, Send } from "lucide-react";
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
  console.log(contact_methods_panel);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormSchemaContact>({
    resolver: yupResolver(formSchemaContact()),
  });

  const iconMap = {
  GitHub: Github,
  Linkedin: Linkedin,
  Mail: Mail,
};

  async function onSubmit() {
    // Como a função está desativada, avisamos o usuário caso ele tente forçar
    toast.info(
      "O envio de e-mails será liberado em breve após a configuração do domínio!",
    );
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
          {/* FORM COM OVERLAY DE "EM BREVE" */}
          <div className="relative">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 opacity-50 pointer-events-none grayscale-[0.5]"
            >
              <div>
                <Label className="mb-2 block font-medium">Nome</Label>
                <Input placeholder="Seu nome" {...register("name")} />
              </div>

              <div>
                <Label className="mb-2 block font-medium">Email</Label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  {...register("email")}
                />
              </div>

              <div>
                <Label className="mb-2 block font-medium">Mensagem</Label>
                <Textarea
                  rows={4}
                  placeholder="Conte sobre seu projeto..."
                  {...register("message")}
                />
              </div>

              <Button className="w-full" type="submit" disabled>
                <Send className="mr-2 size-4" />
                Enviar Mensagem
              </Button>
            </form>

            {/* Banner de Aviso */}
            <div className="absolute -inset-2 z-10 flex flex-col items-center justify-center rounded-xl bg-background/20 backdrop-blur-[2px] text-center p-6 border border-dashed border-border">
              <AlertCircle className="size-10 text-primary mb-3 opacity-80" />
              <h4 className="font-bold text-foreground">
                Formulário em Manutenção
              </h4>
              <p className="text-sm text-muted-foreground mt-1 max-w-[280px]">
                O envio direto por e-mail está temporariamente indisponível
                enquanto configuro o domínio profissional.
              </p>
              <p className="text-xs font-semibold text-primary mt-4 uppercase tracking-widest">
                Disponível em breve
              </p>
            </div>
          </div>

          {/* INFO / SOCIAL */}
          <div className="flex flex-col justify-center">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h3 className="font-play text-2xl font-bold text-foreground mb-4">
                Me encontre por aqui
              </h3>

              <p className="font-inter text-muted-foreground mb-8">
                Enquanto o formulário está em setup, você pode me contatar
                diretamente pelo
                <span className="text-foreground font-medium">
                  {" "}
                  LinkedIn
                </span>{" "}
                ou <span className="text-foreground font-medium">GitHub</span>.
                Respondo rapidinho!
              </p>

              <div className="flex gap-4">
                {/* Pela sua imagem, o contact_methods_panel parece ter 1 item (Item 1), 
         e dentro dele vários links. Se for esse o caso, precisamos mapear os links:
      */}
                {contact_methods_panel[0]?.contact_links.map((linkItem, i) => {
                  const url = asLink(linkItem) ?? "#";

                  // Pegamos o texto que você digitou (GitHub, Linkedin, Mail)
                  const label = linkItem.text as keyof typeof iconMap;

                  // Escolhemos o ícone baseado no texto, ou usamos o Globe como padrão
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
