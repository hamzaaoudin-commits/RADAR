/**
 * Bulles flottantes porteuses de contenu (titre + description).
 *
 * Même logique de flottaison que TagBubbles, mais en cartes arrondies plus
 * grandes, avec un décalage vertical de base alterné par élément pour casser
 * l'alignement en grille et renforcer l'effet organique.
 */
export function ContentBubbles({
  items,
}: {
  items: { t: string; d: string }[]
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {items.map((x, i) => {
        const style = {
          "--dur": `${6.5 + i * 0.9}s`,
          "--delay": `${-(i * 0.8).toFixed(2)}s`,
          "--float": "9px",
          "--rot": `${i % 2 === 0 ? 1 : -1}deg`,
          marginTop: i % 2 === 1 ? "1.5rem" : "0",
        } as React.CSSProperties

        return (
          <div
            key={x.t}
            style={style}
            className="bubble-float rounded-[28px] border border-hair-strong bg-white/[0.035] p-6 backdrop-blur-sm transition-colors hover:border-brand-hair"
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
