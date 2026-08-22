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
          Chaque lundi, le journal de votre marché : tout ce qui a bougé en une semaine, en un seul endroit. Vous n&apos;ouvrez plus rien d&apos;autre.
        </p>

        <p className="mx-auto mb-9 max-w-[640px] font-sans text-[13px] uppercase tracking-[0.14em] text-brand/80">
          Notre seul ennemi : l&apos;angle mort.
        </p>

        <div className="flex flex-col items-center gap-3">
          <a href="/pricing" className="btn-primary">Voir les tarifs</a>
          <a href="/produit" className="font-sans text-[13px] text-chalk-40 underline decoration-hair-strong underline-offset-4 hover:text-white">
            ou lire un numéro complet
          </a>
        </div>

        <RadarScope />
      </div>
    </section>
  )
}
