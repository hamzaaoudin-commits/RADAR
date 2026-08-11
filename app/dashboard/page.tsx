import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { ScoreGauge } from "@/components/score-gauge"

const TOP_CHANGES = [
  { n: "01", label: "Nouvelle capacité d'agent autonome — OpenAI", domain: "IA", impact: "critical" },
  { n: "02", label: "Nouvelle obligation RGPD sectorielle", domain: "Réglementation", impact: "important" },
  { n: "03", label: "Concurrent X lève 8M€", domain: "Concurrence", impact: "important" },
  { n: "04", label: "Nouvelle plateforme de distribution B2B", domain: "Marché", impact: "watch" },
  { n: "05", label: "Baisse du coût d'inférence des modèles", domain: "IA", impact: "watch" },
]

const SEVERITY_COUNTS = [
  { label: "Critical", value: 2, color: "#ff1a1a", dot: "🔴" },
  { label: "Important", value: 7, color: "#f59e0b", dot: "🟠" },
  { label: "Watch", value: 14, color: "#eab308", dot: "🟡" },
  { label: "Low impact", value: 32, color: "#22c55e", dot: "🟢" },
]

const TIMELINE = [
  { window: "0–3 mois", title: "Changements imminents", items: ["Nouvelle obligation RGPD sectorielle", "Sortie d'un agent IA concurrent direct"] },
  { window: "3–6 mois", title: "Changements probables", items: ["Consolidation du marché sur votre segment", "Nouvelle plateforme de distribution B2B"] },
  { window: "6–12 mois", title: "Transformations importantes", items: ["Automatisation partielle du support client par IA"] },
  { window: "1–3 ans", title: "Scénarios stratégiques", items: ["Scénario B — accélération IA", "Scénario D — disruption par un nouvel entrant"] },
]

const impactColor: Record<string, string> = {
  critical: "#ff1a1a",
  important: "#f59e0b",
  watch: "#eab308",
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-ink">
      <NavBar />

      <section className="px-gutter pb-20 pt-32">
        <div className="shell-lg">
          <div className="mb-2 font-sans text-[11px] font-semibold tracking-[0.14em] text-brand">
            APERÇU — DONNÉES D&apos;EXEMPLE
          </div>
          <h1 className="mb-1 font-serif text-[clamp(1.6rem,3.2vw,2.4rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white">
            Votre entreprise
          </h1>
          <p className="mb-10 font-sans text-[14px] text-chalk-55">
            Ceci est une démonstration du dashboard RADAR PRO, avec des données d&apos;illustration.
          </p>

          <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
            <div className="flex flex-col gap-6">
              <ScoreGauge overall={72} />

              <GlassCard className="">
                <div className="mb-4 font-sans text-[11px] uppercase tracking-[0.18em] text-chalk-40">
                  Répartition par sévérité
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {SEVERITY_COUNTS.map((s) => (
                    <div key={s.label} className="flex items-center gap-2.5">
                      <span aria-hidden>{s.dot}</span>
                      <div>
                        <div className="font-serif text-xl font-bold text-white">{s.value}</div>
                        <div className="font-sans text-[11px] text-chalk-40">{s.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            <GlassCard className="">
              <div className="mb-5 font-sans text-[11px] uppercase tracking-[0.18em] text-brand">
                🔥 TOP 5 CHANGES
              </div>
              <div className="flex flex-col divide-y divide-hair">
                {TOP_CHANGES.map((c) => (
                  <div key={c.n} className="flex items-center justify-between gap-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[12px] text-chalk-40">{c.n}</span>
                      <div>
                        <div className="font-sans text-[13.5px] text-chalk-90">{c.label}</div>
                        <div className="font-sans text-[11.5px] text-chalk-40">{c.domain}</div>
                      </div>
                    </div>
                    <span
                      className="shrink-0 rounded-full px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.08em]"
                      style={{ background: `${impactColor[c.impact]}22`, color: impactColor[c.impact] }}
                    >
                      {c.impact}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          <div className="mt-6">
            <GlassCard className="">
              <div className="mb-6 font-sans text-[11px] uppercase tracking-[0.18em] text-brand">
                YOUR NEXT 36 MONTHS
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {TIMELINE.map((t) => (
                  <div key={t.window} className="border-l-2 border-brand/30 pl-4">
                    <div className="mb-0.5 font-sans text-[11px] uppercase tracking-[0.1em] text-chalk-40">{t.window}</div>
                    <div className="mb-3 font-serif text-[15px] font-bold text-white">{t.title}</div>
                    <ul className="m-0 flex list-none flex-col gap-2 p-0">
                      {t.items.map((it) => (
                        <li key={it} className="font-sans text-[12.5px] leading-relaxed text-chalk-65">{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
