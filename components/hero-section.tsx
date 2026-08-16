import { RadarScope } from "./radar-scope"

export function HeroSection() {
  return (
    <section className="section-hero grain pb-16 pt-40">
      <div className="glow-top" aria-hidden />
      <div className="grain-layer" aria-hidden />
      <div className="shell-md relative">
        <div className="pill mb-8">Intelligence stratégique continue</div>

        <h1 className="h-display mb-6">
          Ne réagissez plus.
          <br />
          <span className="text-gradient">Détectez.</span>
        </h1>

        <p className="lede mx-auto mb-4 max-w-[640px]">
          RADAR surveille en continu l&apos;IA, la réglementation, vos concurrents et votre marché — et transforme cette masse d&apos;informations en une seule question résolue chaque semaine : qu&apos;est-ce qui a changé, et que devez-vous faire maintenant.
        </p>

        <p className="mx-auto mb-9 max-w-[640px] font-sans text-[13px] uppercase tracking-[0.14em] text-brand/80">
          Notre seul ennemi : l&apos;angle mort.
        </p>

        <div className="flex flex-col items-center gap-3">
          <a href="/pricing" className="btn-primary">Voir les tarifs</a>
          <a href="/dashboard" className="font-sans text-[13px] text-chalk-40 underline decoration-hair-strong underline-offset-4 hover:text-white">
            ou voir à quoi ressemble votre dashboard
          </a>
        </div>

        <RadarScope />
      </div>
    </section>
  )
}
