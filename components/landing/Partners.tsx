"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { partners } from "@/lib/content";
import { SectionReveal } from "./SectionReveal";

export function Partners() {
  const { t } = useLanguage();
  const loop = [...partners, ...partners];

  return (
    <section className="border-y border-brand-primary/10 bg-white py-16 lg:py-20">
      <div className="container-pad">
        <SectionReveal className="text-center">
          <span className="heading-eyebrow">{t("partnersEyebrow")}</span>
          <h2 className="mt-3 font-display text-2xl font-semibold text-brand-primary sm:text-3xl">
            {t("partnersTitle")}
          </h2>
        </SectionReveal>

        <div
          className="mt-10 overflow-hidden"
          style={{ maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}
        >
          <div className="marquee-track flex w-max items-center gap-16">
            {loop.map((p, i) => (
              <div key={`${p.alt}-${i}`} className="relative h-16 w-32 shrink-0 grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 lg:h-20 lg:w-40">
                <Image src={p.src} alt={p.alt} fill className="object-contain" sizes="160px" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
