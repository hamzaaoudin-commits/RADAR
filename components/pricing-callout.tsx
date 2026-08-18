import Link from "next/link"

/**
 * Carte de l'offre recommandée, en tête de la page tarifs.
 *
 * Elle pose une recommandation unique avant la grille comparative : le
 * visiteur pressé s'arrête ici, celui qui veut comparer descend d'un cran.
 */
export function PricingCallout() {
  return (
    <section className="section pb-10 text-center">
      <div className="card card-hover relative mx-auto max-w-[560px] px-8 py-11">
        <span aria-hidden className="bracket-tl" />
        <span aria-hidden className="bracket-br" />
        <span className="tag">Notre recommandation · RADAR PRO · 199€/mois</span>
        <h3 className="mb-3 mt-5 font-serif text-[1.8rem] font-bold">La surveillance complète, à volonté.</h3>
        <p className="mb-7 font-sans text-[15px] leading-relaxed text-chalk-65">
          Les sept radars, les scénarios et la roadmap à 36 mois. Sans engagement,
          résiliable à tout moment.
        </p>
        <Link href="#pro" className="btn-primary">Choisir RADAR PRO</Link>
        <p className="mt-4 font-sans text-[13px] text-chalk-40">
          Les autres formules, du plus léger au sur-mesure, sont détaillées ci-dessous.
        </p>
      </div>
    </section>
  )
}
