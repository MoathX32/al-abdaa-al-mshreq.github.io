"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { contactDetails } from "@/lib/content";
import { SectionReveal } from "./SectionReveal";

export function Contact() {
  const { t, locale } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    if (typeof window !== "undefined") {
      const subject = encodeURIComponent(`Inquiry from ${payload.name ?? "website"}`);
      const body = encodeURIComponent(
        `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone ?? ""}\nService: ${payload.service ?? ""}\n\n${payload.message}`,
      );
      window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-brand-light py-24 lg:py-32">
      <div className="container-pad">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <span className="heading-eyebrow">{t("contactEyebrow")}</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-brand-primary sm:text-5xl">
            {t("contactTitle")}
          </h2>
          <p className="mt-5 text-base text-brand-text/75">{t("contactSubtitle")}</p>
        </SectionReveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <SectionReveal className="lg:col-span-2">
            <div className="h-full bg-brand-primary p-8 text-white sm:p-10">
              <h3 className="font-display text-2xl font-semibold text-white">{t("contactInfoTitle")}</h3>
              <div className="mt-8 flex flex-col gap-7">
                <InfoRow icon={<Phone className="h-5 w-5" />} label={t("contactPhone")}>
                  <a href={contactDetails.phoneHref} className="hover:text-brand-accent">{contactDetails.phone}</a>
                </InfoRow>
                <InfoRow icon={<Mail className="h-5 w-5" />} label={t("contactEmail")}>
                  <a href={contactDetails.emailHref} className="hover:text-brand-accent break-all">{contactDetails.email}</a>
                </InfoRow>
                <InfoRow icon={<MapPin className="h-5 w-5" />} label={t("contactAddress")}>
                  {contactDetails.address[locale]}
                </InfoRow>
                <InfoRow icon={<Clock className="h-5 w-5" />} label={t("contactHours")}>
                  {t("contactHoursValue")}
                </InfoRow>
              </div>

              <div className="mt-10 aspect-video w-full overflow-hidden border border-white/15">
                <iframe
                  src={contactDetails.mapEmbed}
                  loading="lazy"
                  allowFullScreen
                  className="h-full w-full"
                  title="Office location"
                />
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="flex h-full flex-col gap-5 border border-brand-primary/10 bg-white p-8 sm:p-10">
              <h3 className="font-display text-2xl font-semibold text-brand-primary">{t("formTitle")}</h3>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field name="name" placeholder={t("formName")} required />
                <Field name="email" type="email" placeholder={t("formEmail")} required />
              </div>
              <Field name="phone" type="tel" placeholder={t("formPhone")} />

              <select
                name="service"
                required
                defaultValue=""
                className="border border-brand-primary/15 bg-white px-4 py-3.5 text-sm text-brand-text outline-none transition-colors focus:border-brand-accent"
              >
                <option value="" disabled>{t("formService")}</option>
                <option value="general">{t("formOption1")}</option>
                <option value="villa">{t("formOption2")}</option>
                <option value="renovation">{t("formOption3")}</option>
                <option value="other">{t("formOption4")}</option>
              </select>

              <textarea
                name="message"
                placeholder={t("formMessage")}
                required
                rows={5}
                className="border border-brand-primary/15 bg-white px-4 py-3.5 text-sm text-brand-text outline-none transition-colors focus:border-brand-accent"
              />

              <button type="submit" className="btn-primary mt-2 self-start">
                {submitted ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    {t("formSubmit")}
                  </>
                ) : (
                  <>
                    {t("formSubmit")}
                    <Send className="h-4 w-4 rtl:rotate-180" />
                  </>
                )}
              </button>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-accent/15 text-brand-accent">
        {icon}
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">{label}</p>
        <p className="mt-1 text-sm text-white/90">{children}</p>
      </div>
    </div>
  );
}

function Field({ name, placeholder, type = "text", required }: { name: string; placeholder: string; type?: string; required?: boolean }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="border border-brand-primary/15 bg-white px-4 py-3.5 text-sm text-brand-text outline-none transition-colors focus:border-brand-accent"
    />
  );
}
