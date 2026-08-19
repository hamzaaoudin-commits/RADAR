const STEPS = ["Information", "Filtrage", "Analyse", "Impact", "Scénarios", "Recommandations", "Action"]

export function PipelineGrid() {
  return (
    <section className="section">
      <div className="mx-auto max-w-[820px] text-center">
        <div className="kicker mb-5">Le protocole RADAR</div>
        <h2 className="h-section mb-6">Le filtre que rien d&apos;autre ne vous donne.</h2>
        <p className="lede mx-auto mb-10 max-w-[600px]">
          Sept étapes, toujours dans cet ordre. La deuxième est celle que personne
          ne fait : on jette tout ce qui ne change rien sur votre marché.
        </p>

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
          Une veille s&apos;arrête à l&apos;étape 1. Une newsletter va jusqu&apos;à la 3. RADAR
          va jusqu&apos;à la 7 : ce que ça coûte, ce que vous pouvez faire, et comment
          le tester en sept jours.
        </p>
      </div>
    </section>
  )
}
