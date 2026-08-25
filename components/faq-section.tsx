"use client"

import { useState } from "react"

export type FaqEntry = { q: string; a: string; icon?: string }

export function FaqSection({ faqs }: { faqs: FaqEntry[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section relative overflow-hidden bg-ink text-white">
      <div className="glow-center" aria-hidden />

      <div className="relative mx-auto w-full max-w-[800px]">
        <div className="mb-14 text-center">
          <div className="kicker mb-6">FAQ</div>
          <h2 className="h-section">
            Tout ce qu&apos;il faut <span className="text-gradient">pour décider.</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q} className="overflow-hidden border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  className="group flex w-full items-center justify-between gap-4 border-none bg-transparent py-7 text-left"
                >
                  <span className="flex items-center gap-4">
                    <span className="hidden h-8 w-8 shrink-0 items-center justify-center border border-white/10 text-brand transition-colors duration-300 group-hover:border-brand/40 sm:flex">
                      <FaqIcon kind={faq.icon} />
                    </span>
                    <span className="font-sans text-[clamp(0.98rem,1.7vw,1.15rem)] font-bold leading-snug tracking-[-0.01em] text-white transition-colors duration-300 group-hover:text-brand">
                      {faq.q}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className={`shrink-0 text-[22px] text-brand transition-transform duration-300 group-hover:scale-110 ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className="grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(.22,.68,0,1.2)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="border-l-2 border-brand py-0.5 pb-7 pl-4">
                      <p className="m-0 font-sans text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.75] text-chalk-65">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  )
}

function FaqIcon({ kind }: { kind?: string }) {
  const props = { viewBox: "0 0 24 24", width: 16, height: 16, "aria-hidden": true as const }
  const s = { stroke: "currentColor", strokeWidth: 1.4, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const }

  switch (kind) {
    case "eye":
      return <svg {...props}><path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z" {...s} /><circle cx="12" cy="12" r="2.6" {...s} /></svg>
    case "shield":
      return <svg {...props}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" {...s} /><path d="M9 12l2 2 4-4" {...s} /></svg>
    case "cpu":
      return <svg {...props}><rect x="7" y="7" width="10" height="10" rx="1" {...s} /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M19.5 4.5l-2 2M6.5 17.5l-2 2" {...s} /></svg>
    case "price":
      return <svg {...props}><path d="M4 12l7-7h6a1 1 0 0 1 1 1v6l-7 7a1 1 0 0 1-1.4 0l-5.6-5.6a1 1 0 0 1 0-1.4z" {...s} /><circle cx="15" cy="9" r="1.2" fill="currentColor" /></svg>
    case "clock":
      return <svg {...props}><circle cx="12" cy="12" r="8.5" {...s} /><path d="M12 7v5l3.5 2" {...s} /></svg>
    case "xcircle":
      return <svg {...props}><circle cx="12" cy="12" r="8.5" {...s} /><path d="M9.5 9.5l5 5M14.5 9.5l-5 5" {...s} /></svg>
    default:
      return <svg {...props}><circle cx="12" cy="12" r="2" fill="currentColor" /></svg>
  }
}
