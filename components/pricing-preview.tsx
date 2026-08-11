import Link from "next/link"
import { PricingTable } from "./pricing-table"

export function PricingPreview() {
  return (
    <section className="section bg-ink-soft">
      <div className="shell">
        <div className="mb-12 text-center">
          <div className="kicker mb-5">L&apos;investissement</div>
          <h2 className="h-section mb-6">Commencez gratuitement. Montez en puissance quand ça compte.</h2>
          <p className="lede mx-auto max-w-[600px]">
            Trois formules pour les entreprises qui veulent voir venir plutôt que subir.
          </p>
        </div>
        <PricingTable compact />
        <div className="mt-10 text-center">
          <Link href="/pricing" className="btn-quiet">
            Voir toutes les formules, y compris FREE et ENTERPRISE →
          </Link>
        </div>
      </div>
    </section>
  )
}
