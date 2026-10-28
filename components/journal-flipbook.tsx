"use client"

import "@fontsource/eb-garamond/400.css"
import "@fontsource/eb-garamond/400-italic.css"
import "@fontsource/eb-garamond/500.css"
import "@fontsource/eb-garamond/600.css"
import { useMemo, useState, type ReactNode } from "react"
import type { Brief, Severity } from "@/lib/brief-data"
import { ArticleVisual } from "./article-visual"
import { RubriqueIcon, Seal } from "./radar-icons"

/**
 * Le numéro présenté comme l'objet qu'il est : une note remise à un décideur,
 * qu'on feuillette comme un dossier imprimé.
 *
 * Mécanique : chaque page est une feuille positionnée en pile (perspective
 * 3D), tournée à 0° (face visible) ou -180° (retournée, dos visible) selon
 * sa position par rapport à la page courante. La feuille en cours
 * d'animation reçoit temporairement un z-index forcé au-dessus de tout,
 * levé à la fin de la transition : sans ça, la page qui arrive (immobile,
 * déjà au bon angle) s'affiche instantanément par-dessus celle qui tourne.
 *
 * Codes empruntés aux notes de service destinées aux décideurs : marquage de
 * diffusion en tête et en pied de chaque page, sceau et bloc de contrôle sur
 * la couverture, sommaire paginé, paragraphes numérotés (« 5.2 »), niveau de
 * fiabilité des sources en clair. Un seul serif classique (EB Garamond), des
 * filets fins, et le rouge réservé aux marquages.
 */

type Tone = "cover"
type Page = { label: string; tone?: Tone; content: ReactNode }

const ALERT_LABEL: Record<Severity, string> = {
  critical: "Critique",
  important: "Élevé",
  watch: "Surveillance",
}

function Folio({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="jf-folio">
      <span className="jf-folio-n">{n}</span>
      <span className="jf-folio-t">{children}</span>
    </div>
  )
}

function buildPages(b: Brief): Page[] {
  const pages: Page[] = []
  const num = b.week.replace("Semaine ", "")
  const ref = `RADAR/EC/2026-${num}`
  const nb = b.rubriques.reduce((n, r) => n + r.breves.length, 0)
  const une = b.items[0]

  /* Pagination : 4 pages avant les articles (couverture, synthèse, sujets, recommandation). */
  const FIRST_ARTICLE_PAGE = 5
  const starts: Record<string, number> = {}
  let cursor = FIRST_ARTICLE_PAGE
  for (const r of b.rubriques) {
    starts[r.name] = cursor
    cursor += Math.max(1, r.breves.length)
  }
  const pAgenda = cursor
  const pFigures = cursor + 1
  const pSA = cursor + 2
  const pSources = cursor + 3

  /* Couverture */
  pages.push({
    label: "Couverture",
    tone: "cover",
    content: (
      <div className="jf-cover">
        <div className="jf-cover-class">Diffusion restreinte</div>
        <div className="jf-cover-center">
          <Seal size={190} className="jf-cover-seal" />
          <div className="jf-cover-brand">RADAR</div>
          <div className="jf-cover-sub">Note de veille stratégique</div>
          <div className="jf-cover-rule" aria-hidden />
          <div className="jf-cover-no">Note n° {num}</div>
          <div className="jf-cover-market">{b.market}</div>
          <div className="jf-cover-period">Semaine du {b.dateLabel}</div>
        </div>
        <dl className="jf-ctrl">
          <div>
            <dt>Destinataire</dt>
            <dd>Abonné</dd>
          </div>
          <div>
            <dt>Établie le</dt>
            <dd>26 octobre 2026</dd>
          </div>
          <div>
            <dt>Référence</dt>
            <dd>{ref}</dd>
          </div>
          <div>
            <dt>Diffusion</dt>
            <dd>Nominative</dd>
          </div>
        </dl>
        <div className="jf-cover-class">Ne pas diffuser</div>
      </div>
    ),
  })

  /* Synthèse */
  const toc: { n: string; name: string; page: number; sub?: boolean }[] = [
    { n: "I", name: "Synthèse", page: 2 },
    { n: "II", name: "Sujets prioritaires", page: 3 },
    { n: "III", name: "Recommandation", page: 4 },
    ...b.rubriques.map((r, k) => ({ n: `IV.${k + 1}`, name: r.name, page: starts[r.name], sub: true })),
    { n: "V", name: "Calendrier", page: pAgenda },
    { n: "VI", name: "Chiffres clés", page: pFigures },
    { n: "VII", name: "Sources", page: pSA },
  ]
  pages.push({
    label: "Synthèse",
    content: (
      <div className="jf-page">
        <Folio n="I">Synthèse</Folio>
        <h3 className="jf-h1">{b.headline}</h3>
        <p className="jf-chapo">{b.summary}</p>
        <div className="jf-judg">
          <div className="jf-judg-k">
            <span>Jugement principal</span>
            <span className="jf-judg-lvl">Niveau d&apos;alerte : {ALERT_LABEL[une.severity]}</span>
          </div>
          <p>
            <strong>{une.label}.</strong> {une.why}
          </p>
        </div>
        <div className="jf-push">
          <div className="jf-sec">Sommaire · {nb} articles</div>
          <div className="jf-toc">
            {toc.map((t) => (
              <div key={t.n + t.name} className={`jf-toc-row ${t.sub ? "is-sub" : ""}`}>
                <span className="jf-toc-n">{t.n}</span>
                <span className="jf-toc-name">{t.name}</span>
                <span className="jf-toc-dots" />
                <span className="jf-toc-p">{t.page}</span>
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
        <Folio n="II">Sujets prioritaires</Folio>
        <div className="jf-sujets">
          {b.items.map((i) => (
            <div key={i.rank} className="jf-sujet">
              <div className="jf-sujet-rank">{i.rank}</div>
              <div className="jf-sujet-body">
                <div className="jf-sujet-meta">
                  <RubriqueIcon name={i.domain} size={14} />
                  <span>
                    {i.domain} · Alerte {ALERT_LABEL[i.severity].toLowerCase()} · Horizon {i.horizon}
                  </span>
                </div>
                <div className="jf-sujet-label">{i.label}</div>
                <p className="jf-sujet-act">
                  <em>À faire.</em> {i.action}
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
    content: (
      <div className="jf-page jf-reco">
        <Folio n="III">Recommandation</Folio>
        <div className="jf-reco-k">À l&apos;attention du destinataire</div>
        <ol className="jf-reco-list">
          {b.todo
            .split(/\s(?=En parallèle, |Enfin, )/)
            .map((x) => x.replace(/^(En parallèle, |Enfin, )/, ""))
            .map((x, k) => (
              <li key={k}>
                <span className="jf-reco-n">{k + 1}</span>
                <span>{x.charAt(0).toUpperCase() + x.slice(1)}</span>
              </li>
            ))}
        </ol>
        <div className="jf-reco-sign">
          <span>La rédaction</span>
          <span>RADAR</span>
        </div>
      </div>
    ),
  })

  /* Articles : une page par article */
  let art = 0
  b.rubriques.forEach((r, ri) => {
    if (r.breves.length === 0) {
      pages.push({
        label: r.name,
        content: (
          <div className="jf-page">
            <Folio n={`IV.${ri + 1}`}>{r.name}</Folio>
            <p className="jf-empty">Rien à signaler cette semaine. Balayé : {r.empty}.</p>
          </div>
        ),
      })
      return
    }
    r.breves.forEach((a, idx) => {
      art += 1
      const n = art
      pages.push({
        label: `${r.name} ${idx + 1}`,
        content: (
          <div className="jf-page">
            <div className="jf-kicker">
              <span className="jf-kicker-l">
                <RubriqueIcon name={r.name} size={17} />
                IV.{ri + 1} — {r.name}
              </span>
              <span>
                {idx + 1} / {r.breves.length}
              </span>
            </div>
            <h4 className="jf-h2">{a.title}</h4>
            <p className="jf-lead">{a.lead}</p>
            {(a.visual || a.stat) && (
              <div className="jf-hero">
                {a.visual ? (
                  <ArticleVisual visual={a.visual} />
                ) : a.stat ? (
                  <div className="jf-stat">
                    <div className="jf-stat-k">Donnée clé</div>
                    <div className="jf-stat-v">{a.stat.value}</div>
                    <div className="jf-stat-l">{a.stat.label}</div>
                  </div>
                ) : null}
              </div>
            )}
            <div className="jf-sec">Faits établis</div>
            <ol className="jf-facts">
              {a.facts.map((f, k) => (
                <li key={f}>
                  <span className="jf-facts-n">
                    {n}.{k + 1}
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ol>
            <div className="jf-sec jf-sec-push">Conséquence pour votre activité</div>
            <p className="jf-conseq">{a.implication}</p>
            <div className={`jf-fiab ${a.confidence === "relayed" ? "is-relayed" : ""}`}>
              <span>Fiabilité</span>
              {a.confidence === "relayed" ? "Information relayée · à confirmer avant d'agir" : "Source consultée par la rédaction"}
              <span className="jf-fiab-p">Sources p. {pSA}</span>
            </div>
          </div>
        ),
      })
    })
  })

  /* Calendrier */
  pages.push({
    label: "Calendrier",
    content: (
      <div className="jf-page">
        <Folio n="V">Calendrier</Folio>
        <div className="jf-ags">
          {b.agenda.map((a) => (
            <div key={a.what} className="jf-ag">
              <div className="jf-ag-date">{a.date}</div>
              <div>
                <div className="jf-ag-what">{a.what}</div>
                <div className="jf-ag-who">{a.who}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  })

  /* Chiffres */
  pages.push({
    label: "Chiffres clés",
    content: (
      <div className="jf-page">
        <Folio n="VI">Chiffres clés</Folio>
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
        <Folio n="VII">Sources par article</Folio>
        <p className="jf-sa-note">
          Chaque article renvoie aux sources numérotées de la page suivante. Sauf mention « relayé », la rédaction a lu
          les pages citées.
        </p>
        <div className="jf-sa">
          {b.rubriques
            .filter((r) => r.breves.length > 0)
            .map((r) => (
              <div key={r.name} className="jf-sa-bloc">
                <div className="jf-sa-r">
                  <RubriqueIcon name={r.name} size={15} />
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
        <Folio n="VIII">Sources et méthode</Folio>
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
                      Diffusion restreinte · Abonnés
                    </div>
                  )}
                  <div className="jf-content">{p.content}</div>
                  {p.tone !== "cover" && (
                    <div className="jf-foot" aria-hidden>
                      <span>RADAR · Note n° {brief.week.replace("Semaine ", "")}</span>
                      <span className="jf-foot-n">{String(i + 1).padStart(2, "0")}</span>
                      <span>{brief.market}</span>
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
