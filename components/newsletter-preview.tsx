import Link from "next/link"
import { BRIEFS, type Severity } from "@/lib/brief-data"

/**
 * Aperçu de la newsletter : la note hebdomadaire telle qu'elle arrive en
 * boîte mail.
 *
 * Direction : document de service, pas objet décoratif. Blanc pur, noir,
 * gris ; une grille à deux colonnes (étiquette à gauche, contenu à droite) ;
 * titraille en sans-serif gras, métadonnées en monospace ; un seul accent,
 * le carré rouge de la marque. Le journal feuilletable de /brief reprend
 * exactement le même langage.
 */

const INK = "#0a0a0a"
const MUTE = "#6b6b6b"
const LINE = "#dcdcdc"
const SOFT = "#f3f3f1"
const RED = "#e63946"

const ALERT_LABEL: Record<Severity, string> = {
  critical: "Critique",
  important: "Élevé",
  watch: "Surveillance",
}

function Row({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-x-8 gap-y-3 border-t py-8 sm:grid-cols-[132px_1fr]" style={{ borderColor: INK }}>
      <div>
        <div className="font-mono text-[11px] font-semibold" style={{ color: MUTE }}>
          {n}
        </div>
        <h4 className="m-0 mt-1 font-sans text-[12px] font-bold uppercase tracking-[0.12em]" style={{ color: INK }}>
          {title}
        </h4>
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  )
}

function Square({ size = 8 }: { size?: number }) {
  return <span aria-hidden className="inline-block" style={{ width: size, height: size, background: RED }} />
}

export function NewsletterPreview() {
  const b = BRIEFS[0]
  const une = b.items[0]
  const num = b.week.replace("Semaine ", "")
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

        <div className="mx-auto max-w-[760px] overflow-hidden rounded-2xl border border-hair-strong bg-ink-soft shadow-[0_40px_100px_-30px_rgba(230,57,70,0.4)]">
          {/* Boîte mail */}
          <div className="border-b border-hair px-6 py-5 font-sans">
            <div className="mb-3 flex items-center gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <div className="mb-1 text-[15px] font-semibold leading-snug text-white">
              RADAR · Note n° {num} · {b.market} — {b.headline}
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
          <div className="bg-white font-sans" style={{ color: INK }}>
            {/* Bandeau */}
            <div className="px-7 pb-8 pt-7 sm:px-10" style={{ background: INK, color: "#fff" }}>
              <div className="mb-10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Square size={10} />
                  <span className="text-[17px] font-bold tracking-[0.28em]">RADAR</span>
                </div>
                <span className="hidden font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/55 sm:inline">
                  Diffusion restreinte · Abonnés
                </span>
              </div>
              <div className="flex items-end justify-between gap-6">
                <div className="text-[84px] font-bold leading-[0.8] tracking-[-0.05em] sm:text-[112px]">{num}</div>
                <div className="pb-1 text-right font-mono text-[11px] leading-[1.7] text-white/65">
                  <div className="font-semibold text-white">{b.market}</div>
                  <div>{b.dateLabel}</div>
                  <div>Réf. RADAR/EC/2026-{num}</div>
                  <div>Établie le 26.10.2026</div>
                </div>
              </div>
            </div>

            <div className="px-7 sm:px-10">
              {/* 01 Synthèse */}
              <div className="grid gap-x-8 gap-y-3 py-9 sm:grid-cols-[132px_1fr]">
                <div>
                  <div className="font-mono text-[11px] font-semibold" style={{ color: MUTE }}>
                    01
                  </div>
                  <h4 className="m-0 mt-1 text-[12px] font-bold uppercase tracking-[0.12em]">Synthèse</h4>
                </div>
                <div className="min-w-0">
                  <h3 className="mb-4 text-[30px] font-bold leading-[1.1] tracking-[-0.03em]">{b.headline}</h3>
                  <p className="mb-6 text-[14.5px] leading-[1.7]" style={{ color: "#2b2b2b" }}>
                    {b.summary}
                  </p>
                  <div className="flex items-stretch" style={{ background: INK, color: "#fff" }}>
                    <div className="flex w-[104px] shrink-0 flex-col justify-center gap-1.5 px-4 py-4" style={{ background: RED }}>
                      <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em]">Niveau d&apos;alerte</span>
                      <span className="text-[17px] font-bold leading-none">{ALERT_LABEL[une.severity]}</span>
                    </div>
                    <div className="px-4 py-4 text-[13px] leading-[1.6]">
                      <strong>{une.label}.</strong> <span className="text-white/75">{une.why}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 02 Sujets */}
              <Row n="02" title="Sujets prioritaires">
                <div className="flex flex-col">
                  {b.items.map((i, k) => (
                    <div
                      key={i.rank}
                      className="grid grid-cols-[34px_1fr] gap-x-3 py-4"
                      style={{ borderTop: k === 0 ? "none" : `1px solid ${LINE}`, paddingTop: k === 0 ? 0 : undefined }}
                    >
                      <span className="font-mono text-[13px] font-bold">{i.rank}</span>
                      <div>
                        <div className="mb-1 text-[16px] font-bold leading-snug tracking-[-0.01em]">{i.label}</div>
                        <div className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.1em]" style={{ color: MUTE }}>
                          {i.domain} · Alerte {ALERT_LABEL[i.severity].toLowerCase()} · Horizon {i.horizon}
                        </div>
                        <p className="m-0 text-[13px] leading-[1.6]" style={{ color: "#2b2b2b" }}>
                          <strong>À faire.</strong> {i.action}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Row>

              {/* 03 Recommandation */}
              <Row n="03" title="Recommandation de la semaine">
                <div className="px-5 py-5" style={{ background: SOFT, borderLeft: `4px solid ${INK}` }}>
                  <p className="m-0 text-[14px] leading-[1.75]">{b.todo}</p>
                </div>
              </Row>

              {/* 04 Revue */}
              <Row n="04" title="Revue par rubrique">
                {b.rubriques.map((r) => (
                  <div key={r.name} className="mb-8 last:mb-0">
                    <div className="mb-4 flex items-center justify-between pb-2" style={{ borderBottom: `1px solid ${INK}` }}>
                      <span className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em]">
                        <Square size={7} />
                        {r.name}
                      </span>
                      <span className="font-mono text-[10.5px]" style={{ color: MUTE }}>
                        {r.breves.length > 0 ? `${r.breves.length} art.` : "aucun signal"}
                      </span>
                    </div>
                    {r.breves.length === 0 && (
                      <p className="m-0 text-[13px]" style={{ color: MUTE }}>
                        Rien à signaler cette semaine.
                      </p>
                    )}
                    {r.breves.map((x) => (
                      <article key={x.title} className="mb-7 last:mb-0">
                        <h5 className="mb-2 text-[16px] font-bold leading-snug tracking-[-0.01em]">{x.title}</h5>
                        <p className="mb-3 text-[13.5px] leading-[1.7]" style={{ color: "#2b2b2b" }}>
                          {x.body.length > 420 ? x.body.slice(0, x.body.lastIndexOf(". ", 420) + 1) : x.body}
                        </p>
                        <div className="mb-3 px-4 py-3 text-[13px] leading-[1.65]" style={{ background: SOFT }}>
                          <span className="font-bold">Ce que cela change. </span>
                          {x.implication}
                        </div>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[10.5px]" style={{ color: MUTE }}>
                          <span
                            className="px-1.5 py-0.5 font-semibold uppercase tracking-[0.08em]"
                            style={
                              x.confidence === "relayed"
                                ? { border: `1px dashed ${RED}`, color: RED }
                                : { background: INK, color: "#fff" }
                            }
                          >
                            {x.confidence === "relayed" ? "Relayé · à confirmer" : "Source consultée"}
                          </span>
                          <span>{x.source}</span>
                          {x.refs?.map((n) => {
                            const src = b.sources?.[n - 1]
                            return src ? (
                              <a
                                key={n}
                                href={src.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={src.label}
                                className="font-bold underline"
                                style={{ color: INK }}
                              >
                                [{n}]
                              </a>
                            ) : null
                          })}
                        </div>
                      </article>
                    ))}
                  </div>
                ))}
              </Row>

              {/* 05 Calendrier */}
              <Row n="05" title="Calendrier">
                <table className="w-full border-collapse text-left">
                  <tbody>
                    {b.agenda.map((a) => (
                      <tr key={a.date + a.what} className="align-top" style={{ borderTop: `1px solid ${LINE}` }}>
                        <td className="w-[124px] py-3 pr-3 font-mono text-[12px] font-bold">{a.date}</td>
                        <td className="py-3 text-[13px] leading-snug">{a.what}</td>
                        <td className="hidden w-[110px] py-3 pl-3 text-right font-mono text-[10px] uppercase sm:table-cell" style={{ color: MUTE }}>
                          {a.who}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Row>

              {/* 06 Chiffres */}
              <Row n="06" title="Chiffres clés">
                <div className="grid gap-px sm:grid-cols-2" style={{ background: LINE }}>
                  {b.figures.map((f) => (
                    <div key={f.value} className="bg-white px-1 py-5 sm:px-5 sm:first:pl-0">
                      <div className="text-[44px] font-bold leading-none tracking-[-0.04em]">{f.value}</div>
                      <div className="mt-3 text-[12.5px] leading-snug">{f.what}</div>
                      <div className="mt-2 font-mono text-[10px] leading-snug" style={{ color: MUTE }}>
                        {f.source}
                      </div>
                    </div>
                  ))}
                </div>
              </Row>

              {/* 07 Sources */}
              <Row n="07" title="Sources">
                <ol className="m-0 mb-5 list-none p-0 font-mono text-[11px] leading-relaxed">
                  {b.sources?.map((s, i) => (
                    <li key={s.url} className="mb-1.5 flex gap-3">
                      <span className="w-7 shrink-0 font-bold">[{i + 1}]</span>
                      <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#2b2b2b" }}>
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="m-0 text-[11.5px] leading-relaxed" style={{ color: MUTE }}>
                  <strong style={{ color: INK }}>Source consultée</strong> : la rédaction a lu la page citée.{" "}
                  <strong style={{ color: INK }}>Relayé · à confirmer</strong> : l&apos;information vient d&apos;un tiers et
                  n&apos;a pas été revérifiée à la source. Un montant que la source ne publie pas est écrit « non
                  publié », jamais estimé.
                </p>
              </Row>
            </div>

            {/* Pied */}
            <div className="px-7 pb-10 pt-2 sm:px-10">
              <Link
                href="/brief"
                className="inline-block px-7 py-4 text-[12px] font-bold uppercase tracking-[0.16em] text-white no-underline"
                style={{ background: INK }}
              >
                Ouvrir le journal complet →
              </Link>
              <div className="mt-8 flex items-start gap-3 border-t pt-5 font-mono text-[10.5px] leading-relaxed" style={{ borderColor: LINE, color: MUTE }}>
                <span className="mt-1"><Square size={7} /></span>
                <span>
                  RADAR — La rédaction. Vous recevez cette note car vous suivez le marché « {b.market?.toLowerCase()} » ·
                  20€/mois · Résiliable à tout moment depuis votre espace abonné. Ce document informe ; il ne
                  remplace ni un conseil juridique ni un conseil fiscal.
                </span>
              </div>
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
