/**
 * Bulles de contenu (titre + description), pour les solutions déjà essayées.
 *
 * Même principe que TagBubbles : aucun flottement, le texte reste lisible.
 * Chaque carte s'agrandit à son tour, l'une après l'autre. L'amplitude est
 * plus faible que sur les mots-clés — sur un bloc de texte, un agrandissement
 * marqué gênerait la lecture.
 */
const INTERVALLE = 3.2 // secondes entre deux pulsations

export function ContentBubbles({
  items,
}: {
  items: { t: string; d: string }[]
}) {
  const cycle = items.length * INTERVALLE

  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {items.map((x, i) => {
        const style = {
          "--cycle": `${cycle}s`,
          "--delay": `${-(i * INTERVALLE).toFixed(2)}s`,
          "--pulse-scale": "1.035",
          "--pulse-bg-idle": "rgba(255,255,255,0.035)",
        } as React.CSSProperties

        return (
          <div
            key={x.t}
            style={style}
            className="bubble-pulse rounded-[28px] border border-hair-strong bg-white/[0.035] p-6 backdrop-blur-sm"
          >
            <div className="mb-2.5 inline-flex rounded-full bg-brand/15 px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.08em] text-brand">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mb-2 font-serif text-[16px] font-bold leading-snug text-white/90">
              {x.t}
            </h3>
            <p className="m-0 font-sans text-[13.5px] leading-relaxed text-chalk-65">{x.d}</p>
          </div>
        )
      })}
    </div>
  )
}
