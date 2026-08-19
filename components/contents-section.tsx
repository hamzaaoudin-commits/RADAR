import { Reveal } from "./reveal"

const CONTENTS = [
  { n: "01", t: "Un marché", d: "RADAR ne surveille pas tout pour tout le monde. Un marché à la fois, avec sa chaîne de valeur, ses acteurs structurants, ses obligations et son vocabulaire." },
  { n: "07", t: "Les radars", d: "Sept domaines balayés chaque semaine sur ce marché — y compris ceux qui n'ont rien donné, qui sont déclarés vides plutôt que remplis." },
  { n: "05", t: "Minutes par semaine", d: "Le changement majeur, l'opportunité, le risque, ce que font les acteurs du marché, ce que vous devriez faire. Pas cinquante newsletters à lire." },
  { n: "36", t: "Mois de visibilité", d: "Une timeline en quatre horizons — de l'imminent au scénario stratégique — pour cesser de subir et commencer à anticiper." },
]

export function ContentsSection() {
  return (
    <section id="produit" className="section">
      <div className="shell-lg">
        <div className="mb-12 text-center">
          <div className="kicker mb-5">Ce que RADAR couvre</div>
          <h2 className="h-section">Un marché, surveillé en profondeur.</h2>
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
