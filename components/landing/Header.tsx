"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#home",     key: "navHome"     as const },
  { href: "#about",    key: "navAbout"    as const },
  { href: "#services", key: "navServices" as const },
  { href: "#projects", key: "navProjects" as const },
  { href: "#gallery",  key: "navGallery"  as const },
  { href: "#team",     key: "navTeam"     as const },
  { href: "#contact",  key: "navContact"  as const },
];

export function Header() {
  const { t, locale, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(23,42,89,0.18)]"
          : "bg-transparent",
      )}
    >
      <div className="container-pad flex items-center justify-between gap-6 py-4 lg:py-5">
        <a href="#home" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt={t("companyName")}
            width={56}
            height={56}
            className="h-12 w-auto sm:h-14"
            priority
          />
          <span className="hidden sm:flex flex-col leading-tight">
            <span
              className={cn(
                "font-display text-base sm:text-lg font-bold tracking-wide transition-colors",
                scrolled ? "text-brand-primary" : "text-white",
              )}
            >
              {t("companyName")}
            </span>
            <span
              className={cn(
                "text-[10px] sm:text-xs uppercase tracking-[0.22em] transition-colors",
                scrolled ? "text-brand-text/70" : "text-white/80",
              )}
            >
              {t("companySub")}
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? "text-brand-text hover:text-brand-accent"
                  : "text-white/90 hover:text-brand-accent",
              )}
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={t("langToggle")}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors",
              scrolled
                ? "border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-white"
                : "border-white/50 text-white hover:bg-white hover:text-brand-primary",
            )}
          >
            <Languages className="h-3.5 w-3.5" />
            {locale === "en" ? "AR" : "EN"}
          </button>

          <a
            href="#contact"
            className={cn(
              "hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wider transition-all",
              "bg-brand-accent text-white hover:bg-brand-accent-hover hover:-translate-y-0.5 hover:shadow-lg",
            )}
          >
            {t("heroCta")}
          </a>

          <button
            type="button"
            className={cn(
              "inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-full transition-colors",
              scrolled ? "text-brand-primary hover:bg-brand-primary/5" : "text-white hover:bg-white/10",
            )}
            onClick={() => setOpen((v) => !v)}
            aria-label={t("menuToggle")}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-brand-primary/10 bg-white shadow-lg">
          <nav className="container-pad flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-base font-medium text-brand-text hover:text-brand-accent"
              >
                {t(link.key)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 btn-primary"
            >
              {t("heroCta")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
