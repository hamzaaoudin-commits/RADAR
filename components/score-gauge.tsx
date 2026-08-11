import { GlassCard } from "./glass-card"

const DOMAINS = [
  { label: "IA", score: 48 },
  { label: "Technologie", score: 81 },
  { label: "Réglementation", score: 92 },
  { label: "Concurrence", score: 64 },
  { label: "Automatisation", score: 42 },
  { label: "Innovation", score: 73 },
]

function barColor(score: number) {
  if (score < 50) return "#ff1a1a"
  if (score < 75) return "#f59e0b"
  return "#22c55e"
}

export function ScoreGauge({ overall = 72, compact = false }: { overall?: number; compact?: boolean }) {
  return (
    <GlassCard className={compact ? "p-6" : "p-8"}>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="font-sans text-[11px] uppercase tracking-[0.18em] text-chalk-40">RADAR SCORE</div>
          <div className="mt-1 font-sans text-[13px] text-chalk-55">Company readiness</div>
        </div>
        <div className="font-serif text-[clamp(2.2rem,5vw,3.2rem)] font-bold leading-none text-gradient">
          {overall}<span className="text-[1.2rem] text-chalk-40">/100</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {DOMAINS.map((d) => (
          <div key={d.label}>
            <div className="mb-1 flex items-center justify-between font-sans text-[12.5px] text-chalk-65">
              <span>{d.label}</span>
              <span className="font-mono text-chalk-40">{d.score}</span>
            </div>
            <div className="h-[6px] w-full overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full"
                style={{ width: `${d.score}%`, background: barColor(d.score) }}
              />
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
