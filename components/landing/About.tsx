"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionReveal } from "./SectionReveal";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="container-pad grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <SectionReveal className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/about-story.jpg"
              alt={t("aboutTitle")}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 border-[6px] border-brand-accent lg:block rtl:-right-6 rtl:left-auto" />
          <div className="absolute -top-6 -right-6 hidden h-32 w-32 bg-brand-primary/95 lg:block rtl:-left-6 rtl:right-auto" />
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <span className="heading-eyebrow">{t("aboutEyebrow")}</span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-brand-primary sm:text-5xl">
            {t("aboutTitle")}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-text/80">
            {t("aboutStory")}
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Pillar title={t("visionTitle")} body={t("visionBody")} />
            <Pillar title={t("why4Title")} body={t("why4Body")} />
          </div>

          <a href="#projects" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent hover:text-brand-accent-hover">
            {t("aboutLearnMore")}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-l-2 border-brand-accent pl-5 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-5">
      <h4 className="font-display text-lg font-semibold text-brand-primary">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-brand-text/70">{body}</p>
    </div>
  );
}
