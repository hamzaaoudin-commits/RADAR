import { RadarScope } from "./radar-scope"

export function HeroSection() {
  return (
    <section className="section-hero pb-16 pt-40">
      <div className="glow-top" aria-hidden />
      <div className="shell-md relative">
        <div className="pill mb-8">Intelligence stratégique continue, pour entreprises</div>

        <h1 className="h-display mb-6">
          Ne réagissez plus.
          <br />
          <span className="text-gradient">Détectez.</span>
        </h1>

        <p className="lede mx-auto mb-9 max-w-[640px]">
          RADAR surveille en continu l&apos;IA, la réglementation, vos concurrents et votre marché — et transforme cette masse d&apos;informations en une seule question résolue chaque semaine : qu&apos;est-ce qui a changé, et que devez-vous faire maintenant.
        </p>

        <div className="flex flex-wrap justify-center gap-3.5">
          <a href="/pricing" className="btn-primary">Démarrer gratuitement</a>
          <p className="mt-3 w-full text-center font-sans text-[13px] text-chalk-40">14 jours offerts sur RADAR PRO. Résiliable en un clic.</p>
          <a href="/dashboard" className="btn-ghost">Voir le dashboard</a>
        </div>

        <RadarScope />
      </div>
    </section>
  )
}
