import Link from "next/link"
import type { ReactNode } from "react"
import { NavBar } from "./navbar"
import { Footer } from "./footer"

export type LegalSection = { title: string; body: ReactNode }

/**
 * Gabarit commun aux trois pages légales.
 *
 * Reprend la mise en page des pages légales existantes — pastille, titre en
 * dégradé, sections numérotées, bloc de date, liens croisés — mais écrit avec
 * les classes utilitaires du site plutôt qu'en styles en ligne.
 */
export function LegalPage({
  eyebrow,
  title,
  titleAccent,
  lead,
  revision,
  sections,
  current,
}: {
  eyebrow: string
  title: string
  titleAccent: string
  lead: string
  revision: string
  sections: LegalSection[]
  current: "mentions-legales" | "cgv" | "confidentialite"
}) {
  const links = [
    { href: "/mentions-legales", label: "Mentions légales", key: "mentions-legales" },
    { href: "/cgv", label: "Conditions générales de vente", key: "cgv" },
    { href: "/confidentialite", label: "Politique de confidentialité", key: "confidentialite" },
  ].filter((l) => l.key !== current)

  return (
    <main className="min-h-screen overflow-hidden bg-ink font-sans text-white">
      <NavBar />

      <section className="grain relative px-gutter pb-16 pt-40 text-center">
        <div className="glow-top" aria-hidden />
        <div className="grain-layer" aria-hidden />
        <div className="shell-md relative">
          <div className="pill mb-8">{eyebrow}</div>
          <h1 className="mb-6 font-serif text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            {title} <span className="text-gradient">{titleAccent}</span>.
          </h1>
          <p className="mx-auto max-w-[620px] font-sans text-[15px] leading-relaxed text-chalk-55">
            {lead}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto w-full max-w-[820px]">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-3 border border-hair-strong border-b-brand/40 px-6 py-4">
            <span className="font-serif text-[15px] font-bold text-white">{title} {titleAccent}</span>
            <span className="eyebrow">Rév. {revision}</span>
          </div>

          {sections.map((s, i) => (
            <article
              key={s.title}
              className={`mb-14 pb-14 ${i < sections.length - 1 ? "border-b border-white/[0.08]" : ""}`}
            >
              <div className="mb-3 font-serif text-[1.4rem] font-bold leading-none text-brand">
                {String(i + 1).padStart(2, "0")}.
              </div>
              <h2 className="mb-6 font-serif text-[clamp(1.4rem,2.4vw,1.9rem)] font-semibold leading-tight tracking-[-0.02em] text-white">
                {s.title}
              </h2>
              <div className="flex flex-col gap-3 font-sans text-[15.5px] leading-[1.75] text-chalk-75">
                {s.body}
              </div>
            </article>
          ))}

          <div className="mt-16 border border-hair-strong bg-white/[0.02] px-8 py-8 text-center">
            <div className="eyebrow mb-3">Dernière mise à jour</div>
            <p className="m-0 font-serif text-[1.05rem] italic text-chalk-90">{revision}</p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border-b border-brand pb-0.5 font-sans text-[13px] text-brand no-underline"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/"
              className="border-b border-hair-strong pb-0.5 font-sans text-[13px] text-chalk-55 no-underline"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/** Encadré neutre, pour isoler un cas ou un sous-traitant. */
export function LegalBox({ children }: { children: ReactNode }) {
  return (
    <div className="mt-3 border border-hair-strong bg-white/[0.02] px-6 py-5">{children}</div>
  )
}

/** Encadré accentué, pour ce que le lecteur ne doit pas manquer. */
export function LegalBoxAccent({ children }: { children: ReactNode }) {
  return (
    <div className="mt-3 border border-brand-hair bg-brand/[0.05] px-6 py-5">{children}</div>
  )
}

/** Liste à tirets, sans puces natives. */
export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="m-0 flex list-none flex-col gap-2 p-0">
      {items.map((it, i) => (
        <li key={i} className="relative pl-5">
          <span aria-hidden className="absolute left-0 text-brand">—</span>
          {it}
        </li>
      ))}
    </ul>
  )
}
