/**
 * Numéro de la semaine 43 (19 — 25 octobre 2026), marché : expertise comptable.
 *
 * Chaque information renvoie à une source datée (liste `sources`). Règle tenue
 * partout : un montant que la source ne publie pas est écrit « non publié »,
 * jamais estimé.
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

/**
 * Visuel attaché à un article.
 *
 * Chaque type existe pour expliquer une forme d'information précise, et non
 * pour décorer : un écart de prix se lit en barres comparées, un seuil franchi
 * se lit sur un axe, une échéance se lit sur une frise, un remplissage se lit
 * en jauge. Un article sans visuel utile n'en porte pas.
 */
export type Visual =
  | {
      kind: "compare"
      /** Barres comparées : écart de prix, de coût, de part. */
      unit?: string
      items: { label: string; value: number; display: string; accent?: boolean }[]
      note?: string
    }
  | {
      kind: "threshold"
      /** Franchissement d'un seuil : avant/après contre une ligne de référence. */
      axisLabel: string
      thresholdLabel: string
      threshold: number
      points: { label: string; value: number; display: string }[]
      note?: string
    }
  | {
      kind: "timeline"
      /** Frise d'échéances, avec ou sans période transitoire. */
      points: { date: string; label: string; state: "past" | "now" | "future" | "deadline" }[]
      note?: string
    }
  | {
      kind: "gauge"
      /** Remplissage : places prises, enveloppe consommée, quota. */
      pct: number
      centerLabel: string
      caption: string
      note?: string
    }
  | {
      kind: "flow"
      /** Enchaînement d'états : fusion, bascule, chaîne de dépendance. */
      steps: { label: string; sub?: string; accent?: boolean }[]
      note?: string
    }

export type Breve = {
  title: string
  /** Le corps développé de l'article : le fait, ses modalités, ses chiffres. */
  body: string
  /** Ce que ça implique pour une entreprise du marché. Jamais une action datée. */
  implication: string
  source: string
  visual?: Visual
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
  /** Marché couvert par ce numéro. */
  market?: string
  /** Sources du numéro, avec lien. */
  sources?: { label: string; url: string }[]
}

export const SEVERITY_META: Record<Severity, { label: string; color: string }> = {
  critical: { label: "Critique", color: "#ff1a1a" },
  important: { label: "Important", color: "#f59e0b" },
  watch: { label: "À surveiller", color: "#eab308" },
}

export const STAGES = ["Détecté", "Confirmé", "En test", "Décidé", "Traité"] as const

export const BRIEFS: Brief[] = [
  {
    slug: "s43",
    week: "Semaine 43",
    dateLabel: "19 — 25 octobre 2026",
    market: "Expertise comptable",
    read: false,
    headline: "Le budget 2027 prend du retard : le vote des recettes passe au 3 novembre",
    summary:
      "Le vote de la partie recettes, prévu le 20 octobre, a été reporté au 3 novembre : à la fin de la séance du 19, les députés n'avaient examiné que 15 articles sur 58. Pendant ce temps, la facture électronique entre dans sa phase d'exploitation (75 % des assujettis à la TVA ont désigné une plateforme) et la profession voisine des avocats lance sa propre plateforme d'IA souveraine.",
    todo:
      "Ne figez aucun conseil de clôture qui repose sur une mesure du projet de budget avant le 3 novembre : préparez deux versions, avec et sans la mesure. En parallèle, listez les clients qui n'ont pas encore désigné de plateforme de réception : ce sont les 25 % restants, et la phase d'accompagnement de l'administration n'est pas un report. Enfin, demandez à chacun de vos prestataires web de confirmer que les correctifs PHP du 21 octobre sont appliqués.",
    sources: [
      { label: "NosParlementaires — calendrier du budget 2027 (mis à jour le 24 oct.)", url: "https://nosparlementaires.fr/actualites/budget-2027-calendrier-assemblee-cinq-semaines" },
      { label: "KPMG — Publication du PLF 2027 (2 oct.)", url: "https://kpmg.com/av/fr/avocats/eclairages/2026/10/publication-du-plf-2027.html" },
      { label: "Legifiscal — Amendements PLF 2027 adoptés par les députés (21 oct.)", url: "https://www.legifiscal.fr/actualites-fiscales/4693-amendements-plf-2027-adoptes-deputes-suite.html" },
      { label: "Village de la Justice — Facturation électronique au 1er septembre 2026 (mis à jour le 9 oct.)", url: "https://www.village-justice.com/articles/facturation-electronique-1er-septembre-2026-que-tout-cabinet-doit-avoir-fait,58836.html" },
      { label: "Observatoire de la facturation électronique (mis à jour le 25 oct.)", url: "https://comparateur-efacturation.fr/guide/observatoire-facturation-electronique-2026" },
      { label: "CFNEWS — Numeris porte le M&A à son actif (13 oct.)", url: "https://www.cfnews.net/L-actualite/Build-up/Numeris-porte-le-M-A-a-son-actif-747800" },
      { label: "CFNEWS — Audit CPA en ordre de bataille pour tripler de taille (8 oct.)", url: "https://www.cfnews.net/L-actualite/Dette/Operations/Audit-CPA-en-ordre-de-bataille-pour-tripler-de-taille-745153" },
      { label: "Le Brief IA des experts-comptables, édition du 26 octobre (Avocat+, Cegid, PHP, BILL/Visa, PwC, Shaw)", url: "https://insignalebriefia.substack.com/p/le-brief-ia-des-experts-comptables-a44" },
    ],
    items: [
      {
        rank: "01",
        label: "Budget 2027 : le vote des recettes est reporté au 3 novembre",
        domain: "Réglementation",
        severity: "critical",
        why: "Aucune mesure fiscale du projet n'est acquise : 43 articles et plus de 2 600 amendements restent à examiner, et le texte peut encore être rejeté.",
        action: "Préparer deux versions de chaque conseil de clôture, avec et sans la mesure, et ne rien figer avant le 3 novembre.",
        horizon: "0–3 mois",
      },
      {
        rank: "02",
        label: "Facture électronique : 75 % des assujettis ont désigné une plateforme",
        domain: "Marché",
        severity: "important",
        why: "La réception est obligatoire depuis le 1er septembre ; l'émission arrive pour les PME le 1er septembre 2027, avec des amendes relevées à 50 € par facture.",
        action: "Identifier les clients sans plateforme désignée et planifier leur raccordement avant la fin de l'année.",
        horizon: "0–3 mois",
      },
      {
        rank: "03",
        label: "Les avocats lancent Avocat+, une plateforme d'IA hébergée en France",
        domain: "IA",
        severity: "watch",
        why: "Une profession réglementée voisine obtient une plateforme de branche, avec garantie d'hébergement et de non-entraînement : la question se posera pour la vôtre.",
        action: "Vérifier où vont les données de vos propres outils d'IA et si elles servent à entraîner les modèles.",
        horizon: "6–18 mois",
      },
      {
        rank: "04",
        label: "Deux cabinets parisiens accélèrent avec des capitaux",
        domain: "Concurrence",
        severity: "important",
        why: "Numeris (350 collaborateurs, adossé à un fonds) rachète un cabinet de conseil en M&A ; Audit CPA se tourne vers le capital-investissement pour tripler de taille.",
        action: "Évaluer ce que vos clients dirigeants peuvent attendre en conseil de cession et de transmission.",
        horizon: "3–6 mois",
      },
      {
        rank: "05",
        label: "Transmission : le « Pacte Papin » double l'abattement des dirigeants cédants",
        domain: "Opportunités",
        severity: "watch",
        why: "Le projet de loi prévoit, pour les cessions de 2027 à 2029, un abattement fixe porté de 500 000 € à 1 M€ — s'il est voté.",
        action: "Repérer dans votre portefeuille les dirigeants à moins de trois ans d'une cession.",
        horizon: "6–18 mois",
      },
    ],
    rubriques: [
      {
        name: "IA",
        breves: [
          {
            title: "Les avocats lancent Avocat+, une plateforme d'IA hébergée en France",
            body: "Le Conseil national des barreaux a annoncé le 23 octobre Avocat+, développé avec le Legal Data Space. La plateforme propose dix assistants spécialisés en droit français, soit près de 50 préconfigurés. Selon le CNB, les modèles tournent sur une infrastructure hébergée en France et les documents déposés ne servent pas à les entraîner. L'hébergeur, les fournisseurs de modèles et les tarifs ne sont pas publiés.",
            implication: "Une profession réglementée voisine obtient une plateforme de branche, avec deux engagements que vos clients et vos collaborateurs sauront désormais nommer : l'hébergement en France et la non-réutilisation des documents. Ce que vous utilisez aujourd'hui doit pouvoir répondre à ces deux questions.",
            source: "CNB, annonce du 23 octobre, relayée par Le Brief IA des experts-comptables du 26 octobre",
          },
          {
            title: "Cegid met des agents de contrôle dans ses logiciels de finance",
            body: "Présentés le 8 octobre, les agents notent le risque de chaque virement d'un lot et repèrent dans l'ERP les marges négatives. La validation reste distincte de la détection : l'agent signale, un humain décide.",
            implication: "Le premier niveau de contrôle devient une fonction du logiciel que vos clients utilisent déjà. Ce qui reste à votre charge, c'est la validation et l'explication de ce que l'agent a signalé.",
            source: "Daf-Mag, 8 octobre, relayé par Le Brief IA du 26 octobre",
          },
        ],
      },
      {
        name: "Technologies",
        breves: [
          {
            title: "Un pilote américain fait payer une facture fournisseur par un agent",
            body: "BILL, Billtrust et Visa ont présenté vers le 21 octobre un pilote réel : un agent autorisé règle une facture approuvée sans connexion humaine au portail du fournisseur, dans les limites fixées par l'acheteur. L'agent est reconnu grâce au Trusted Agent Protocol de Visa, qui peut tenir lieu de CAPTCHA. Le pilote se déroule aux États-Unis.",
            implication: "Le paiement sans intervention humaine d'une facture approuvée est techniquement démontré. Il ne concerne pas encore la France, mais il montre vers quoi la facture électronique peut conduire côté client.",
            source: "Accounting Today et CPA Practice Advisor, vers le 21 octobre, relayés par Le Brief IA du 26 octobre",
          },
          {
            title: "Thomson Reuters lance CoCounsel Tax, Audit & Accounting aux États-Unis",
            body: "L'outil calcule les amortissements par code et produit des classeurs Excel avec un onglet d'hypothèses. Il est conçu pour fonctionner sur n'importe quel modèle de pointe. Annonce relayée le 22 octobre ; l'offre concerne le marché américain.",
            implication: "L'outil est conçu pour fonctionner sur n'importe quel modèle ; ce qu'il met en avant, c'est le classeur dont les hypothèses sont visibles. C'est l'exigence que vos propres revues de travaux produits par IA devraient avoir.",
            source: "Accounting Today et CPA Practice Advisor, octobre, relayés par Le Brief IA du 26 octobre",
          },
        ],
      },
      {
        name: "Réglementation",
        breves: [
          {
            title: "Budget 2027 : le vote des recettes est reporté au 3 novembre",
            body: "À la fin de la séance du 19 octobre, les députés n'avaient examiné que 15 articles sur 58 de la première partie ; 43 restent à examiner, avec plus de 2 600 amendements. Le vote prévu le 20 octobre est donc repoussé au mardi 3 novembre. L'examen reprend le 27 octobre jusqu'au 2 novembre, et le vote sur l'ensemble du budget reste fixé au 17 novembre. Si la partie recettes est rejetée, le texte part au Sénat, une commission mixte paritaire cherche un accord et le gouvernement pourrait agir ensuite par ordonnance ; la date limite du Parlement est le 17 décembre, faute de quoi une loi spéciale permettrait à l'État de continuer à percevoir les impôts. Le budget 2026 n'avait été adopté qu'en février 2026, par le 49.3, et la première partie de l'an dernier avait été rejetée par 404 voix contre 1. Votes adoptés à ce stade : indexation du barème de l'impôt sur le revenu sur l'inflation (96 voix contre 0) et suppression de la baisse de l'abattement fiscal sur les pensions (116 contre 30).",
            implication: "Aucune mesure fiscale du projet n'est acquise, et rien ne garantit que la première partie sera adoptée. Les conseils de clôture qui supposent une mesure du projet doivent être livrés en deux versions.",
            source: "NosParlementaires, 11 octobre, mis à jour le 24 octobre",
            visual: {
              kind: "timeline",
              points: [
                { date: "20 oct.", label: "Vote initial prévu, reporté", state: "past" },
                { date: "27 oct. – 2 nov.", label: "Reprise de l'examen", state: "now" },
                { date: "3 novembre", label: "Vote de la première partie", state: "future" },
                { date: "17 novembre", label: "Vote sur l'ensemble du budget", state: "future" },
                { date: "17 décembre", label: "Date limite du Parlement", state: "deadline" },
              ],
              note: "Au-delà du 17 décembre, sans budget voté, une loi spéciale permet de continuer à percevoir les impôts.",
            },
          },
          {
            title: "Facture électronique : les amendes sont relevées, l'accompagnement n'est pas un report",
            body: "Selon la loi de finances 2026, l'émission d'une facture non électronique est sanctionnée de 50 € par facture, plafonnée à 15 000 € par an (15 € auparavant). Le défaut de transmission des données de transaction coûte 500 € par transmission, avec le même plafond (250 € auparavant). L'absence de plateforme désignée est sanctionnée de 500 € après une première mise en demeure, puis 1 000 € après une seconde, renouvelable tous les trois mois. La phase d'accompagnement annoncée par la DGFiP en juillet 2026 évite l'application automatique des sanctions en cas de difficultés réelles et documentées suivies d'une correction, mais elle ne couvre ni l'inaction ni un refus durable. Une version de la FAQ de l'administration affiche encore l'ancien montant de 15 €.",
            implication: "L'accompagnement protège les clients de bonne foi, pas ceux qui n'ont rien fait. Le dossier à constituer est un dossier de preuve : plateforme choisie, date, difficultés rencontrées, corrections apportées.",
            source: "Village de la Justice, article de Y. El Jouaidi, publié le 31 août, mis à jour le 9 octobre",
            visual: {
              kind: "compare",
              unit: "Amende en euros, avant et après la loi de finances 2026",
              items: [
                { label: "Facture non électronique — avant", value: 15, display: "15 €" },
                { label: "Facture non électronique — après", value: 50, display: "50 €", accent: true },
                { label: "Données non transmises — avant", value: 250, display: "250 €" },
                { label: "Données non transmises — après", value: 500, display: "500 €", accent: true },
              ],
              note: "Les deux amendes sont plafonnées à 15 000 € par an.",
            },
          },
          {
            title: "Sécurité sociale : les députés rejettent la partie recettes",
            body: "Le 23 octobre, l'Assemblée a rejeté la partie recettes du budget de la Sécurité sociale par 115 voix contre 1. Le vote prévu le 27 octobre ne s'applique donc plus.",
            implication: "Aucune règle nouvelle de cotisations n'est acquise pour vos clients employeurs : le texte poursuit son parcours et son calendrier est à suivre semaine après semaine.",
            source: "NosParlementaires, mis à jour le 24 octobre",
          },
        ],
      },
      {
        name: "Marché",
        breves: [
          {
            title: "Facture électronique : 75 % des assujettis ont désigné une plateforme",
            body: "Au comité de suivi du 8 octobre, rapporté par economie.gouv.fr le 12 octobre, 75 % des entreprises assujetties à la TVA avaient désigné une plateforme de réception. Environ 20 millions de factures ont été échangées du 1er septembre au 8 octobre, pour environ 70 milliards d'euros facturés. Au 13 octobre, la liste officielle comptait 155 plateformes, dont 9 en attente de tests d'interopérabilité. Sur 57 offres relevées au 25 octobre, 14 sont gratuites et le prix d'entrée payant médian est de 29 € HT par mois. Précaution : ces derniers chiffres viennent d'un comparateur rémunéré par commissions d'affiliation.",
            implication: "Le sujet n'est plus de convaincre mais de raccorder les retardataires. Un quart des assujettis n'a pas désigné de plateforme : c'est le travail d'accompagnement le plus immédiat de votre portefeuille.",
            source: "Observatoire de la facturation électronique, mis à jour le 25 octobre ; economie.gouv.fr, 12 octobre",
            visual: {
              kind: "gauge",
              pct: 75,
              centerLabel: "75 %",
              caption: "Assujettis à la TVA ayant désigné une plateforme de réception",
              note: "Comité de suivi du 8 octobre 2026. L'émission des factures est obligatoire pour les PME le 1er septembre 2027.",
            },
          },
        ],
      },
      {
        name: "Concurrence",
        breves: [
          {
            title: "Numeris, adossé à un fonds, rachète le cabinet de conseil FCS Consulting",
            body: "Le groupe parisien d'expertise comptable Numeris, environ 350 collaborateurs et 42 M€ de chiffre d'affaires, a repris l'intégralité des titres de FCS Consulting, un cabinet de conseil en fusions-acquisitions. Numeris est financé en LBO par Strada Partners. Opération publiée le 13 octobre ; le prix et le chiffre d'affaires de la cible ne sont pas publiés. Cette opération date de la semaine précédente, aucune nouvelle opération équivalente n'a été retenue cette semaine.",
            implication: "Un cabinet capitalisé ajoute à son offre le conseil en cession, qui est une porte d'entrée vers les clients dirigeants. Cela renforce l'intérêt de savoir ce que vous répondez à un dirigeant qui prépare une cession.",
            source: "CFNEWS, 13 octobre",
          },
          {
            title: "Audit CPA veut tripler de taille et se tourne vers le capital-investissement",
            body: "Le cabinet parisien, fondé en 2005, attend plus de 80 M€ de chiffre d'affaires cette année et se tourne vers le private equity pour tripler de taille. Une opération de financement est datée du 6 octobre ; le montant de la dette et les financeurs ne sont pas publiés. Article du 8 octobre.",
            implication: "Deux cabinets parisiens annoncent une croissance appuyée sur des capitaux en moins d'une semaine : la consolidation du segment se poursuit.",
            source: "CFNEWS, 8 octobre, mis à jour le 9 octobre",
          },
        ],
      },
      {
        name: "Opportunités",
        breves: [
          {
            title: "Le « Pacte Papin » : abattement doublé et droits de mutation à 0,1 % pour la transmission",
            body: "Pour les cessions réalisées entre le 1er janvier 2027 et le 31 décembre 2029, le projet de loi prévoit un abattement fixe du dirigeant porté de 500 000 € à 1 M€, un suramortissement de 30 % pour les PME et de 60 % pour les microentreprises, et des droits de mutation réduits à 0,1 % sur les fonds de commerce et les parts sociales, sous conditions d'ancienneté du salarié repreneur (cinq ans de contrat sur les dix dernières années). En parallèle, un amendement adopté par les députés étend l'abattement de 500 000 € aux associés de sociétés d'exercice libéral partant en retraite, pour les cessions à compter de 2027. Rien n'est définitivement voté : le vote de la première partie est repoussé au 3 novembre.",
            implication: "Une mesure de transmission en discussion crée un motif de conversation avec chaque dirigeant proche d'une cession, même si le texte final peut différer. Elle justifie un point de situation avant la fin de l'année plutôt qu'un conseil ferme.",
            source: "KPMG, 2 octobre ; Legifiscal, 21 octobre",
          },
          {
            title: "Un cabinet australien fait écrire par l'IA des scripts qu'il exécute en local",
            body: "Le cabinet de Townsville dirigé par Trent Yesberg fait écrire des scripts par Claude et ChatGPT, puis les exécute en local, reliés à QuickBooks et Xero. Un script exécuté en local n'entraîne pas d'appel facturé au modèle à chaque traitement ; les coûts d'infrastructure, de maintenance et de contrôle restent à la charge du cabinet. La démarche a donné naissance à Twine Biller, un outil de refacturation des abonnements. Article du 16 octobre.",
            implication: "Une autre façon d'industrialiser un traitement répétitif : écrire une fois, exécuter sans coût par appel. Le coût réel se déplace vers la maintenance et le contrôle du script.",
            source: "CPA Trendlines, 16 octobre, relayé par Le Brief IA du 26 octobre",
          },
        ],
      },
      {
        name: "Risques",
        breves: [
          {
            title: "Deux failles critiques de PHP corrigées le 21 octobre, découvertes avec l'aide d'IA",
            body: "Les correctifs ont été publiés le 21 octobre. Calif a découvert les failles avec GPT-5.6 Sol ; Wiz les a aussi trouvées dans le programme « Patch the Planet » d'OpenAI. Elles peuvent permettre l'exécution de code à distance sur des installations non corrigées.",
            implication: "Votre extranet clients, votre site ou celui d'un prestataire peuvent tourner sous PHP. Demandez la confirmation écrite que les correctifs sont appliqués : le risque porte sur les données de vos clients.",
            source: "Business Insider, relayé par Le Brief IA du 26 octobre",
          },
          {
            title: "Les recommandations de l'IA sont acceptées près de 80 % du temps, même fausses",
            body: "Dans les expériences de Steven Shaw (King's College de Londres), menées auprès de 1 372 participants, les recommandations de l'IA étaient acceptées près de 80 % du temps, même lorsqu'elles étaient délibérément fausses. L'auteur compare l'IA au pilote automatique et conseille de forger son propre jugement avant d'interroger l'outil. Date de publication non précisée.",
            implication: "Une revue qui se contente de valider ce que l'IA propose est exposée à ce biais. Une procédure de revue doit prévoir un contrôle avant la consultation de l'outil, sur les écritures et estimations à enjeu.",
            source: "Business Insider, relayé par Le Brief IA du 26 octobre",
          },
        ],
      },
    ],
    agenda: [
      { date: "27 octobre", what: "Reprise de l'examen du budget 2027 à l'Assemblée, jusqu'au 2 novembre", who: "tout le marché" },
      { date: "3 novembre", what: "Vote de la première partie (recettes) du budget 2027", who: "tout le marché" },
      { date: "17 novembre", what: "Vote sur l'ensemble du budget 2027 à l'Assemblée", who: "tout le marché" },
      { date: "17 décembre", what: "Date limite du Parlement ; à défaut, loi spéciale pour continuer à percevoir les impôts", who: "tout le marché" },
      { date: "1er septembre 2027", what: "Émission des factures électroniques et e-reporting étendus aux PME, TPE et micro-entreprises", who: "clients PME" },
    ],
    figures: [
      { value: "75 %", what: "des assujettis à la TVA ont désigné une plateforme de réception de factures", source: "Comité de suivi du 8 octobre, rapporté le 12 octobre" },
      { value: "20 M", what: "de factures électroniques échangées du 1er septembre au 8 octobre, pour environ 70 Md€ facturés", source: "Observatoire de la facturation électronique, 25 octobre" },
      { value: "15 sur 58", what: "articles de la première partie du budget 2027 examinés à la fin de la séance du 19 octobre", source: "NosParlementaires, 24 octobre" },
      { value: "8 %", what: "des cabinets du top 100 britannique déclarent des bénéfices monétisés de l'IA, alors que deux tiers l'ont mise en œuvre (cabinets d'avocats, enquête PwC)", source: "PwC, relayé par Legal Futures" },
    ],
  },
]

export const THREADS: TrackedThread[] = [
  {
    title: "Budget 2027 : vote des recettes",
    domain: "Réglementation",
    progress: 40,
    stage: "Confirmé",
    firstSeen: "Semaine 40",
    note: "Projet déposé le 1er octobre. Vote de la première partie reporté du 20 octobre au 3 novembre.",
  },
  {
    title: "Facture électronique : raccordement des clients",
    domain: "Marché",
    progress: 40,
    stage: "Confirmé",
    firstSeen: "Semaine 36",
    note: "75 % des assujettis ont désigné une plateforme. Émission pour les PME le 1er septembre 2027.",
  },
  {
    title: "Consolidation du segment par les fonds",
    domain: "Concurrence",
    progress: 40,
    stage: "Confirmé",
    firstSeen: "Semaine 41",
    note: "Audit CPA (8 octobre) et Numeris / FCS Consulting (13 octobre). Aucune nouvelle opération retenue en semaine 43.",
  },
  {
    title: "Plateformes d'IA souveraines des professions réglementées",
    domain: "IA",
    progress: 20,
    stage: "Détecté",
    firstSeen: "Semaine 43",
    note: "Avocat+ lancé le 23 octobre. Aucune annonce équivalente côté experts-comptables à ce stade.",
  },
  {
    title: "Transmission : le « Pacte Papin »",
    domain: "Opportunités",
    progress: 20,
    stage: "Détecté",
    firstSeen: "Semaine 40",
    note: "Mesure du projet de loi, non votée. À reprendre après le vote du 3 novembre.",
  },
  {
    title: "Failles PHP corrigées le 21 octobre",
    domain: "Risques",
    progress: 40,
    stage: "Confirmé",
    firstSeen: "Semaine 43",
    note: "Confirmation écrite des correctifs à obtenir de chaque prestataire web.",
  },
]
