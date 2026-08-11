const STEPS = [
  "Information",
  "Filtrage",
  "Analyse",
  "Impact",
  "Scénarios",
  "Recommandations",
  "Action",
]

export function SolutionPipeline() {
  return (
    <section id="produit" className="section overflow-hidden bg-ink">
      <div className="shell">
        <div className="mx-auto max-w-[860px]">
          <div className="mb-5 font-sans text-[11px] font-semibold tracking-[0.14em] text-brand">
            CE QUE RADAR N&apos;EST PAS
          </div>
          <h2 className="mb-7 font-serif text-[clamp(1.8rem,3.6vw,3.1rem)] font-bold leading-[1.14] tracking-[-0.02em] text-white">
            Ce n&apos;est pas une simple veille.
          </h2>

          <div className="mb-10 grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2">
            <div className="bg-ink-soft px-6 py-6">
              <div className="mb-2 font-sans text-[11px] uppercase tracking-[0.18em] text-chalk-40">Une entreprise de veille dit</div>
              <p className="m-0 font-serif text-lg text-white/70">« Voici les nouvelles informations. »</p>
            </div>
            <div className="bg-ink-soft px-6 py-6">
              <div className="mb-2 font-sans text-[11px] uppercase tracking-[0.18em] text-brand">RADAR dit</div>
              <p className="m-0 font-serif text-lg text-white">« Voici les changements qui comptent pour vous — et ce que vous devriez faire. »</p>
            </div>
          </div>

          <div className="mb-3 font-sans text-[11px] uppercase tracking-[0.2em] text-brand">Le pipeline</div>
          <div className="flex flex-wrap items-center gap-2">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <span className="rounded-full border border-hair-strong bg-white/[0.03] px-4 py-2 font-sans text-[13px] text-chalk-75">
                  {s}
                </span>
                {i < STEPS.length - 1 && (
                  <span aria-hidden className="text-brand/60">→</span>
                )}
              </div>
            ))}
          </div>

          <p className="mt-10 font-sans text-[16.5px] leading-[1.75] text-white/60">
            RADAR ne s&apos;arrête jamais à « OpenAI a sorti X. » Il pousse jusqu&apos;à ce que cela signifie pour vous, ce que vous pourriez faire, combien cela pourrait coûter, le retour potentiel — et comment le tester en sept jours. L&apos;objectif n&apos;est pas de vous informer. C&apos;est de vous faire passer de l&apos;intelligence à la décision.
          </p>
        </div>
      </div>
    </section>
  )
}
