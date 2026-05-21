"use client";

import { BadgeCheck, Clock, Sparkles, Handshake } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionReveal } from "./SectionReveal";

export function WhyChooseUs() {
  const { t } = useLanguage();

  const features = [
    { icon: BadgeCheck,    title: t("why1Title"), body: t("why1Body") },
    { icon: Clock,         title: t("why2Title"), body: t("why2Body") },
    { icon: Sparkles,      title: t("why3Title"), body: t("why3Body") },
    { icon: Handshake,     title: t("why4Title"), body: t("why4Body") },
  ];

  return (
    <section
      className="relative isolate overflow-hidden parallax-bg py-28 lg:py-36"
      style={{ backgroundImage: "url('/images/vision-image.jpg')" }}
    >
      <div className="absolute inset-0 -z-10 bg-brand-primary-deep/88" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(186,155,100,0.18),transparent_60%)]" />

      <div className="container-pad">
        <SectionReveal className="mx-auto max-w-3xl text-center text-white">
          <span className="heading-eyebrow">{t("whyEyebrow")}</span>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl text-white">
            {t("whyTitle")}
          </h2>
          <p className="mt-5 text-white/80">{t("whySubtitle")}</p>
        </SectionReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <SectionReveal key={f.title} delay={i * 0.08}>
              <div className="h-full border border-white/15 bg-white/5 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-brand-accent/60 hover:bg-white/10">
                <f.icon className="h-9 w-9 text-brand-accent" strokeWidth={1.5} />
                <h4 className="mt-6 font-display text-lg font-semibold text-white">{f.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{f.body}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
