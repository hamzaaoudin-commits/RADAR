import Link from "next/link"
import { TIERS } from "@/lib/pricing-data"

export function PricingTable({ compact = false }: { compact?: boolean }) {
  const tiers = compact ? TIERS.slice(1, 4) : TIERS

  return (
    <div className={`grid gap-4 ${compact ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-5"}`}>
      {tiers.map((t) => (
        <div
          key={t.id}
          id={t.id}
          className={[
            "flex flex-col rounded-lg border p-6",
            t.featured ? "border-brand bg-brand/[0.06]" : "border-hair bg-white/[0.02]",
          ].join(" ")}
        >
          {t.featured && (
            <div className="mb-3 inline-flex w-fit rounded-full bg-brand px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-white">
              Recommandé
            </div>
          )}
          <div className="mb-1 font-sans text-[11px] uppercase tracking-[0.16em] text-chalk-40">{t.target}</div>
          <h3 className="mb-3 font-serif text-lg font-bold text-white">{t.name}</h3>
          <div className="mb-5 flex items-baseline gap-1">
            <span className="font-serif text-[2rem] font-bold leading-none text-white">{t.price}</span>
            <span className="font-sans text-[13px] text-chalk-40">{t.cadence}</span>
          </div>
          <ul className="m-0 mb-6 flex flex-1 list-none flex-col gap-2.5 p-0">
            {t.features.map((f) => (
              <li key={f} className="flex items-start gap-2 font-sans text-[13px] leading-relaxed text-chalk-65">
                <span aria-hidden className="mt-[3px] text-brand">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <Link
            href="/pricing"
            className={t.featured ? "btn-primary" : "btn-quiet"}
          >
            {t.id === "free" ? "Commencer" : t.id === "enterprise" ? "Nous contacter" : "Choisir"}
          </Link>
        </div>
      ))}
    </div>
  )
}
