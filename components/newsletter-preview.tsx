import Link from "next/link"
import { BRIEFS, SEVERITY_META } from "@/lib/brief-data"

/**
 * Aperçu de la newsletter telle qu'elle arrive dans la boîte mail.
 *
 * C'est le numéro réel de la semaine 43 (marché : expertise comptable), en
 * version e-mail : la une, les cinq sujets classés, un titre par rubrique,
 * l'agenda, les chiffres, l'action de la semaine et les sources. Le journal
 * complet, feuilletable, vit sur /brief.
 */
const label = "text-[10px] font-bold uppercase tracking-[0.16em] text-[#17161a]/50"

export function NewsletterPreview() {
  const b = BRIEFS[0]
  const une = b.items[0]
  const suite = b.items.slice(1)
  const nbArticles = b.rubriques.reduce((n, r) => n + r.breves.length, 0)

  return (
    <section className="section">
      <div className="shell-md">
        <div className="mb-12 text-center">
          <div className="kicker mb-5">La newsletter</div>
          <h2 className="h-section mb-5">Voilà ce qui arrive dans votre boîte mail, chaque lundi.</h2>
          <p className="lede mx-auto max-w-[620px]">
            Ci-dessous, le vrai numéro de la {b.week.toLowerCase()} ({b.dateLabel}), marché :{" "}
            {b.market?.toLowerCase()}. Chaque information renvoie à sa source.
          </p>
        </div>

        <div className="mx-auto max-w-[680px] overflow-hidden rounded-2xl border border-hair-strong bg-ink-soft shadow-[0_30px_80px_-30px_rgba(230,57,70,0.35)]">
          {/* En-tête de la boîte mail */}
          <div className="border-b border-hair px-6 py-5 font-sans">
            <div className="mb-3 flex items-center gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <div className="mb-1 text-[15px] font-semibold leading-snug text-white">
              RADAR · {b.week} : {b.headline}
            </div>
            <div className="mb-2 text-[12.5px] leading-snug text-chalk-55">
              {nbArticles} articles, 7 rubriques, 10 minutes de lecture. La une : {une.label.toLowerCase()}.
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 text-[12px] text-chalk-55">
              <span>
                De : <span className="text-chalk-75">RADAR</span> · À : vous
              </span>
              <span>Lundi, 7h00</span>
            </div>
          </div>

          {/* Corps du mail */}
          <div className="bg-[#f6f3ee] px-7 py-8 font-sans text-[#17161a] sm:px-9">
            <div className="mb-7 flex items-baseline justify-between gap-3 border-b-2 border-[#17161a] pb-4">
              <span className="font-serif text-[26px] font-bold leading-none tracking-[-0.02em] text-[#e63946]">
                RADAR
              </span>
              <span className="text-right text-[11px] uppercase leading-snug tracking-[0.14em] text-[#17161a]/60">
                {b.week} · {b.dateLabel}
                <br />
                {b.market}
              </span>
            </div>

            {/* La une */}
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full bg-[#e63946] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                La une
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#17161a]/50">
                {une.domain} · {SEVERITY_META[une.severity].label}
              </span>
            </div>
            <h3 className="mb-3 font-serif text-[25px] font-bold leading-[1.2] tracking-[-0.01em]">
              {b.headline}
            </h3>
            <p className="mb-4 text-[14.5px] leading-[1.65] text-[#17161a]/80">{b.summary}</p>
            <div className="mb-8 rounded-lg border-l-[3px] border-[#e63946] bg-white px-4 py-3.5 text-[13.5px] leading-relaxed">
              <div className="mb-1">
                <strong>Pourquoi c&apos;est la une.</strong> {une.why}
              </div>
              <div className="text-[#17161a]/70">
                <span className="font-semibold text-[#e63946]">Action :</span> {une.action}
              </div>
            </div>

            {/* Les cinq sujets classés */}
            <div className={`${label} mb-3`}>Les cinq sujets de la semaine</div>
            <ol className="m-0 mb-8 flex list-none flex-col gap-3 p-0">
              {b.items.map((i) => (
                <li key={i.rank} className="flex items-start gap-3 text-[13.5px] leading-snug">
                  <span className="mt-[2px] w-5 shrink-0 font-mono text-[12px] font-semibold text-[#17161a]/40">
                    {i.rank}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="font-semibold">{i.label}</span>
                    <span className="mt-0.5 flex items-center gap-2 text-[11.5px] text-[#17161a]/55">
                      <span
                        aria-hidden
                        className="h-[7px] w-[7px] rounded-full"
                        style={{ background: SEVERITY_META[i.severity].color }}
                      />
                      {i.domain} · {SEVERITY_META[i.severity].label} · horizon {i.horizon}
                    </span>
                  </span>
                </li>
              ))}
            </ol>

            {/* Les rubriques */}
            <div className={`${label} mb-3`}>Les sept rubriques</div>
            <div className="mb-8 divide-y divide-[#17161a]/10 border-y border-[#17161a]/10">
              {b.rubriques.map((r) => (
                <div key={r.name} className="flex items-start gap-3 py-2.5 text-[13px] leading-snug">
                  <span className="w-[104px] shrink-0 text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#e63946]">
                    {r.name}
                  </span>
                  <span className="min-w-0 flex-1">
                    {r.breves.length > 0 ? (
                      r.breves.map((x) => (
                        <span key={x.title} className="mb-1 block last:mb-0">
                          {x.title}
                        </span>
                      ))
                    ) : (
                      <span className="text-[#17161a]/55">Rien à signaler cette semaine.</span>
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Agenda */}
            <div className={`${label} mb-3`}>L&apos;agenda des échéances</div>
            <ul className="m-0 mb-8 flex list-none flex-col gap-2.5 p-0">
              {b.agenda.map((a) => (
                <li key={a.date + a.what} className="flex gap-3 text-[13px] leading-snug">
                  <span className="w-[108px] shrink-0 font-mono text-[12px] font-semibold text-[#e63946]">
                    {a.date}
                  </span>
                  <span>
                    {a.what}
                    <span className="text-[#17161a]/50"> · {a.who}</span>
                  </span>
                </li>
              ))}
            </ul>

            {/* Chiffres */}
            <div className={`${label} mb-3`}>Les chiffres de la semaine</div>
            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {b.figures.map((f) => (
                <div key={f.value} className="rounded-lg bg-white px-4 py-3.5">
                  <div className="font-serif text-[26px] font-bold leading-none text-[#e63946]">{f.value}</div>
                  <div className="mt-1.5 text-[12.5px] leading-snug text-[#17161a]/80">{f.what}</div>
                  <div className="mt-1.5 text-[10.5px] leading-snug text-[#17161a]/45">{f.source}</div>
                </div>
              ))}
            </div>

            {/* Action */}
            <div className="mb-8 rounded-lg bg-[#17161a] px-5 py-5 text-white">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#e63946]">
                L&apos;action de la semaine
              </div>
              <p className="m-0 text-[14px] leading-[1.65] text-white/90">{b.todo}</p>
            </div>

            <Link
              href="/brief"
              className="mb-8 inline-block rounded-full bg-[#e63946] px-6 py-3 text-[13px] font-semibold text-white no-underline"
            >
              Lire les {nbArticles} articles en entier →
            </Link>

            {/* Sources */}
            {b.sources && (
              <>
                <div className={`${label} mb-2`}>Sources du numéro</div>
                <ul className="m-0 mb-6 list-none p-0 text-[11.5px] leading-relaxed text-[#17161a]/60">
                  {b.sources.map((s) => (
                    <li key={s.url} className="mb-1">
                      <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-[#17161a]/70 underline">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="border-t border-[#17161a]/15 pt-4 text-[11px] leading-relaxed text-[#17161a]/50">
              Vous recevez ce numéro car vous suivez le marché « {b.market?.toLowerCase()} » sur RADAR ·
              20€/mois · Résiliable à tout moment depuis votre espace abonné.
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/pricing" className="btn-primary">20€/mois · Recevoir le numéro</Link>
        </div>
      </div>
    </section>
  )
}
