const STEPS = ["Information", "Filtrage", "Analyse", "Impact", "Scénarios", "Recommandations", "Action"]

export function PipelineGrid() {
  return (
    <section className="section">
      <div className="mx-auto max-w-[820px] text-center">
        <div className="kicker mb-5">Le pipeline</div>
        <h2 className="h-section mb-10">Ce qui sépare RADAR d&apos;une simple veille.</h2>

        <div className="grid gap-px border border-white/[0.07] bg-white/[0.07] [grid-template-columns:repeat(auto-fit,minmax(120px,1fr))]">
          {STEPS.map((g, i) => (
            <div key={g} className="bg-ink px-4 py-6">
              <div className="mb-2 font-serif text-[15px] font-bold text-brand">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-sans text-[12.5px] leading-snug text-chalk-75">{g}</div>
            </div>
          ))}
        </div>

        <p className="mt-8 body-sm">
          Une entreprise de veille dit « voici les nouvelles informations ». RADAR pousse jusqu&apos;à ce que cela signifie pour vous, ce que vous pourriez faire, et comment le tester en sept jours.
        </p>
      </div>
    </section>
  )
}
