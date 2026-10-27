import Link from "next/link"
import { BRIEFS, SEVERITY_META } from "@/lib/brief-data"

/**
 * Aperçu de la newsletter telle qu'elle arrive dans la boîte mail.
 *
 * Même numéro d'illustration que le journal de /brief : l'e-mail en est la
 * version courte, celle qui se lit en dix minutes le lundi à 7h.
 */
export function NewsletterPreview({ showIntro = true }: { showIntro?: boolean }) {
  const b = BRIEFS[0]
  const une = b.items[0]
  const autres = b.items.slice(1, 4)
  const rubriquesActives = b.rubriques.filter((r) => r.breves.length > 0)

  return (
    <section className="section">
      <div className="shell-md">
        {showIntro && (
          <div className="mb-12 text-center">
            <div className="kicker mb-5">La newsletter</div>
            <h2 className="h-section mb-5">Voilà ce qui arrive dans votre boîte mail, chaque lundi.</h2>
            <p className="lede mx-auto max-w-[600px]">
              Le numéro RADAR de la semaine, tel que vous le recevez. Exemple
              illustratif sur un marché fictif.
            </p>
          </div>
        )}

        <div className="mx-auto max-w-[640px] overflow-hidden rounded-2xl border border-hair-strong bg-ink-soft shadow-[0_30px_80px_-30px_rgba(230,57,70,0.35)]">
          {/* En-tête de la boîte mail */}
          <div className="border-b border-hair px-6 py-5 font-sans">
            <div className="mb-3 flex items-center gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <div className="mb-1 text-[15px] font-semibold text-white">
              RADAR · {b.week} : {b.headline}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 text-[12px] text-chalk-55">
              <span>
                De : <span className="text-chalk-75">RADAR</span> · À : vous
              </span>
              <span>Lundi, 7h00</span>
            </div>
          </div>

          {/* Corps du mail */}
          <div className="bg-[#f6f3ee] px-7 py-8 font-sans text-[#17161a]">
            <div className="mb-6 flex items-baseline justify-between border-b border-[#17161a]/15 pb-4">
              <span className="font-serif text-[22px] font-bold tracking-[-0.02em]">
                <span className="text-[#e63946]">RADAR</span>
              </span>
              <span className="text-[11px] uppercase tracking-[0.14em] text-[#17161a]/55">
                {b.week} · {b.dateLabel}
              </span>
            </div>

            <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#e63946]">
              La une
            </div>
            <h3 className="mb-2 font-serif text-[22px] font-bold leading-snug">{b.headline}</h3>
            <p className="mb-4 text-[14px] leading-relaxed text-[#17161a]/75">{b.summary}</p>
            <div className="mb-7 rounded-lg border-l-[3px] border-[#e63946] bg-white px-4 py-3 text-[13px] leading-relaxed">
              <strong>{une.label}.</strong> {une.why}
              <div className="mt-1 text-[#17161a]/65">
                <span className="font-semibold text-[#e63946]">Action :</span> {une.action}
              </div>
            </div>

            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#17161a]/55">
              Dans ce numéro
            </div>
            <ul className="m-0 mb-7 flex list-none flex-col gap-2.5 p-0">
              {autres.map((i) => (
                <li key={i.rank} className="flex items-start gap-3 text-[13.5px] leading-snug">
                  <span
                    aria-hidden
                    className="mt-[5px] h-2 w-2 shrink-0 rounded-full"
                    style={{ background: SEVERITY_META[i.severity].color }}
                  />
                  <span>
                    <span className="mr-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#17161a]/50">
                      {i.domain}
                    </span>
                    {i.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#17161a]/55">
              Les rubriques
            </div>
            <div className="mb-7 flex flex-wrap gap-2">
              {b.rubriques.map((r) => (
                <span
                  key={r.name}
                  className="rounded-full border border-[#17161a]/20 px-3 py-1 text-[12px] text-[#17161a]/75"
                >
                  {r.name}
                  {r.breves.length > 0 && <span className="ml-1.5 text-[#e63946]">{r.breves.length}</span>}
                </span>
              ))}
            </div>
            <p className="mb-7 text-[13px] leading-relaxed text-[#17161a]/70">
              {rubriquesActives.length} rubriques actives cette semaine ; les autres sont
              écrites quand même, avec ce qui a été balayé.
            </p>

            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#17161a]/55">
              Agenda des échéances
            </div>
            <ul className="m-0 mb-7 flex list-none flex-col gap-2 p-0">
              {b.agenda.slice(0, 3).map((a) => (
                <li key={a.date} className="flex gap-3 text-[13px] leading-snug">
                  <span className="w-[96px] shrink-0 font-mono text-[12px] font-semibold text-[#e63946]">
                    {a.date}
                  </span>
                  <span>{a.what}</span>
                </li>
              ))}
            </ul>

            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#17161a]/55">
              Les chiffres de la semaine
            </div>
            <div className="mb-7 grid grid-cols-2 gap-3">
              {b.figures.slice(0, 2).map((f) => (
                <div key={f.value} className="rounded-lg bg-white px-4 py-3">
                  <div className="font-serif text-[22px] font-bold text-[#e63946]">{f.value}</div>
                  <div className="text-[12px] leading-snug text-[#17161a]/70">{f.what}</div>
                </div>
              ))}
            </div>

            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#17161a]/55">
              L&apos;action de la semaine
            </div>
            <p className="mb-8 text-[13.5px] leading-relaxed">{b.todo.split(". ")[0]}.</p>

            <Link
              href="/brief"
              className="inline-block rounded-full bg-[#e63946] px-6 py-3 text-[13px] font-semibold text-white no-underline"
            >
              Lire le numéro complet →
            </Link>

            <div className="mt-8 border-t border-[#17161a]/15 pt-4 text-[11px] leading-relaxed text-[#17161a]/50">
              Vous recevez ce numéro car vous suivez ce marché sur RADAR · 20€/mois ·
              Résiliable à tout moment.
            </div>
          </div>
        </div>

        {showIntro && (
          <div className="mt-8 text-center">
            <Link href="/pricing" className="btn-primary">20€/mois · Recevoir le numéro</Link>
          </div>
        )}
      </div>
    </section>
  )
}
