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
    id: "free",
    name: "RADAR FREE",
    price: "0€",
    cadence: "gratuit",
    target: "Pour découvrir",
    features: [
      "Radar d'entreprise, version limitée",
      "1 domaine surveillé",
      "Brief mensuel",
    ],
  },
  {
    id: "radar",
    name: "RADAR",
    price: "49€",
    cadence: "/mois",
    target: "Petites entreprises",
    features: [
      "Radar personnalisé complet",
      "Alertes en temps réel",
      "Briefing hebdomadaire — 5 minutes",
      "Rapport mensuel",
      "Recommandations basiques",
      "Score de préparation",
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
      "Tout RADAR, plus :",
      "Surveillance approfondie des 7 radars",
      "Suivi concurrents nommés",
      "Veille réglementaire dédiée",
      "Scénarios & roadmap 36 mois",
      "Recommandations avancées",
    ],
  },
  {
    id: "advisory",
    name: "RADAR ADVISORY",
    price: "999€",
    cadence: "/mois",
    target: "IA + analyste humain",
    features: [
      "Tout RADAR PRO, plus :",
      "Conseil stratégique",
      "Réunions régulières",
      "Audits ponctuels",
      "Recommandations personnalisées",
      "Accompagnement transformation IA",
    ],
  },
  {
    id: "enterprise",
    name: "RADAR ENTERPRISE",
    price: "5 000€+",
    cadence: "/mois",
    target: "Grandes entreprises",
    features: [
      "Intelligence personnalisée à l'échelle",
      "Équipe dédiée",
      "Intégrations & API",
      "Dashboards sur-mesure",
      "Analystes humains attitrés",
      "Surveillance mondiale",
    ],
  },
]
