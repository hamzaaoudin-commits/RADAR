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

export type Breve = {
  title: string
  body: string
  source: string
}

export type Rubrique = {
  name: string
  breves: Breve[]
  /** Ce qui a été balayé quand la rubrique n'a rien donné. */
  empty?: string
}

export type AgendaEntry = { date: string; what: string; who: string }

export type KeyFigure = { value: string; what: string; source: string }

export type Brief = {
  slug: string
  week: string
  dateLabel: string
  headline: string
  summary: string
  /** La une, traitée en entier. */
  items: BriefItem[]
  rubriques: Rubrique[]
  agenda: AgendaEntry[]
  figures: KeyFigure[]
  todo: string
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
    todo:
      "Traitez d'abord la une : tant que vous n'avez pas chiffré ce que ce mouvement coûte chez vous, aucun des autres sujets n'est décidable. Deux points demanderont une décision plus tard, sans urgence cette semaine : le nouveau canal de distribution, dont les conditions ne sont pas publiées, et la consultation réglementaire, ouverte jusqu'en mars.",
    rubriques: [
      {
        name: "IA",
        breves: [
          {
            title: "Le coût d'inférence franchit le seuil de rentabilité du secteur",
            body: "La baisse annoncée le 14 août rend rentables des automatisations abandonnées en 2025 pour cause de coût. Les tâches répétitives à faible valeur sont les premières concernées.",
            source: "Fournisseur, page de tarification, 14 août",
          },
          {
            title: "Un outil métier intègre l'analyse automatique des dossiers",
            body: "L'éditeur a ouvert la fonction le 12 août à ses clients existants, sans surcoût annoncé pour l'instant. La facturation de la fonction reste à surveiller au renouvellement.",
            source: "Éditeur, note de version, 12 août",
          },
        ],
      },
      {
        name: "Technologies",
        breves: [],
        empty:
          "annonces d'infrastructure des fournisseurs de la filière, dépôts de brevets, documentations techniques, normes en cours d'adoption",
      },
      {
        name: "Réglementation",
        breves: [
          {
            title: "Une obligation de transparence sectorielle entre en consultation",
            body: "Le texte en préparation touche les supports commerciaux de toute la filière. La consultation se clôt à la mi-mars ; l'exposition dépend de vos supports existants.",
            source: "Autorité compétente, avis de consultation, 13 août",
          },
          {
            title: "Le calendrier d'application est confirmé sans report",
            body: "Les demandes de décalage portées par la filière ont été écartées le 15 août. Les entreprises qui attendaient un report doivent reprendre leur calendrier de conformité.",
            source: "Autorité compétente, réponse publiée le 15 août",
          },
        ],
      },
      {
        name: "Marché",
        breves: [
          {
            title: "Un nouveau canal de distribution s'ouvre aux entreprises du secteur",
            body: "Un acteur adjacent ouvre sa plateforme aux partenaires depuis le 11 août. Les places sont attribuées par ordre d'inscription : la position se prend tôt ou pas du tout.",
            source: "Plateforme, communiqué du 11 août",
          },
        ],
      },
      {
        name: "Concurrence",
        breves: [
          {
            title: "Un concurrent direct lance une offre de conseil automatisé",
            body: "Le prix d'appel est inférieur d'environ 40 % à la moyenne pratiquée sur le segment le mieux margé. L'offre a été annoncée le 13 août, sans date de disponibilité générale.",
            source: "Concurrent, communiqué du 13 août",
          },
          {
            title: "Deux acteurs de taille moyenne rapprochent leurs activités",
            body: "L'opération a été rendue publique le 12 août. Les intégrations dégradent presque toujours le service pendant deux à trois trimestres : des clients se libèrent à court terme.",
            source: "Acteurs concernés, communiqué du 12 août",
          },
        ],
      },
      {
        name: "Opportunités",
        breves: [
          {
            title: "Un dispositif d'aide à la modernisation rouvre pour six mois",
            body: "L'enveloppe cible les structures de moins de cinquante salariés et s'instruit au fil de l'eau jusqu'à épuisement. Le dépôt est ouvert depuis le 12 août.",
            source: "Organisme instructeur, 12 août",
          },
        ],
      },
      {
        name: "Risques",
        breves: [
          {
            title: "Une dépendance de filière modifie ses conditions d'accès",
            body: "Le changement est entré en vigueur le 15 août, sans préavis. Aucune alternative substituable n'existe à ce jour sur ce maillon de la chaîne.",
            source: "Fournisseur, documentation, version du 15 août",
          },
        ],
      },
    ],
    agenda: [
      { date: "30 août", what: "Fin de la période couverte par le dispositif d'urgence", who: "structures de moins de 250 salariés" },
      { date: "1er septembre", what: "Entrée en vigueur de l'obligation sectorielle", who: "tout le marché" },
      { date: "15 septembre", what: "Clôture du premier appel du dispositif de modernisation", who: "moins de 50 salariés" },
      { date: "1er octobre", what: "Application de la nouvelle grille tarifaire du fournisseur", who: "tout le marché" },
      { date: "15 mars", what: "Clôture de la consultation sur la transparence", who: "producteurs de supports commerciaux" },
    ],
    figures: [
      { value: "−40 %", what: "prix d'appel du nouvel entrant sur le segment le mieux margé", source: "Concurrent, 13 août" },
      { value: "6–18 mois", what: "horizon d'adoption estimé des agents autonomes dans la filière", source: "Étude de filière, 10 août" },
      { value: "50 salariés", what: "seuil d'éligibilité au dispositif de modernisation rouvert", source: "Organisme instructeur, 12 août" },
      { value: "3 trimestres", what: "durée moyenne de dégradation de service après un rapprochement", source: "Observatoire sectoriel, août" },
    ],
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
    todo: "Numéro archivé — les blocs agenda et chiffres ne sont pas conservés au-delà de quatre semaines dans cette démonstration.",
    rubriques: [],
    agenda: [],
    figures: [],

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
    todo: "Numéro archivé — les blocs agenda et chiffres ne sont pas conservés au-delà de quatre semaines dans cette démonstration.",
    rubriques: [],
    agenda: [],
    figures: [],

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
