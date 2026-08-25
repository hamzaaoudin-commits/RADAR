const POINTS = ["Chaque fait sourcé", "Toujours daté", "Vérifiable, jamais une affirmation nue"]

/**
 * Ligne de confiance discrète : ce que la Loi de la Source impose au
 * produit, résumé en trois points, sans en faire une section à part.
 */
export function SourceTrustBar() {
  return (
    <div className="border-b border-hair bg-ink px-gutter py-4">
      <div className="mx-auto flex max-w-[700px] flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {POINTS.map((p, i) => (
          <span key={p} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden className="hidden h-1 w-1 rounded-full bg-hair-strong sm:block" />}
            <span aria-hidden className="h-[5px] w-[5px] rounded-full bg-brand" />
            <span className="font-sans text-[11.5px] uppercase tracking-[0.08em] text-chalk-55">{p}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
