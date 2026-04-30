import { Player } from "@/components/player";
import { Content } from "@prismicio/client";
import { PrismicText } from "@prismicio/react";

import { BadgeTech } from "./components/badge-tech";
import { Highlights } from "./components/highlights";

interface AboutProps {
  data: Content.BioHighlightedFeaturesSlice;
}

export function About({ data }: AboutProps) {
  const {
    subtitle,
    intro_media,
    intro_caption,
    intro_description,
    profile_summary,
    technology_tags,
    feature_list,
  } = data.primary;

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
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-5 items-start">
          <div className="group block rounded-2xl overflow-hidden border bg-card shadow-xl hover:shadow-2xl transition-all">
            <Player title="Apresentação" src={`${intro_media}`} />

            <div className="p-6">
              <h4 className="text-inter-700-16 text-foreground mb-2">
                {intro_caption}
              </h4>
              <p className="text-inter-400-14 text-muted-foreground">
                <PrismicText field={intro_description} />
              </p>
            </div>
          </div>

          <div className="space-y-8 text-center sm:text-start">
            <div>
              <h3 className="text-inter-600-24 text-foreground mb-4">
                Eu sou <span className="text-primary">Gabriel Lingnau</span>, e
                meu trabalho é acelerar o lançamento do seu produto digital.
              </h3>

              <div>
                <p className="text-inter-400-16 text-muted-foreground">
                  <PrismicText field={profile_summary} />
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-inter-700-14 uppercase tracking-widest text-foreground mb-4">
                Tecnologias
              </h4>
              <div className="flex flex-wrap gap-2 sm:justify-start justify-center">
                {technology_tags.map((tech, index) => (
                  <BadgeTech key={index} tech={tech.tag} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid md:grid-cols-4 sm:gap-6 gap-3">
          {feature_list.map((feature, index) => (
            <Highlights key={index} item={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
