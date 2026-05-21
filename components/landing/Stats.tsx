"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { stats } from "@/lib/content";

function useCountUp(target: number, start: boolean, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (now: number) => {
      const progress = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);

  return value;
}

function Counter({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const display = useCountUp(value, active);
  return (
    <div className="text-center">
      <div className="font-display text-5xl font-bold text-brand-accent sm:text-6xl">
        {display}
        <span>{suffix}</span>
      </div>
      <p className="mt-3 text-xs uppercase tracking-[0.25em] text-brand-text/70">{label}</p>
    </div>
  );
}

export function Stats() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="relative -mt-16 pb-0">
      <div className="container-pad">
        <div
          ref={ref}
          className="grid gap-10 rounded-none border border-brand-primary/10 bg-white px-6 py-12 shadow-elevated sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:px-14"
        >
          {stats.map((s) => (
            <Counter
              key={s.key}
              value={s.value}
              suffix={s.suffix}
              label={t(s.key)}
              active={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
