/**
 * Données d'exemple du brief hebdomadaire.
 *
 * Rien ici n'est réel : ce sont des briefs d'illustration portant sur un marché
 * fictif, destinés à montrer la forme du produit. Le site l'annonce
 * explicitement en tête de la page /brief. Règle tenue partout : jamais un
 * chiffre inventé présenté comme un résultat réel.
 */

export type Severity = "critical" | "important" | "watch"

export type BriefItem = {
  rank: string
  label: string
  domain: string
  severity: Severity
  why: string
  action: string
  horizon: string
}

export type TrackedThread = {
  title: string
  domain: string
  /** Position sur la timeline, de 0 (détecté) à 100 (traité). */
  progress: number
  stage: "Détecté" | "Confirmé" | "En test" | "Décidé" | "Traité"
  firstSeen: string
  note: string
}

export type Brief = {
  slug: string
  week: string
  dateLabel: string
  headline: string
  summary: string
  items: BriefItem[]
  read: boolean
}

export const SEVERITY_META: Record<Severity, { label: string; color: string }> = {
  critical: { label: "Critique", color: "#ff1a1a" },
  important: { label: "Important", color: "#f59e0b" },
  watch: { label: "À surveiller", color: "#eab308" },
}

export const STAGES = ["Détecté", "Confirmé", "En test", "Décidé", "Traité"] as const

export const BRIEFS: Brief[] = [
  {
    slug: "s33",
    week: "Semaine 33",
    dateLabel: "11 — 17 août",
    headline: "Un concurrent direct passe au conseil automatisé",
    summary:
      "Le mouvement le plus important de la semaine ne vient pas d'un fournisseur de technologie mais d'un concurrent : il déplace son offre vers un modèle que vos clients vont comparer au vôtre dès la rentrée.",
    read: false,
    items: [
      {
        rank: "01",
        label: "Un concurrent direct lance une offre de conseil automatisé",
        domain: "Concurrence",
        severity: "critical",
        why: "Il attaque le segment le mieux margé du marché, avec un prix d'appel 40 % sous la moyenne pratiquée.",
        action: "Préparer un argumentaire de différenciation avant la rentrée, sur ce que l'automatisation ne couvre pas.",
        horizon: "0–3 mois",
      },
      {
        rank: "02",
        label: "Nouvelle capacité d'agent autonome chez un fournisseur majeur",
        domain: "IA",
        severity: "important",
        why: "Sur ce marché, le traitement des demandes entrantes devient automatisable à coût marginal.",
        action: "Tester sur un flux pilote non critique pendant sept jours.",
        horizon: "6–18 mois",
      },
      {
        rank: "03",
        label: "Obligation de transparence sectorielle en consultation",
        domain: "Réglementation",
        severity: "important",
        why: "Le texte en préparation touche les supports commerciaux de toute la filière.",
        action: "Faire vérifier votre exposition par votre conseil habituel.",
        horizon: "3–6 mois",
      },
      {
        rank: "04",
        label: "Un nouveau canal de distribution s'ouvre sur votre segment",
        domain: "Marché",
        severity: "watch",
        why: "Un acteur adjacent ouvre sa plateforme aux entreprises du marché — position à prendre tôt ou pas du tout.",
        action: "Évaluer le coût d'entrée avant que le canal ne se remplisse.",
        horizon: "3–6 mois",
      },
      {
        rank: "05",
        label: "Baisse du coût d'inférence des modèles",
        domain: "IA",
        severity: "watch",
        why: "Ce qui était trop cher à automatiser il y a six mois redevient rentable pour tout le marché.",
        action: "Ressortir la liste des automatisations abandonnées pour cause de coût.",
        horizon: "0–3 mois",
      },
    ],
  },
  {
    slug: "s32",
    week: "Semaine 32",
    dateLabel: "4 — 10 août",
    headline: "Consolidation en cours sur votre segment",
    summary:
      "Deux acteurs de taille moyenne fusionnent. À court terme, cela libère des clients mécontents ; à moyen terme, cela crée un concurrent de taille intermédiaire sur le marché.",
    read: true,
    items: [
      {
        rank: "01",
        label: "Fusion de deux acteurs de taille moyenne",
        domain: "Concurrence",
        severity: "important",
        why: "Les intégrations post-fusion dégradent presque toujours le service pendant deux à trois trimestres.",
        action: "Identifier les comptes en friction et préparer une approche ciblée.",
        horizon: "0–3 mois",
      },
      {
        rank: "02",
        label: "Durcissement des règles de démarchage",
        domain: "Réglementation",
        severity: "important",
        why: "Les séquences de prospection sortantes utilisées sur ce marché sont concernées.",
        action: "Faire relire vos séquences par votre conseil.",
        horizon: "0–3 mois",
      },
      {
        rank: "03",
        label: "Nouvel entrant financé sur une niche adjacente",
        domain: "Concurrence",
        severity: "watch",
        why: "Niche adjacente aujourd'hui, segment voisin dans douze mois — trajectoire classique.",
        action: "Mettre l'acteur sous surveillance nommée.",
        horizon: "6–12 mois",
      },
    ],
  },
  {
    slug: "s31",
    week: "Semaine 31",
    dateLabel: "28 juillet — 3 août",
    headline: "Le coût d'automatisation passe sous votre seuil de rentabilité",
    summary:
      "Rien de spectaculaire cette semaine, mais un seuil économique a été franchi : plusieurs tâches que vous aviez renoncé à automatiser redeviennent rentables.",
    read: true,
    items: [
      {
        rank: "01",
        label: "Seuil de rentabilité de l'automatisation franchi",
        domain: "IA",
        severity: "important",
        why: "Le calcul qui rendait l'automatisation non rentable sur ce marché en 2025 ne tient plus.",
        action: "Refaire le calcul sur les trois tâches les plus répétitives de votre métier.",
        horizon: "0–3 mois",
      },
      {
        rank: "02",
        label: "Évolution des attentes clients sur les délais de réponse",
        domain: "Comportement",
        severity: "watch",
        why: "La norme implicite du secteur se resserre — sans annonce, mais mesurable.",
        action: "Comparer votre délai moyen actuel à la nouvelle norme du marché.",
        horizon: "3–6 mois",
      },
    ],
  },
]

export const THREADS: TrackedThread[] = [
  {
    title: "Offre de conseil automatisé d'un concurrent direct",
    domain: "Concurrence",
    progress: 20,
    stage: "Confirmé",
    firstSeen: "Semaine 33",
    note: "Signalé cette semaine. Argumentaire de différenciation à préparer avant la rentrée.",
  },
  {
    title: "Agents autonomes sur le traitement des demandes entrantes",
    domain: "IA",
    progress: 60,
    stage: "En test",
    firstSeen: "Semaine 29",
    note: "Pilote lancé sur un flux non critique. Premiers retours attendus semaine 35.",
  },
  {
    title: "Obligation de transparence sectorielle",
    domain: "Réglementation",
    progress: 40,
    stage: "Confirmé",
    firstSeen: "Semaine 30",
    note: "Texte toujours en consultation. Exposition à faire vérifier par un conseil.",
  },
  {
    title: "Durcissement des règles de démarchage",
    domain: "Réglementation",
    progress: 100,
    stage: "Traité",
    firstSeen: "Semaine 32",
    note: "Séquences de prospection relues et corrigées. Dossier clos.",
  },
  {
    title: "Seuil de rentabilité de l'automatisation",
    domain: "IA",
    progress: 80,
    stage: "Décidé",
    firstSeen: "Semaine 31",
    note: "Trois tâches retenues pour automatisation au T4.",
  },
  {
    title: "Nouveau canal de distribution sur le segment",
    domain: "Marché",
    progress: 20,
    stage: "Confirmé",
    firstSeen: "Semaine 33",
    note: "Coût d'entrée à évaluer avant saturation du canal.",
  },
]
