export type Tier = {
  id: string
  name: string
  price: string
  cadence: string
  target: string
  featured?: boolean
  features: string[]
}

export const TIERS: Tier[] = [
  {
    id: "radar",
    name: "RADAR",
    price: "49€",
    cadence: "/mois",
    target: "Petites entreprises",
    features: [
      "1 marché suivi",
      "Le journal hebdomadaire du marché",
      "Alertes hors numéro quand ça ne peut pas attendre",
      "Rapport mensuel",
    ],
  },
  {
    id: "pro",
    name: "RADAR PRO",
    price: "199€",
    cadence: "/mois",
    target: "PME",
    featured: true,
    features: [
      "Jusqu'à 2 marchés suivis",
      "Les 7 rubriques complètes, agenda et chiffres",
      "Suivi des sujets jusqu'à leur résolution",
      "Acteurs structurants des marchés surveillés nommément",
      "Scénarios & roadmap 36 mois",
      "Archive complète des numéros",
    ],
  },
  {
    id: "advisory",
    name: "RADAR ADVISORY",
    price: "999€",
    cadence: "/mois",
    target: "IA + analyste humain",
    features: [
      "Jusqu'à 5 marchés suivis",
      "Un analyste applique chaque marché à votre entreprise",
      "Réunions régulières",
      "Audits ponctuels",
      "Recommandations propres à votre configuration",
    ],
  },
  {
    id: "enterprise",
    name: "RADAR ENTERPRISE",
    price: "5 000€+",
    cadence: "/mois",
    target: "Grandes entreprises",
    features: [
      "Tous les marchés couverts, en parallèle",
      "Marché sur mesure, créé pour vous",
      "Équipe dédiée",
      "Intégrations & API",
      "Analystes humains attitrés",
    ],
  },
]
