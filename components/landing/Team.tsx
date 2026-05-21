"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { teamMembers } from "@/lib/content";
import { SectionReveal } from "./SectionReveal";

export function Team() {
  const { t, locale } = useLanguage();

  return (
    <section id="team" className="bg-white py-24 lg:py-32">
      <div className="container-pad">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <span className="heading-eyebrow">{t("teamEyebrow")}</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-brand-primary sm:text-5xl">
            {t("teamTitle")}
          </h2>
          <p className="mt-5 text-base text-brand-text/75">{t("teamSubtitle")}</p>
        </SectionReveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((m, i) => (
            <SectionReveal key={m.name.en} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden border border-brand-primary/10 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <div className="relative aspect-[4/5] overflow-hidden bg-brand-light">
                  <Image
                    src={m.image}
                    alt={m.name[locale]}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-accent transition-all duration-500 group-hover:h-2" />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <h3 className="font-display text-lg font-semibold text-brand-primary">{m.name[locale]}</h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">{m.role[locale]}</p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-text/70">{m.bio[locale]}</p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
