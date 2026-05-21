"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { MapPin, User2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { projects } from "@/lib/content";
import { SectionReveal } from "./SectionReveal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Projects() {
  const { t, locale } = useLanguage();

  return (
    <section id="projects" className="bg-white py-24 lg:py-32">
      <div className="container-pad">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <span className="heading-eyebrow">{t("projectsEyebrow")}</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-brand-primary sm:text-5xl">
            {t("projectsTitle")}
          </h2>
          <p className="mt-5 text-base text-brand-text/75">{t("projectsSubtitle")}</p>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-14">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={28}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            breakpoints={{
              640:  { slidesPerView: 1.4 },
              900:  { slidesPerView: 2 },
              1280: { slidesPerView: 2.4 },
            }}
            className="!pb-14"
          >
            {projects.map((p) => (
              <SwiperSlide key={p.title.en} className="h-auto">
                <article className="group flex h-full flex-col overflow-hidden border border-brand-primary/10 bg-white transition-shadow duration-300 hover:shadow-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title[locale]}
                      fill
                      sizes="(min-width: 1280px) 38vw, (min-width: 900px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-7">
                    <h3 className="font-display text-xl font-semibold text-brand-primary">
                      {p.title[locale]}
                    </h3>
                    <div className="flex flex-col gap-2 text-sm text-brand-text/70">
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-brand-accent" />
                        {p.location[locale]}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <User2 className="h-4 w-4 text-brand-accent" />
                        {p.client[locale]}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-brand-text/80">{p.scope[locale]}</p>
                    {p.budget && (
                      <div className="mt-auto flex items-center justify-between border-t border-brand-primary/10 pt-4">
                        <span className="text-xs uppercase tracking-wider text-brand-text/60">Budget</span>
                        <span className="font-display text-lg font-semibold text-brand-accent">{p.budget}</span>
                      </div>
                    )}
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </SectionReveal>

        <div className="mt-6 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent hover:text-brand-accent-hover">
            {t("heroCta")}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </a>
        </div>
      </div>
    </section>
  );
}
