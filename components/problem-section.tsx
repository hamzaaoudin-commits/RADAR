const SIGNALS = [
  "une nouvelle IA",
  "un nouveau concurrent",
  "une nouvelle réglementation",
  "une nouvelle technologie",
  "une nouvelle plateforme",
  "une nouvelle habitude de vos clients",
  "un nouveau business model",
]

export function ProblemSection() {
  return (
    <section className="section bg-ink-soft">
      <div className="shell-md">
        <div className="mb-5 kicker">Le problème</div>
        <h2 className="h-section mb-7">
          Le monde change trop vite pour qu&apos;un dirigeant le surveille seul.
        </h2>
        <p className="lede mb-5">
          Une PME peut aujourd&apos;hui être confrontée, simultanément, à :
        </p>

        <div className="mb-8 flex flex-wrap gap-2.5">
          {SIGNALS.map((s) => (
            <span
              key={s}
              className="rounded-full border border-hair-strong bg-white/[0.03] px-3.5 py-1.5 font-sans text-[13px] text-chalk-65"
            >
              {s}
            </span>
          ))}
        </div>

        <p className="mb-8 body-sm">
          Le problème n&apos;est pas le manque d&apos;information. C&apos;est la surcharge.
          Personne n&apos;a le temps de lire cinquante newsletters, de surveiller cent
          entreprises et de tester chaque nouvel outil — en plus de diriger
          l&apos;entreprise elle-même.
        </p>

        <div className="card px-7 py-8">
          <p className="m-0 font-serif text-[clamp(1.15rem,2.2vw,1.55rem)] leading-snug text-white/90">
            Une entreprise ne devrait pas découvrir une révolution lorsqu&apos;elle est
            déjà devenue son problème. Elle devrait la voir arriver.
          </p>
        </div>
      </div>
    </section>
  )
}
