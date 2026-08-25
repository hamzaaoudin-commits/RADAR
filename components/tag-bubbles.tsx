/**
 * Bulles flottantes pour une liste de mots-clés courts.
 *
 * Alterne deux tons (verre neutre / verre teinté rouge) et fait varier la
 * taille et le rythme de flottaison par élément, pour un rendu organique
 * plutôt qu'une grille de tags identiques. Les valeurs de style sont dérivées
 * de l'index (jamais de Math.random) afin que le rendu serveur et le rendu
 * client soient identiques au premier affichage.
 */
export function TagBubbles({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {items.map((s, i) => {
        const tinted = i % 3 === 1
        const big = i % 4 === 0
        const style = {
          "--dur": `${5.5 + (i % 5) * 0.7}s`,
          "--delay": `${-(i * 0.55).toFixed(2)}s`,
          "--float": `${7 + (i % 3) * 3}px`,
          "--rot": `${i % 2 === 0 ? 1.5 : -1.5}deg`,
        } as React.CSSProperties

        return (
          <span
            key={s}
            style={style}
            className={[
              "bubble-float inline-flex items-center rounded-full border backdrop-blur-sm",
              big ? "px-5 py-2.5 text-[14px]" : "px-4 py-2 text-[13px]",
              "font-sans text-chalk-75",
              tinted
                ? "border-brand-hair bg-brand/[0.09] text-white"
                : "border-hair-strong bg-white/[0.04]",
            ].join(" ")}
          >
            {s}
          </span>
        )
      })}
    </div>
  )
}
