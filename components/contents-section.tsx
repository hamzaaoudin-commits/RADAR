import { Reveal } from "./reveal"

const CONTENTS = [
  { n: "01", t: "La une", d: "Le mouvement le plus important de la semaine, traité en entier : le fait, ce qu'il change chez vous avec son chiffre, et la seule chose à faire d'ici lundi prochain." },
  { n: "07", t: "Rubriques", d: "IA, technologies, réglementation, marché, concurrence, opportunités, risques. Une rubrique sans actualité l'écrit, plutôt que de disparaître — vous savez ainsi que vous n'avez rien manqué." },
  { n: "15", t: "Articles au maximum", d: "Chacun en trois temps : le titre qui porte le fait, le développement avec ses modalités et ses chiffres, puis ce que ça implique concrètement pour une entreprise de votre marché." },
  { n: "10", t: "Minutes de lecture", d: "Vous parcourez les titres, vous vous arrêtez sur ce qui vous concerne. Plus l'agenda des échéances à venir et les chiffres publiés cette semaine." },
]

export function ContentsSection() {
  return (
    <section id="produit" className="section">
      <div className="shell-lg">
        <div className="mb-12 text-center">
          <div className="kicker mb-5">Le journal</div>
          <h2 className="h-section">Ce que vous recevez chaque lundi.</h2>
        </div>

        <div className="grid-auto">
          {CONTENTS.map((c, i) => (
            <Reveal key={c.t} delay={i * 90}>
              <div className="card card-hover h-full px-7 py-8">
                <div className="mb-3.5 font-serif text-[2.25rem] font-bold leading-none text-brand">{c.n}</div>
                <h3 className="mb-2.5 font-serif text-[1.3rem] font-bold">{c.t}</h3>
                <p className="body-sm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
