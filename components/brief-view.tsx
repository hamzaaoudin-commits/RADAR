"use client"

import { useState } from "react"
import { BRIEFS, THREADS, SEVERITY_META, STAGES } from "@/lib/brief-data"
import { Reveal } from "./reveal"

export function BriefView() {
  const [activeSlug, setActiveSlug] = useState(BRIEFS[0].slug)
  const [openItem, setOpenItem] = useState<string | null>(BRIEFS[0].items[0].rank)

  const brief = BRIEFS.find((b) => b.slug === activeSlug) ?? BRIEFS[0]

  const selectBrief = (slug: string) => {
    setActiveSlug(slug)
    const next = BRIEFS.find((b) => b.slug === slug)
    setOpenItem(next ? next.items[0].rank : null)
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
      {/* Colonne des semaines — l'archive, ce que l'e-mail ne peut pas donner. */}
      <aside>
        <div className="eyebrow mb-4">Vos numéros</div>
        <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
          {BRIEFS.map((b) => {
            const active = b.slug === brief.slug
            return (
              <button
                key={b.slug}
                type="button"
                onClick={() => selectBrief(b.slug)}
                aria-current={active ? "true" : undefined}
                className={[
                  "shrink-0 border-l-2 px-4 py-3 text-left transition-colors duration-200 lg:w-full lg:shrink",
                  active
                    ? "border-l-brand bg-brand/[0.07]"
                    : "border-l-hair-strong hover:border-l-brand/50 hover:bg-white/[0.02]",
                ].join(" ")}
              >
                <div className="flex items-center gap-2">
                  <span className={`font-sans text-[13.5px] ${active ? "text-white" : "text-chalk-65"}`}>
                    {b.week}
                  </span>
                  {!b.read && (
                    <span
                      aria-label="Non lu"
                      className="h-[6px] w-[6px] shrink-0 rounded-full bg-brand shadow-[0_0_6px_#e63946]"
                    />
                  )}
                </div>
                <div className="mt-0.5 font-sans text-[11.5px] text-chalk-40">{b.dateLabel}</div>
              </button>
            )
          })}
        </div>

        <div className="hairline my-7 hidden lg:block" />

        <div className="hidden lg:block">
          <div className="eyebrow mb-3">Le journal par e-mail</div>
          <p className="m-0 font-sans text-[12.5px] leading-relaxed text-chalk-55">
            Vous recevez ce même numéro chaque lundi à 7h, comme tous les abonnés
            de votre marché. Cette page en conserve l&apos;archive et le suivi —
            l&apos;e-mail vous prévient, la page vous montre où vous en êtes.
          </p>
        </div>
      </aside>

      {/* Brief de la semaine sélectionnée */}
      <div>
        <Reveal>
          <div className="card px-7 py-8">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="tag">{brief.week}</span>
              <span className="font-sans text-[12px] text-chalk-40">{brief.dateLabel}</span>
            </div>
            <h2 className="mb-3 font-serif text-[clamp(1.35rem,2.6vw,1.9rem)] font-bold leading-snug text-white">
              {brief.headline}
            </h2>
            <p className="m-0 body-sm">{brief.summary}</p>
          </div>
        </Reveal>

        <div className="mb-5 mt-12 flex items-baseline justify-between gap-4">
          <div className="kicker">La une</div>
          <div className="font-sans text-[12px] text-chalk-40">
            {brief.rubriques.reduce((n, r) => n + r.breves.length, 0)} articles dans ce numéro
          </div>
        </div>

        <div className="flex flex-col">
          {brief.items.map((item) => {
            const open = openItem === item.rank
            const meta = SEVERITY_META[item.severity]
            return (
              <div key={item.rank} className="border-t border-white/[0.08] last:border-b">
                <button
                  type="button"
                  onClick={() => setOpenItem(open ? null : item.rank)}
                  aria-expanded={open}
                  className="group flex w-full items-center gap-4 py-5 text-left"
                >
                  <span className="font-mono text-[12px] text-chalk-40">{item.rank}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-serif text-[15.5px] font-semibold leading-snug text-white transition-colors duration-200 group-hover:text-brand">
                      {item.label}
                    </span>
                    <span className="mt-1 block font-sans text-[11.5px] text-chalk-40">{item.domain}</span>
                  </span>
                  <span
                    className="shrink-0 rounded-full px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.08em]"
                    style={{ background: `${meta.color}22`, color: meta.color }}
                  >
                    {meta.label}
                  </span>
                  <span
                    aria-hidden
                    className={`shrink-0 text-[18px] text-brand transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>

                <div
                  className="grid transition-[grid-template-rows] duration-[400ms] ease-[cubic-bezier(.22,.68,0,1.2)]"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-5 pb-7 pl-8 sm:grid-cols-2">
                      <div>
                        <div className="eyebrow mb-1.5">Pourquoi ça compte sur ce marché</div>
                        <p className="m-0 body-sm">{item.why}</p>
                      </div>
                      <div>
                        <div className="eyebrow mb-1.5">Action recommandée</div>
                        <p className="m-0 body-sm">{item.action}</p>
                        <div className="mt-3 font-sans text-[11.5px] text-chalk-40">
                          Horizon estimé : {item.horizon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {brief.rubriques.length > 0 && (
          <>
            <div className="mb-5 mt-16 kicker">Les rubriques</div>
            <div className="flex flex-col gap-10">
              {brief.rubriques.map((r) => (
                <div key={r.name}>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                      {r.name}
                    </span>
                    <span className="hairline flex-1" />
                    <span className="font-sans text-[11px] text-chalk-40">
                      {r.breves.length === 0 ? "—" : r.breves.length}
                    </span>
                  </div>

                  {r.breves.length === 0 ? (
                    <p className="m-0 body-sm">
                      Rien à signaler cette semaine. Balayé : {r.empty}.
                    </p>
                  ) : (
                    <div className="flex flex-col gap-9">
                      {r.breves.map((b) => (
                        <div key={b.title}>
                          <h4 className="mb-2 font-serif text-[16px] font-semibold leading-snug text-white">
                            {b.title}
                          </h4>
                          <p className="mb-3 body-sm">{b.body}</p>
                          <div className="mb-3 border-l-2 border-brand/50 pl-4">
                            <div className="mb-1 font-sans text-[10.5px] font-semibold uppercase tracking-[0.12em] text-brand">
                              Ce que ça implique pour vous
                            </div>
                            <p className="m-0 font-sans text-[14px] leading-relaxed text-chalk-75">
                              {b.implication}
                            </p>
                          </div>
                          <div className="font-sans text-[11.5px] text-chalk-40">
                            SOURCE — {b.source}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {brief.agenda.length > 0 && (
          <>
            <div className="mb-5 mt-16 kicker">L&apos;agenda</div>
            <div className="flex flex-col divide-y divide-hair">
              {brief.agenda.map((a) => (
                <div key={a.date + a.what} className="grid gap-1 py-3.5 sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-5">
                  <div className="font-mono text-[12.5px] text-brand">{a.date}</div>
                  <div>
                    <div className="font-sans text-[14px] text-chalk-90">{a.what}</div>
                    <div className="font-sans text-[11.5px] text-chalk-40">{a.who}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {brief.figures.length > 0 && (
          <>
            <div className="mb-5 mt-16 kicker">Les chiffres de la semaine</div>
            <div className="grid gap-4 sm:grid-cols-2">
              {brief.figures.map((f) => (
                <div key={f.value + f.what} className="card card-hover px-5 py-5">
                  <div className="mb-1.5 font-serif text-[1.6rem] font-bold leading-none text-gradient">
                    {f.value}
                  </div>
                  <p className="mb-1.5 m-0 font-sans text-[13.5px] leading-relaxed text-chalk-75">
                    {f.what}
                  </p>
                  <div className="font-sans text-[11.5px] text-chalk-40">{f.source}</div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="card mt-16 border-l-2 border-l-brand px-7 py-7">
          <div className="mb-3 kicker">Ce qu&apos;il faut faire cette semaine</div>
          <p className="m-0 body-sm">{brief.todo}</p>
        </div>
      </div>
    </div>
  )
}

/** Suivi des sujets dans le temps — la vraie valeur ajoutée face à l'e-mail. */
export function ThreadTracker() {
  const stageIndex = (stage: string) => STAGES.indexOf(stage as (typeof STAGES)[number])

  return (
    <div className="flex flex-col gap-4">
      {THREADS.map((t, i) => (
        <Reveal key={t.title} delay={i * 60}>
          <div className="card card-hover px-6 py-6">
            <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="mb-1 font-serif text-[16px] font-bold leading-snug text-white">{t.title}</h3>
                <div className="font-sans text-[11.5px] text-chalk-40">
                  {t.domain} · détecté {t.firstSeen}
                </div>
              </div>
              <span
                className={[
                  "shrink-0 rounded-full border px-3 py-1 font-sans text-[10.5px] font-semibold uppercase tracking-[0.08em]",
                  t.progress === 100
                    ? "border-[#22c55e]/40 bg-[#22c55e]/10 text-[#22c55e]"
                    : "border-brand-hair bg-brand/10 text-brand",
                ].join(" ")}
              >
                {t.stage}
              </span>
            </div>

            <div className="meter mb-3">
              <div
                className="h-full rounded-full transition-[width] duration-700 ease-out"
                style={{
                  width: `${t.progress}%`,
                  background:
                    t.progress === 100
                      ? "#22c55e"
                      : "linear-gradient(90deg, #e63946, #ff1a1a)",
                }}
              />
            </div>

            <div className="mb-4 flex justify-between">
              {STAGES.map((s) => (
                <span
                  key={s}
                  className={`font-sans text-[10px] uppercase tracking-[0.06em] ${
                    stageIndex(t.stage) >= stageIndex(s) ? "text-chalk-65" : "text-chalk-40/50"
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>

            <p className="m-0 body-sm">{t.note}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
