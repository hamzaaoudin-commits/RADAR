import Link from "next/link"

const EXPLORE = [
  { label: "Accueil", href: "/" },
  { label: "Les 7 radars", href: "/#radars" },
  { label: "Produit", href: "/#produit" },
  { label: "Le journal (démo)", href: "/brief" },
]
const OFFERS = [
  { label: "Tarifs", href: "/pricing" },
  { label: "RADAR", href: "/pricing#radar" },
  { label: "RADAR PRO", href: "/pricing#pro" },
  { label: "RADAR ADVISORY", href: "/pricing#advisory" },
  { label: "RADAR ENTERPRISE", href: "/pricing#enterprise" },
]
const REACH = [
  { label: "Nous écrire", href: "mailto:contact@radar-intelligence.fr" },
  { label: "LinkedIn", href: "https://www.linkedin.com", external: true },
]

const currentYear = new Date().getFullYear()
const linkClass = "font-sans text-[13px] text-chalk-55 no-underline transition-colors hover:text-white"
const headClass = "mb-6 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-brand"

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-hair bg-ink font-sans text-white">
      <div className="mx-auto max-w-[1280px] px-gutter pb-12 pt-20">
        <div
          aria-hidden
          className="pointer-events-none select-none whitespace-nowrap font-serif text-[clamp(2rem,7vw,3.6rem)] font-bold leading-none tracking-[-0.01em] text-white/[0.05]"
        >
          RADAR Intelligence
        </div>

        <div className="mb-16 mt-10 grid gap-8 md:gap-20 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
          <div>
            <Link href="/" className="mb-5 inline-block font-serif text-[22px] font-bold tracking-[-0.02em] text-white no-underline">
              <span className="text-gradient">RADAR</span>
            </Link>
            <p className="mb-5 max-w-[240px] text-[13px] leading-relaxed text-chalk-55">
              L&apos;intelligence de votre marché, chaque semaine. Notre seul ennemi : l&apos;angle mort.
            </p>
            <div className="text-[11px] uppercase tracking-[0.1em] text-chalk-40">Paris · France</div>
          </div>

          <div>
            <div className={headClass}>Explorer</div>
            <div className="flex flex-col gap-3">
              {EXPLORE.map((l) => (
                <Link key={l.href} href={l.href} className={linkClass}>{l.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <div className={headClass}>Offres</div>
            <div className="flex flex-col gap-3">
              {OFFERS.map((l) => (
                <Link key={l.href} href={l.href} className={linkClass}>{l.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <div className={headClass}>Contact</div>
            <div className="flex flex-col gap-3">
              {REACH.map((l) =>
                l.external ? (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer nofollow" className={linkClass}>
                    {l.label}
                  </a>
                ) : (
                  <a key={l.href} href={l.href} className={linkClass}>{l.label}</a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-hair bg-black/30">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-gutter py-6">
          <div className="text-xs tracking-[0.02em] text-chalk-40">
            © {currentYear} RADAR. Tous droits réservés.
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/mentions-legales" className="text-xs text-chalk-55 no-underline transition-colors hover:text-white">
              Mentions légales
            </Link>
            <Link href="/cgv" className="text-xs text-chalk-55 no-underline transition-colors hover:text-white">
              CGV
            </Link>
            <Link href="/confidentialite" className="text-xs text-chalk-55 no-underline transition-colors hover:text-white">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
