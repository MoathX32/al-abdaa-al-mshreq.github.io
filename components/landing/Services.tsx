"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { services } from "@/lib/content";
import { SectionReveal } from "./SectionReveal";

export function Services() {
  const { t, locale } = useLanguage();

  return (
    <section id="services" className="bg-brand-light py-24 lg:py-32">
      <div className="container-pad">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <span className="heading-eyebrow">{t("servicesEyebrow")}</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-brand-primary sm:text-5xl">
            {t("servicesTitle")}
          </h2>
          <p className="mt-5 text-base text-brand-text/75">{t("servicesSubtitle")}</p>
        </SectionReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title.en}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                className="group relative flex flex-col gap-5 border border-brand-primary/10 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-brand-accent/40 hover:shadow-card"
              >
                <div className="flex h-14 w-14 items-center justify-center bg-brand-primary/5 text-brand-accent transition-colors duration-300 group-hover:bg-brand-accent group-hover:text-white">
                  <Icon className="h-7 w-7" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-xl font-semibold text-brand-primary">
                  {service.title[locale]}
                </h3>
                <p className="text-sm leading-relaxed text-brand-text/75">
                  {service.body[locale]}
                </p>
                <span className="mt-auto h-[2px] w-10 bg-brand-accent transition-all duration-300 group-hover:w-20" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
