import Link from "next/link"
import { PricingTable } from "./pricing-table"

export function PricingPreview() {
  return (
    <section className="section bg-ink-soft">
      <div className="shell">
        <div className="mb-12 text-center">
          <div className="kicker mb-5">L&apos;offre</div>
          <h2 className="h-section mb-6">20€ par mois, quel que soit votre marché.</h2>
          <p className="lede mx-auto max-w-[600px]">
            Le numéro RADAR de la semaine, dans votre boîte mail chaque lundi.
          </p>
        </div>
        <PricingTable />
        <div className="mt-10 text-center">
          <Link href="/pricing" className="btn-quiet">
            Voir le détail de l&apos;offre →
          </Link>
        </div>
      </div>
    </section>
  )
}
