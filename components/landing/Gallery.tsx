"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { galleryItems, type GalleryItem } from "@/lib/content";
import { cn } from "@/lib/utils";
import { SectionReveal } from "./SectionReveal";

type Filter = "all" | GalleryItem["category"];

export function Gallery() {
  const { t, locale } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? galleryItems : galleryItems.filter((g) => g.category === filter)),
    [filter],
  );

  const filters: { key: Filter; labelKey: Parameters<typeof t>[0] }[] = [
    { key: "all",         labelKey: "galleryAll" },
    { key: "villa",       labelKey: "galleryVilla" },
    { key: "renovation",  labelKey: "galleryRenovation" },
    { key: "contracting", labelKey: "galleryContracting" },
    { key: "electrical",  labelKey: "galleryElectrical" },
    { key: "pool",        labelKey: "galleryPool" },
  ];

  const close = () => setOpenIdx(null);
  const next  = () => setOpenIdx((i) => (i === null ? null : (i + 1) % filtered.length));
  const prev  = () => setOpenIdx((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));

  return (
    <section id="gallery" className="bg-brand-light py-24 lg:py-32">
      <div className="container-pad">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <span className="heading-eyebrow">{t("galleryEyebrow")}</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-brand-primary sm:text-5xl">
            {t("galleryTitle")}
          </h2>
          <p className="mt-5 text-base text-brand-text/75">{t("gallerySubtitle")}</p>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={cn(
                "rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all",
                filter === f.key
                  ? "border-brand-accent bg-brand-accent text-white"
                  : "border-brand-primary/15 bg-white text-brand-text hover:border-brand-accent hover:text-brand-accent",
              )}
            >
              {t(f.labelKey)}
            </button>
          ))}
        </SectionReveal>

        <motion.div
          layout
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.button
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4 }}
                onClick={() => setOpenIdx(idx)}
                className="group relative aspect-square overflow-hidden bg-brand-primary/5"
              >
                <Image
                  src={item.src}
                  alt={item.alt[locale]}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 32vw, 48vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-brand-primary/0 opacity-0 transition-all duration-300 group-hover:bg-brand-primary/55 group-hover:opacity-100">
                  <Expand className="h-7 w-7 text-white" strokeWidth={1.5} />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {openIdx !== null && filtered[openIdx] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur"
            onClick={close}
          >
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); close(); }}
              className="absolute top-6 right-6 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-6 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-6 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.div
              key={openIdx}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[85vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[openIdx].src}
                alt={filtered[openIdx].alt[locale]}
                width={1600}
                height={1200}
                className="max-h-[85vh] w-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
