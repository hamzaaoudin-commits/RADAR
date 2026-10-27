import Link from "next/link"
import { BRIEFS, SEVERITY_META, type Severity } from "@/lib/brief-data"

/**
 * Aperçu de la newsletter : la note hebdomadaire telle qu'elle arrive en
 * boîte mail.
 *
 * Elle est composée comme une note de synthèse remise à un décideur : une
 * synthèse en tête qui se lit seule, un niveau d'alerte, des sujets classés,
 * une recommandation, puis le détail par rubrique avec, pour chaque article,
 * la mention de la façon dont l'information a été obtenue. Le journal complet,
 * feuilletable, vit sur /brief.
 */

const INK = "#14120f"
const PAPER = "#f5f1e8"
const RED = "#b3202c"

const ALERT_LABEL: Record<Severity, string> = {
  critical: "Critique",
  important: "Élevé",
  watch: "Surveillance",
}

function Rule({ double = false }: { double?: boolean }) {
  return (
    <div aria-hidden className="my-7">
      <div className="h-px" style={{ background: INK, opacity: 0.85 }} />
      {double && <div className="mt-[3px] h-px" style={{ background: INK, opacity: 0.35 }} />}
    </div>
  )
}

function SectionTitle({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-baseline gap-3">
      <span className="font-serif text-[13px] italic" style={{ color: RED }}>
        {n}
      </span>
      <h4 className="m-0 font-sans text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: INK }}>
        {children}
      </h4>
      <span aria-hidden className="h-px flex-1" style={{ background: INK, opacity: 0.18 }} />
    </div>
  )
}

function firstSentence(t: string) {
  const i = t.indexOf(". ")
  return i === -1 ? t : t.slice(0, i + 1)
}

export function NewsletterPreview() {
  const b = BRIEFS[0]
  const une = b.items[0]
  const nbArticles = b.rubriques.reduce((n, r) => n + r.breves.length, 0)

  return (
    <section className="section">
      <div className="shell-md">
        <div className="mb-12 text-center">
          <div className="kicker mb-5">La newsletter</div>
          <h2 className="h-section mb-5">Chaque lundi à 7h, une note de synthèse sur votre marché.</h2>
          <p className="lede mx-auto max-w-[640px]">
            Ci-dessous, le vrai numéro de la {b.week.toLowerCase()} ({b.dateLabel}), marché :{" "}
            {b.market?.toLowerCase()}. Chaque information renvoie à sa source.
          </p>
        </div>

        <div className="mx-auto max-w-[720px] overflow-hidden rounded-2xl border border-hair-strong bg-ink-soft shadow-[0_40px_100px_-30px_rgba(230,57,70,0.4)]">
          {/* Boîte mail */}
          <div className="border-b border-hair px-6 py-5 font-sans">
            <div className="mb-3 flex items-center gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <div className="mb-1 text-[15px] font-semibold leading-snug text-white">
              RADAR · Note n° {b.week.replace("Semaine ", "")} · {b.market} — {b.headline}
            </div>
            <div className="mb-2 text-[12.5px] leading-snug text-chalk-55">
              Synthèse en tête, {b.items.length} sujets classés, {nbArticles} articles sourcés. Lecture : 10 minutes.
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 text-[12px] text-chalk-55">
              <span>
                De : <span className="text-chalk-75">RADAR · Note de veille</span> · À : vous
              </span>
              <span>Lundi 26 octobre 2026, 7h00</span>
            </div>
          </div>

          {/* La note */}
          <div className="px-5 py-8 font-sans sm:px-10 sm:py-10" style={{ background: PAPER, color: INK }}>
            {/* En-tête de la note */}
            <div className="text-center">
              <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.34em]" style={{ color: RED }}>
                Diffusion restreinte · Abonnés
              </div>
              <div className="font-serif text-[40px] font-bold leading-none tracking-[0.04em]" style={{ color: INK }}>
                RADAR
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.3em]" style={{ opacity: 0.65 }}>
                Note hebdomadaire de veille stratégique
              </div>
            </div>

            <Rule double />

            <dl className="m-0 grid grid-cols-2 gap-x-6 gap-y-3 text-[12px] sm:grid-cols-4">
              {[
                ["Référence", `RADAR/EC/2026-${b.week.replace("Semaine ", "")}`],
                ["Marché", b.market ?? ""],
                ["Période couverte", b.dateLabel],
                ["Établie le", "Lundi 26 octobre 2026"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="mb-0.5 text-[9.5px] font-bold uppercase tracking-[0.2em]" style={{ opacity: 0.5 }}>
                    {k}
                  </dt>
                  <dd className="m-0 font-semibold leading-snug">{v}</dd>
                </div>
              ))}
            </dl>

            <Rule />

            {/* Synthèse */}
            <SectionTitle n="I.">Synthèse</SectionTitle>
            <h3 className="mb-4 font-serif text-[27px] font-bold leading-[1.18] tracking-[-0.01em]">{b.headline}</h3>
            <p className="mb-5 text-[14.5px] leading-[1.75]" style={{ opacity: 0.85 }}>
              {b.summary}
            </p>

            <div className="mb-2 flex items-stretch overflow-hidden rounded-sm border" style={{ borderColor: `${INK}33` }}>
              <div
                className="flex w-[120px] shrink-0 flex-col justify-center px-4 py-3 text-white"
                style={{ background: SEVERITY_META[une.severity].color === "#ff1a1a" ? RED : INK }}
              >
                <span className="text-[9px] font-bold uppercase tracking-[0.22em] opacity-80">Niveau d&apos;alerte</span>
                <span className="mt-1 font-serif text-[19px] font-bold leading-none">{ALERT_LABEL[une.severity]}</span>
              </div>
              <div className="flex-1 bg-white/60 px-4 py-3 text-[13px] leading-relaxed">
                <span className="font-semibold">{une.label}.</span> {une.why}
              </div>
            </div>

            <Rule />

            {/* Sujets classés */}
            <SectionTitle n="II.">Sujets prioritaires</SectionTitle>
            <div className="mb-1 divide-y" style={{ borderColor: `${INK}1f` }}>
              {b.items.map((i) => (
                <div key={i.rank} className="flex gap-4 py-4 first:pt-0" style={{ borderColor: `${INK}1f` }}>
                  <span className="w-7 shrink-0 font-serif text-[22px] font-bold leading-none" style={{ color: RED }}>
                    {i.rank}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 font-serif text-[16.5px] font-bold leading-snug">{i.label}</div>
                    <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em]" style={{ opacity: 0.55 }}>
                      {i.domain} · Alerte {ALERT_LABEL[i.severity].toLowerCase()} · Horizon {i.horizon}
                    </div>
                    <p className="m-0 text-[13px] leading-[1.65]" style={{ opacity: 0.85 }}>
                      <span className="font-semibold" style={{ color: RED }}>
                        À faire :{" "}
                      </span>
                      {i.action}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Rule />

            {/* Recommandation */}
            <SectionTitle n="III.">Recommandation de la semaine</SectionTitle>
            <div className="mb-1 px-6 py-6" style={{ background: INK, color: "#fff" }}>
              <p className="m-0 font-serif text-[15.5px] leading-[1.75] text-white/95">{b.todo}</p>
            </div>

            <Rule />

            {/* Revue par rubrique */}
            <SectionTitle n="IV.">Revue par rubrique</SectionTitle>
            {b.rubriques.map((r) => (
              <div key={r.name} className="mb-7 last:mb-0">
                <div
                  className="mb-3 flex items-baseline justify-between border-b pb-1.5"
                  style={{ borderColor: INK }}
                >
                  <span className="font-serif text-[18px] font-bold">{r.name}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ opacity: 0.45 }}>
                    {r.breves.length > 0 ? `${r.breves.length} article${r.breves.length > 1 ? "s" : ""}` : "Aucun signal"}
                  </span>
                </div>
                {r.breves.length === 0 && (
                  <p className="m-0 text-[13px] italic leading-relaxed" style={{ opacity: 0.6 }}>
                    Rien à signaler cette semaine.
                  </p>
                )}
                {r.breves.map((x) => {
                  return (
                    <article key={x.title} className="mb-5 last:mb-0">
                      <h5 className="mb-1.5 font-serif text-[15.5px] font-bold leading-snug">{x.title}</h5>
                      <p className="mb-2 text-[13px] leading-[1.7]" style={{ opacity: 0.85 }}>
                        {firstSentence(x.body)}
                      </p>
                      <p className="mb-2 border-l-2 pl-3 text-[12.5px] leading-[1.65]" style={{ borderColor: RED, opacity: 0.9 }}>
                        <span className="font-semibold">Ce que cela change : </span>
                        {x.implication}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10.5px]" style={{ opacity: 0.6 }}>
                        <span
                          className="rounded-sm px-1.5 py-0.5 font-bold uppercase tracking-[0.14em]"
                          style={{
                            background: x.confidence === "relayed" ? "transparent" : `${INK}12`,
                            border: `1px solid ${INK}40`,
                          }}
                        >
                          {x.confidence === "relayed" ? "Relayé · à confirmer" : "Source consultée"}
                        </span>
                        <span>
                          {x.source}
                          {x.refs?.length ? ` ${x.refs.map((n) => `[${n}]`).join(" ")}` : ""}
                        </span>
                      </div>
                    </article>
                  )
                })}
              </div>
            ))}

            <Rule />

            {/* Calendrier */}
            <SectionTitle n="V.">Calendrier</SectionTitle>
            <table className="mb-1 w-full border-collapse text-left text-[12.5px]">
              <tbody>
                {b.agenda.map((a) => (
                  <tr key={a.date + a.what} className="border-b align-top" style={{ borderColor: `${INK}26` }}>
                    <td className="w-[118px] py-2.5 pr-3 font-serif text-[13.5px] font-bold" style={{ color: RED }}>
                      {a.date}
                    </td>
                    <td className="py-2.5 leading-snug">{a.what}</td>
                    <td className="hidden w-[110px] py-2.5 pl-3 text-right text-[10.5px] uppercase tracking-[0.12em] sm:table-cell" style={{ opacity: 0.5 }}>
                      {a.who}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Rule />

            {/* Chiffres */}
            <SectionTitle n="VI.">Chiffres clés</SectionTitle>
            <div className="mb-1 grid gap-px sm:grid-cols-2" style={{ background: `${INK}26` }}>
              {b.figures.map((f) => (
                <div key={f.value} className="px-5 py-5" style={{ background: PAPER }}>
                  <div className="font-serif text-[34px] font-bold leading-none" style={{ color: RED }}>
                    {f.value}
                  </div>
                  <div className="mt-2 text-[12.5px] leading-snug" style={{ opacity: 0.85 }}>
                    {f.what}
                  </div>
                  <div className="mt-2 text-[10px] leading-snug" style={{ opacity: 0.45 }}>
                    {f.source}
                  </div>
                </div>
              ))}
            </div>

            <Rule />

            {/* Sources */}
            <SectionTitle n="VII.">Sources</SectionTitle>
            <ol className="m-0 mb-6 list-none p-0 text-[11.5px] leading-relaxed">
              {b.sources?.map((s, i) => (
                <li key={s.url} className="mb-1.5 flex gap-2">
                  <span className="w-5 shrink-0 font-serif italic" style={{ color: RED }}>
                    [{i + 1}]
                  </span>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: INK, opacity: 0.75 }}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>

            <div className="text-center">
              <Link
                href="/brief"
                className="inline-block px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white no-underline"
                style={{ background: RED }}
              >
                Ouvrir le journal complet
              </Link>
            </div>

            <Rule double />

            <div className="text-center text-[10.5px] leading-relaxed" style={{ opacity: 0.55 }}>
              <div className="mb-1 font-serif text-[13px] italic">La rédaction RADAR</div>
              Vous recevez cette note car vous suivez le marché « {b.market?.toLowerCase()} » · 20€/mois ·
              Résiliable à tout moment depuis votre espace abonné.
              <br />
              Document destiné à l&apos;abonné. Une information « relayée » doit être confirmée avant toute décision.
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/pricing" className="btn-primary">20€/mois · Recevoir la note chaque lundi</Link>
        </div>
      </div>
    </section>
  )
}
