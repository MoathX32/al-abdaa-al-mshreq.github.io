"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative isolate min-h-screen w-full overflow-hidden parallax-bg"
      style={{ backgroundImage: "url('/images/construction-bg.jpg')" }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-primary/85 via-brand-primary/70 to-brand-primary-deep/90" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(186,155,100,0.15),transparent_55%)]" />

      <div className="container-pad relative flex min-h-screen flex-col justify-center pt-32 pb-20 text-white">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="heading-eyebrow !text-brand-accent"
        >
          {t("heroEyebrow")}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-7xl"
        >
          {t("heroTitle")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
        >
          {t("heroSubtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#contact" className="btn-primary">
            {t("heroCta")}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </a>
          <a href="#projects" className="btn-outline">
            {t("heroCtaSecondary")}
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white"
      >
        <ChevronDown className="h-7 w-7" />
      </motion.a>
    </section>
  );
}
