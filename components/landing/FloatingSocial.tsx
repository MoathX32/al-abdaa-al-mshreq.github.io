"use client";

import { useEffect, useState } from "react";
import { Share2, X, Linkedin, Facebook, Instagram, MessageCircle, ArrowUp } from "lucide-react";
import { contactDetails } from "@/lib/content";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function FloatingSocial() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const social = [
    { href: contactDetails.whatsapp,  label: "WhatsApp",  Icon: MessageCircle, color: "hover:bg-[#25D366]" },
    { href: contactDetails.linkedin,  label: "LinkedIn",  Icon: Linkedin,      color: "hover:bg-[#0A66C2]" },
    { href: contactDetails.facebook,  label: "Facebook",  Icon: Facebook,      color: "hover:bg-[#1877F2]" },
    { href: contactDetails.instagram, label: "Instagram", Icon: Instagram,     color: "hover:bg-[#E4405F]" },
  ];

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 rtl:left-6 rtl:right-auto">
        {showTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label={t("scrollTop")}
            className="inline-flex h-12 w-12 items-center justify-center bg-brand-primary text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-brand-primary-deep"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}

        <div className="flex flex-col items-end gap-3">
          <div
            className={cn(
              "flex flex-col gap-2 transition-all duration-300",
              open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
            )}
          >
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={cn(
                  "inline-flex h-12 w-12 items-center justify-center bg-white text-brand-primary shadow-lg transition-all hover:text-white",
                  s.color,
                )}
              >
                <s.Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle social menu"
            className="inline-flex h-14 w-14 items-center justify-center bg-brand-accent text-white shadow-xl transition-all hover:-translate-y-0.5 hover:bg-brand-accent-hover"
          >
            {open ? <X className="h-6 w-6" /> : <Share2 className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </>
  );
}
