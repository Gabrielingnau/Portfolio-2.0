import { Player } from "@/components/player";

import { BadgeTech } from "./components/badge-tech";
import { Highlights } from "./components/highlights";

export function About() {
  return (
    <section
      id="about"
      className="container-spacing relative py-32 overflow-hidden bg-ring/20 dark:bg-muted/50"
    >
      <div className="max-w-(--max-content) mx-auto">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-inter-700-56 text-inter-700-56 text-foreground mb-4">
            Sobre <span className="text-primary">Mim</span>
          </h2>
          <p className="text-inter-400-16 text-muted-foreground max-w-(--medium-content) mx-auto">
            Conheça minha trajetória e forma de pensar como desenvolvedor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-5 items-start">
          <div className="group block rounded-2xl overflow-hidden border bg-card shadow-xl hover:shadow-2xl transition-all">
            <Player
              title="Apresentação"
              src={`https://www.youtube.com/embed/uXChCWOAdVI`}
            />

            <div className="p-6">
              <h4 className="text-inter-700-16 text-foreground mb-2">
                Assista à minha apresentação
              </h4>
              <p className="text-inter-400-14 text-muted-foreground">
                Clique para conhecer mais sobre minha trajetória, experiência e
                visão de desenvolvimento.
              </p>
            </div>
          </div>

          <div className="space-y-8 text-center sm:text-start">
            <div>
              <h3 className="text-inter-600-24 text-foreground mb-4">
                Eu sou <span className="text-primary">Gabriel Lingnau</span>,
                desenvolvedor focado em criar produtos digitais eficientes.
              </h3>

              <div className="space-y-4">
                <p className="text-inter-400-16 text-muted-foreground">
                  Com mais de 5 anos de experiência, ajudo a transformar ideias
                  em aplicações modernas, escaláveis e bem estruturadas.
                </p>

                <p className="text-inter-400-16 text-muted-foreground">
                  Meu foco vai além da interface: penso em arquitetura,
                  performance e experiência como parte de um todo.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-inter-700-14 uppercase tracking-widest text-foreground mb-4">
                Tecnologias
              </h4>

              <BadgeTech />
            </div>
          </div>
        </div>

        <Highlights />
      </div>
    </section>
  );
}
