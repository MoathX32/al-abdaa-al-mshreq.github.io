"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Download, Linkedin, Facebook, Instagram, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { contactDetails } from "@/lib/content";

const QUICK_LINKS = [
  { href: "#about",    key: "navAbout"    as const },
  { href: "#services", key: "navServices" as const },
  { href: "#projects", key: "navProjects" as const },
  { href: "#gallery",  key: "navGallery"  as const },
  { href: "#team",     key: "navTeam"     as const },
  { href: "#contact",  key: "navContact"  as const },
];

export function Footer() {
  const { t, locale } = useLanguage();

  return (
    <footer className="bg-brand-primary-deep text-white">
      <div className="container-pad grid gap-12 py-16 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-2 max-w-md">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt={t("companyName")} width={56} height={56} className="h-14 w-auto" />
            <div>
              <p className="font-display text-lg font-bold leading-tight text-white">{t("companyName")}</p>
              <p className="text-xs uppercase tracking-[0.22em] text-white/60">{t("companySub")}</p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/70">{t("footerTagline")}</p>

          <a
            href="/documents/company-profile.pdf"
            download="AMC-Company-Profile.pdf"
            className="mt-7 inline-flex items-center gap-3 border border-brand-accent/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-accent hover:border-brand-accent"
          >
            <Download className="h-4 w-4" />
            {t("footerDownload")}
          </a>

          <div className="mt-7 flex items-center gap-3">
            <Social href={contactDetails.whatsapp}  label="WhatsApp"  Icon={MessageCircle} />
            <Social href={contactDetails.linkedin}  label="LinkedIn"  Icon={Linkedin} />
            <Social href={contactDetails.facebook}  label="Facebook"  Icon={Facebook} />
            <Social href={contactDetails.instagram} label="Instagram" Icon={Instagram} />
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-white">{t("footerQuickLinks")}</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/70 transition-colors hover:text-brand-accent">
                  {t(l.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-white">{t("footerReach")}</h4>
          <ul className="mt-5 space-y-4 text-sm text-white/75">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-brand-accent shrink-0" />
              <a href={contactDetails.phoneHref} className="hover:text-brand-accent">{contactDetails.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-brand-accent shrink-0" />
              <a href={contactDetails.emailHref} className="hover:text-brand-accent break-all">{contactDetails.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-brand-accent shrink-0" />
              <span>{contactDetails.address[locale]}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-pad flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/55 sm:flex-row">
          <p>{t("footerRights")}</p>
          <p>Crafted in Dubai · UAE</p>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, Icon }: { href: string; label: string; Icon: React.ComponentType<{ className?: string }> }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white/75 transition-all hover:-translate-y-0.5 hover:border-brand-accent hover:bg-brand-accent hover:text-white"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
