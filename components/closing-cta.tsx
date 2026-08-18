import Link from "next/link"

/**
 * Relance finale, après la FAQ.
 *
 * Le manifeste demande une première fois, quand la conviction est fraîche.
 * Celle-ci demande une seconde fois, une fois les objections levées — c'est le
 * lecteur méthodique, celui qui a tout lu avant de décider.
 */
export function ClosingCTA() {
  return (
    <section className="grain relative section pb-28 text-center">
      <div className="glow-center" aria-hidden />
      <div className="grain-layer" aria-hidden />
      <div className="relative mx-auto max-w-[620px]">
        <h2 className="mb-5 font-serif text-[clamp(1.5rem,3vw,2.3rem)] font-bold leading-snug tracking-[-0.02em] text-white">
          Le monde change. Votre entreprise doit changer avant lui.
        </h2>
        <p className="lede mx-auto mb-8 max-w-[520px]">
          Chaque semaine sans RADAR est une semaine où quelque chose a changé sans
          que vous le sachiez.
        </p>
        <Link href="/pricing" className="btn-primary">Voir les tarifs</Link>
        <p className="mt-4 font-sans text-[13px] text-chalk-40">
          Sans engagement. Résiliable à tout moment.
        </p>
      </div>
    </section>
  )
}
