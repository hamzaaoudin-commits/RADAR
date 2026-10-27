import Link from "next/link"
import { OFFER } from "@/lib/pricing-data"

export function PricingTable() {
  const t = OFFER

  return (
    <div className="mx-auto max-w-[460px]">
      <div id={t.id} className="card-featured card-hover relative flex flex-col">
        <span aria-hidden className="bracket-tl" />
        <span aria-hidden className="bracket-br" />
        <div className="mb-1 eyebrow">{t.target}</div>
        <h3 className="mb-3 font-serif text-lg font-bold text-white">{t.name}</h3>
        <div className="mb-5 flex items-baseline gap-1">
          <span className="font-serif text-[3rem] font-bold leading-none text-white">{t.price}</span>
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
        <Link href="/pricing#radar" className="btn-primary">
          Recevoir le numéro chaque lundi
        </Link>
      </div>
    </div>
  )
}
