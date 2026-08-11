import Link from "next/link"

export function CTABanner() {
  return (
    <section className="border-t border-hair bg-ink-soft px-gutter py-20 text-center">
      <div className="mx-auto max-w-[640px]">
        <h2 className="mb-5 font-serif text-[clamp(1.7rem,3.6vw,2.6rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white">
          Le monde change. Votre entreprise doit changer avant lui.
        </h2>
        <p className="mb-8 font-sans text-[15.5px] leading-relaxed text-chalk-65">
          Construisez votre radar d&apos;entreprise en quelques minutes. Gratuit pour commencer.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/pricing" className="btn-primary">Démarrer gratuitement →</Link>
          <Link href="/dashboard" className="btn-quiet">Voir un exemple de dashboard</Link>
        </div>
      </div>
    </section>
  )
}
