"use client"

import "@fontsource/barlow-condensed/600.css"
import "@fontsource/barlow-condensed/700.css"
import "@fontsource/barlow-condensed/800.css"
import "@fontsource/source-serif-4/400.css"
import "@fontsource/source-serif-4/400-italic.css"
import "@fontsource/source-serif-4/600.css"
import { useMemo, useState, type ReactNode } from "react"
import type { Brief, Severity } from "@/lib/brief-data"
import { ArticleVisual } from "./article-visual"
import { RadarMark, RubriqueIcon, IconCalendrier, IconChiffres, IconReco, IconSource, IconRisque, IconArrow } from "./radar-icons"

/**
 * Le numéro présenté comme l'objet qu'il deviendra réellement : un dossier
 * imprimé qu'on feuillette, pas une liste qu'on scrolle.
 *
 * Mécanique : chaque page est une feuille positionnée en pile (perspective
 * 3D), tournée à 0° (face visible) ou -180° (retournée, dos visible) selon
 * sa position par rapport à la page courante. La feuille en cours
 * d'animation reçoit temporairement un z-index forcé au-dessus de tout,
 * levé à la fin de la transition : sans ça, la page qui arrive (immobile,
 * déjà au bon angle) s'affiche instantanément par-dessus celle qui tourne.
 *
 * Direction graphique : titraille en condensé gras (Barlow Condensed), texte
 * en serif de lecture (Source Serif 4), un pictogramme dessiné par rubrique,
 * un bandeau rouge pleine largeur pour la conséquence, la marque radar en
 * grand sur la couverture. Tout se dimensionne en unités de conteneur : la
 * page garde ses proportions sur mobile.
 */

type Tone = "cover" | "red"
type Page = { label: string; tone?: Tone; content: ReactNode }

const ALERT_LABEL: Record<Severity, string> = {
  critical: "Critique",
  important: "Élevé",
  watch: "Surveillance",
}

function Folio({ n, icon, children }: { n: string; icon?: ReactNode; children: ReactNode }) {
  return (
    <div className="jf-folio">
      <span className="jf-folio-n">{n}</span>
      <span className="jf-folio-t">{children}</span>
      {icon && <span className="jf-folio-i">{icon}</span>}
    </div>
  )
}

function Refs({ refs, sources }: { refs?: number[]; sources?: Brief["sources"] }) {
  if (!refs?.length || !sources) return null
  return (
    <ul className="jf-refs">
      {refs.map((n) => {
        const src = sources[n - 1]
        if (!src) return null
        return (
          <li key={n}>
            <span className="jf-ref-n">[{n}]</span>{" "}
            <a href={src.url} target="_blank" rel="noopener noreferrer">
              {src.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

function buildPages(b: Brief): Page[] {
  const pages: Page[] = []
  const num = b.week.replace("Semaine ", "")
  const ref = `RADAR/EC/2026-${num}`
  const nb = b.rubriques.reduce((n, r) => n + r.breves.length, 0)
  const une = b.items[0]

  /* Couverture */
  pages.push({
    label: "Couverture",
    tone: "cover",
    content: (
      <div className="jf-cover">
        <RadarMark size={760} sweep className="jf-cover-radar" />
        <div className="jf-cover-top">
          <span className="jf-cover-brand">RADAR</span>
          <span className="jf-cover-restr">Diffusion restreinte</span>
        </div>
        <div className="jf-cover-mid">
          <div className="jf-cover-kick">Note hebdomadaire de veille stratégique</div>
          <div className="jf-cover-num">{num}</div>
          <div className="jf-cover-market">{b.market}</div>
          <div className="jf-cover-period">{b.dateLabel}</div>
        </div>
        <div className="jf-cover-bot">
          <span>Réf. {ref}</span>
          <span>Établie le 26.10.2026</span>
        </div>
      </div>
    ),
  })

  /* Synthèse */
  pages.push({
    label: "Synthèse",
    content: (
      <div className="jf-page">
        <Folio n="01" icon={<IconSource size={22} />}>Synthèse</Folio>
        <h3 className="jf-h1">{b.headline}</h3>
        <p className="jf-chapo">{b.summary}</p>
        <div className="jf-alert">
          <div className="jf-alert-tag">
            <IconRisque size={26} />
            <span>Niveau d&apos;alerte</span>
            <strong>{ALERT_LABEL[une.severity]}</strong>
          </div>
          <div className="jf-alert-txt">
            <strong>{une.label}.</strong> {une.why}
          </div>
        </div>
        <div className="jf-push">
          <div className="jf-sommaire-h">Au sommaire · {nb} articles</div>
          <div className="jf-som">
            {b.rubriques.map((r) => (
              <div key={r.name} className="jf-som-row">
                <RubriqueIcon name={r.name} size={22} className="jf-som-i" />
                <span className="jf-som-name">{r.name}</span>
                <span className="jf-som-n">{r.breves.length || "—"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  })

  /* Sujets prioritaires */
  pages.push({
    label: "Sujets prioritaires",
    content: (
      <div className="jf-page">
        <Folio n="02" icon={<IconRisque size={22} />}>Les cinq sujets de la semaine</Folio>
        <div className="jf-sujets">
          {b.items.map((i) => (
            <div key={i.rank} className="jf-sujet">
              <div className="jf-sujet-rank">{i.rank}</div>
              <div className="jf-sujet-body">
                <div className="jf-sujet-meta">
                  <RubriqueIcon name={i.domain} size={15} />
                  <span>
                    {i.domain} · Alerte {ALERT_LABEL[i.severity].toLowerCase()} · {i.horizon}
                  </span>
                </div>
                <div className="jf-sujet-label">{i.label}</div>
                <p className="jf-sujet-act">
                  <strong>À faire.</strong> {i.action}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  })

  /* Recommandation */
  pages.push({
    label: "Recommandation",
    tone: "red",
    content: (
      <div className="jf-page jf-reco">
        <RadarMark size={620} className="jf-reco-radar" />
        <Folio n="03" icon={<IconReco size={22} />}>Recommandation de la semaine</Folio>
        <p className="jf-reco-text">{b.todo}</p>
        <div className="jf-reco-sign">RADAR — La rédaction</div>
      </div>
    ),
  })

  /* Articles : une page par article */
  for (const r of b.rubriques) {
    if (r.breves.length === 0) {
      pages.push({
        label: r.name,
        content: (
          <div className="jf-page">
            <Folio n="04" icon={<RubriqueIcon name={r.name} size={22} />}>{r.name}</Folio>
            <p className="jf-empty">Rien à signaler cette semaine. Balayé : {r.empty}.</p>
          </div>
        ),
      })
      continue
    }
    r.breves.forEach((a, idx) => {
      pages.push({
        label: `${r.name} ${idx + 1}`,
        content: (
          <div className="jf-page">
            <div className="jf-art">
              <aside className="jf-gut">
                <div className="jf-gut-ico">
                  <RubriqueIcon name={r.name} size={26} />
                </div>
                <div className="jf-gut-txt">
                  {r.name} · {idx + 1}/{r.breves.length}
                </div>
              </aside>
              <div className="jf-main">
                <h4 className="jf-h2">{a.title}</h4>
                <p className="jf-lead">{a.lead}</p>
                {(a.visual || a.stat) && (
                  <div className="jf-hero">
                    {a.visual ? (
                      <ArticleVisual visual={a.visual} />
                    ) : a.stat ? (
                      <div className="jf-stat">
                        <div className="jf-stat-v">{a.stat.value}</div>
                        <div className="jf-stat-l">{a.stat.label}</div>
                      </div>
                    ) : null}
                  </div>
                )}
                <ol className="jf-facts">
                  {a.facts.map((f, k) => (
                    <li key={f}>
                      <span className="jf-facts-n">{String(k + 1).padStart(2, "0")}</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ol>
                {a.confidence === "relayed" && <div className="jf-conf is-relayed">Relayé · à confirmer</div>}
                <div className="jf-change">
                  <div className="jf-change-k">
                    <IconArrow size={16} />
                    Ce que cela change
                  </div>
                  <p>{a.implication}</p>
                </div>
              </div>
            </div>
          </div>
        ),
      })
    })
  }

  /* Calendrier */
  pages.push({
    label: "Calendrier",
    content: (
      <div className="jf-page">
        <Folio n="05" icon={<IconCalendrier size={22} />}>Calendrier</Folio>
        <div className="jf-ags">
          {b.agenda.map((a) => {
            const [day, ...rest] = a.date.split(" ")
            return (
              <div key={a.what} className="jf-ag">
                <div className="jf-ag-date">
                  <span className="jf-ag-d">{day}</span>
                  <span className="jf-ag-m">{rest.join(" ")}</span>
                </div>
                <div>
                  <div className="jf-ag-what">{a.what}</div>
                  <div className="jf-ag-who">{a.who}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    ),
  })

  /* Chiffres */
  pages.push({
    label: "Chiffres clés",
    content: (
      <div className="jf-page">
        <Folio n="06" icon={<IconChiffres size={22} />}>Chiffres clés</Folio>
        <div className="jf-figs">
          {b.figures.map((f) => (
            <div key={f.what} className="jf-fig">
              <div className="jf-fig-val">{f.value}</div>
              <div>
                <div className="jf-fig-what">{f.what}</div>
                <div className="jf-fig-src">{f.source}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  })

  /* Sources par article */
  pages.push({
    label: "Sources par article",
    content: (
      <div className="jf-page">
        <Folio n="07" icon={<IconSource size={22} />}>Sources par article</Folio>
        <p className="jf-sa-note">
          Chaque article renvoie aux sources numérotées de la page suivante. Sauf mention « Relayé », la rédaction a lu
          les pages citées.
        </p>
        <div className="jf-sa">
          {b.rubriques
            .filter((r) => r.breves.length > 0)
            .map((r) => (
              <div key={r.name} className="jf-sa-bloc">
                <div className="jf-sa-r">
                  <RubriqueIcon name={r.name} size={16} />
                  {r.name}
                </div>
                {r.breves.map((a) => (
                  <div key={a.title} className="jf-sa-row">
                    <span className="jf-sa-t">
                      {a.title}
                      {a.confidence === "relayed" && <em> · relayé, à confirmer</em>}
                    </span>
                    <span className="jf-sa-refs">
                      {a.refs?.map((n) => {
                        const src = b.sources?.[n - 1]
                        return src ? (
                          <a key={n} href={src.url} target="_blank" rel="noopener noreferrer" title={src.label}>
                            [{n}]
                          </a>
                        ) : null
                      })}
                    </span>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    ),
  })

  /* Sources et méthode */
  pages.push({
    label: "Sources",
    content: (
      <div className="jf-page">
        <Folio n="08" icon={<IconSource size={22} />}>Sources et méthode</Folio>
        <ol className="jf-srclist">
          {b.sources?.map((s, i) => (
            <li key={s.url}>
              <span className="jf-ref-n">[{i + 1}]</span>{" "}
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ol>
        <div className="jf-method jf-push">
          <div className="jf-method-k">Comment lire ce numéro</div>
          <p>
            <strong>Source consultée</strong> : la rédaction a lu la page citée. <strong>Relayé · à confirmer</strong> :
            l&apos;information vient d&apos;un tiers et n&apos;a pas été revérifiée à la source. Un montant que la source ne
            publie pas est écrit « non publié », jamais estimé. Ce document informe ; il ne remplace ni un conseil juridique
            ni un conseil fiscal.
          </p>
        </div>
      </div>
    ),
  })

  return pages
}

export function JournalFlipbook({ brief }: { brief: Brief }) {
  const pages = useMemo(() => buildPages(brief), [brief])
  const [current, setCurrent] = useState(0)
  const [turning, setTurning] = useState<number | null>(null)

  const canNext = current < pages.length - 1
  const canPrev = current > 0

  function next() {
    if (!canNext || turning !== null) return
    setTurning(current)
    setCurrent((c) => c + 1)
  }

  function prev() {
    if (!canPrev || turning !== null) return
    setTurning(current - 1)
    setCurrent((c) => c - 1)
  }

  return (
    <div className="mx-auto w-full max-w-[640px]">
      <div
        className="jf-stage"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") next()
          if (e.key === "ArrowLeft") prev()
        }}
        role="group"
        aria-label="Note hebdomadaire RADAR, feuilletable"
      >
        <div className="jf-inner">
          {pages.map((p, i) => {
            const flipped = i < current
            const isTurning = turning === i
            const z = isTurning ? 999 : flipped ? i : pages.length * 2 - i
            return (
              <div
                key={p.label + i}
                className="jf-leaf"
                style={{
                  zIndex: z,
                  transform: `rotateY(${flipped ? -179.5 : 0}deg)`,
                }}
                onTransitionEnd={(e) => {
                  if (e.propertyName === "transform" && turning === i) setTurning(null)
                }}
              >
                <div className={`jf-face jf-front ${p.tone ? `is-${p.tone}` : ""}`}>
                  {p.tone !== "cover" && (
                    <div className="jf-run" aria-hidden>
                      <span className="jf-run-l">
                        <RadarMark size={14} className="jf-run-mark" />
                        RADAR · N° {brief.week.replace("Semaine ", "")}
                      </span>
                      <span>{brief.market} · 26.10.2026</span>
                    </div>
                  )}
                  <div className="jf-content">{p.content}</div>
                  {p.tone !== "cover" && (
                    <div className="jf-foot" aria-hidden>
                      <span className="jf-foot-n">{String(i + 1).padStart(2, "0")}</span>
                      <span>Diffusion restreinte</span>
                    </div>
                  )}
                </div>
                <div className="jf-face jf-back" />
              </div>
            )
          })}
        </div>

        <button
          type="button"
          aria-label="Page précédente"
          onClick={prev}
          disabled={!canPrev || turning !== null}
          className="jf-nav jf-nav-l"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Page suivante"
          onClick={next}
          disabled={!canNext || turning !== null}
          className="jf-nav jf-nav-r"
        >
          ›
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-chalk-40">
          {pages[current].label}
        </span>
        <span className="font-mono text-[11px] text-chalk-40">
          {String(current + 1).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  )
}
