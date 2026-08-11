import Link from "next/link"

export function PricingCallout() {
  return (
    <section className="section pb-10 text-center">
      <div className="card mx-auto max-w-[560px] px-8 py-11">
        <span className="tag border-[rgba(120,180,255,0.4)] text-[rgba(150,195,255,0.9)]">RADAR PRO · 199€/mois</span>
        <h3 className="mb-3 mt-5 font-serif text-[1.8rem] font-bold">La surveillance complète, à volonté.</h3>
        <p className="mb-7 font-sans text-[15px] leading-relaxed text-chalk-65">
          Les sept radars, le score de préparation, les scénarios et la roadmap à 36 mois. Sans engagement, résiliable à tout moment.
        </p>
        <Link href="/pricing" className="btn-primary">Voir les formules</Link>
        <p className="mt-3 font-sans text-[13px] text-chalk-40">14 jours offerts. Résiliable en un clic.</p>
      </div>
    </section>
  )
}
