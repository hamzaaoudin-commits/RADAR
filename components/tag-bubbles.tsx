/**
 * Bulles de mots-clés du secteur.
 *
 * Elles ne bougent pas : elles restent lisibles, dans leur cadre. À tour de
 * rôle, l'une d'elles grossit brièvement et s'éclaire en rouge — une seule à
 * la fois, jamais deux ensemble. C'est ce qui donne l'impression d'un secteur
 * où quelque chose bouge en permanence, sans rendre le bloc illisible.
 *
 * L'intervalle entre deux pulsations est fixe ; le décalage de chaque bulle
 * est dérivé de son index, jamais tiré au hasard, pour que le rendu serveur
 * et le rendu client soient identiques au premier affichage.
 */
const INTERVALLE = 1.6 // secondes entre deux pulsations

export function TagBubbles({ items }: { items: string[] }) {
  const cycle = items.length * INTERVALLE

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {items.map((s, i) => {
        const style = {
          "--cycle": `${cycle}s`,
          "--delay": `${-(i * INTERVALLE).toFixed(2)}s`,
          "--pulse-scale": "1.09",
        } as React.CSSProperties

        return (
          <span
            key={s}
            style={style}
            className="bubble-pulse inline-flex items-center rounded-full border border-hair-strong bg-white/[0.04] px-4 py-2 font-sans text-[13.5px] text-chalk-75 backdrop-blur-sm"
          >
            {s}
          </span>
        )
      })}
    </div>
  )
}
