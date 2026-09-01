import Link from "next/link"
import { Reveal } from "./reveal"

/**
 * Le manifeste, en pleine page d'accueil.
 *
 * Ce n'est pas une page de doctrine à part : la conviction doit être lue par
 * tout le monde, au moment où le lecteur vient d'admettre le problème. Chaque
 * refus est donc suivi de sa conséquence concrète pour lui — une doctrine qui
 * ne se traduit pas en bénéfice ne fait adhérer personne.
 */
const REFUSALS = [
  {
    title: "Nous refusons la revue de presse.",
    body: "Un flux d'informations n'est pas une réponse. RADAR ne relaie jamais un fait sans dire, en une phrase, ce qu'il change pour une entreprise de votre marché.",
    gain: "Vous ne lisez plus pour vous informer. Vous lisez pour décider.",
  },
  {
    title: "Nous refusons de surveiller tout pour tout le monde.",
    body: "Un marché à la fois, avec sa chaîne de valeur, ses acteurs et ses obligations. Un fait qui ne change rien sur ce marché-là n'entre pas dans le journal, même s'il fait la une ailleurs.",
    gain: "Un journal entier consacré à votre métier. Pas un panorama de l'économie mondiale.",
  },
  {
    title: "Nous refusons de remplacer votre jugement.",
    body: "RADAR informe et recommande. Il ne décide jamais à votre place — et sur le terrain réglementaire, la décision finale revient toujours à un professionnel compétent.",
    gain: "Vous gardez la main. RADAR vous donne l'avance, pas des ordres.",
  },
  {
    title: "Nous refusons de vous laisser un angle mort.",
    body: "Vous ne devriez jamais découvrir une révolution une fois qu'elle est déjà devenue votre problème. C'est la seule raison d'être de RADAR.",
    gain: "Vous voyez arriver ce que vos concurrents découvriront trop tard.",
  },
]

export function ManifestoSection() {
  return (
    <section id="manifeste" className="section relative overflow-hidden bg-ink">
      <div className="glow-center" aria-hidden />
      <div className="shell-md relative">
        <div className="mb-12 text-center">
          <div className="kicker mb-5">Ce que nous croyons</div>
          <h2 className="h-section mb-6">
            L&apos;ennemi n&apos;est pas la concurrence. C&apos;est l&apos;angle mort.
          </h2>
          <p className="lede mx-auto max-w-[620px]">
            Vous ne devriez jamais apprendre qu&apos;un monde a changé en le découvrant
            déjà installé chez un concurrent. Le changement ne prévient pas — mais il
            laisse toujours des signaux, avant. RADAR existe pour les voir à votre place.
          </p>
        </div>

        <div className="mx-auto max-w-[760px]">
          {REFUSALS.map((r, i) => (
            <Reveal key={r.title} delay={i * 70}>
              <div
                className={`grid gap-4 border-b border-white/[0.08] py-8 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-8 ${
                  i === 0 ? "border-t" : ""
                }`}
              >
                <div className="font-mono text-[13px] text-brand">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="mb-2 font-serif text-[1.15rem] font-bold leading-snug text-white">{r.title}</h3>
                  <p className="mb-4 body-sm">{r.body}</p>
                  <p className="m-0 border-l-2 border-brand/50 pl-4 font-sans text-[13.5px] leading-relaxed text-chalk-75">
                    <span className="mr-2 font-semibold uppercase tracking-[0.08em] text-brand">
                      Pour vous
                    </span>
                    {r.gain}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* La doctrine se referme sur ce qu'elle rend au lecteur — son
            attention — plutôt que sur une relance commerciale. */}
        <Reveal>
          <div className="mx-auto mt-16 max-w-[660px]">
            <div className="hairline mb-10" />
            <p className="mb-6 font-serif text-[clamp(1.25rem,2.5vw,1.7rem)] leading-snug text-white/90">
              Surveiller son marché n&apos;a jamais été le métier de personne.
              C&apos;est une charge qu&apos;on ajoute à un dirigeant déjà occupé, et
              qui consomme exactement ce qu&apos;il a de plus rare : son attention.
            </p>
            <p className="mb-10 body-sm">
              Ce que RADAR vous rend, ce n&apos;est pas du temps — c&apos;est de
              l&apos;attention disponible. Celle que vous passiez à balayer six
              sources pour ne rien manquer retourne là où elle a de la valeur :
              vos clients, vos équipes, les décisions que personne ne peut prendre
              à votre place.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/pricing" className="btn-primary">Voir les tarifs</Link>
              <span className="font-sans text-[13px] text-chalk-40">
                Sans engagement. Résiliable à tout moment.
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
