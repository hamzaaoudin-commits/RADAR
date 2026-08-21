import type { Metadata } from "next"
import Link from "next/link"
import {
  LegalPage,
  LegalBox,
  LegalBoxAccent,
  LegalList,
  type LegalSection,
} from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Conditions générales de vente · RADAR",
  description:
    "Abonnement, prix, résiliation, responsabilité et médiation — les conditions générales de vente du service RADAR.",
}

const REVISION = "21 août 2026"

const ARTICLES: LegalSection[] = [
  {
    title: "Objet et champ d'application",
    body: (
      <>
        <p>
          Les présentes Conditions Générales de Vente (ci-après « CGV »)
          régissent les relations contractuelles entre :
        </p>
        <p>
          <strong>Hamza El Jaouahiry</strong>, entrepreneur individuel
          (micro-entreprise), immatriculé sous le SIREN 105 253 314 (SIRET
          105 253 314 00014), exerçant sous le nom commercial <strong>RADAR</strong>,
          dont le siège est situé 8 place Eugène Thomas, 93160 Noisy-le-Grand,
          France (ci-après « le Prestataire »).
        </p>
        <p>
          Et toute personne physique ou morale souscrivant un abonnement proposé
          sur le site (ci-après « l&apos;Abonné »).
        </p>
        <p>
          Toute souscription implique l&apos;acceptation pleine et entière des
          présentes CGV, qui prévalent sur tout autre document de l&apos;Abonné.
        </p>
      </>
    ),
  },
  {
    title: "Nature du service et limites expresses",
    body: (
      <>
        <p>
          RADAR est un service d&apos;information et de veille stratégique par
          abonnement. Le Prestataire produit, pour un marché déterminé, une
          synthèse hebdomadaire des changements susceptibles d&apos;affecter les
          entreprises qui y opèrent, accompagnée d&apos;alertes ponctuelles et du
          suivi des sujets dans le temps.
        </p>
        <LegalBoxAccent>
          <p>
            <strong>Le service n&apos;est pas un conseil personnalisé.</strong>
          </p>
          <p>
            Les analyses diffusées portent sur un marché entier et sont
            identiques pour tous les Abonnés de ce marché. Elles ne tiennent
            compte ni de la situation particulière de l&apos;Abonné, ni de ses
            contrats, ni de ses obligations propres.
          </p>
          <p>
            Le Prestataire n&apos;est ni avocat, ni expert-comptable, ni
            conseiller en investissements financiers, ni professionnel de santé.
            Aucun contenu diffusé ne constitue un conseil juridique, fiscal,
            comptable, médical ou financier au sens réglementaire. Le service
            signale des échéances et des expositions ; toute décision relevant de
            ces domaines doit être validée par un professionnel compétent, et
            l&apos;Abonné en demeure seul responsable.
          </p>
        </LegalBoxAccent>
        <p>
          Le Prestataire est tenu d&apos;une obligation de moyens, et non de
          résultat. Il ne garantit ni l&apos;exhaustivité de la veille, ni la
          détection de tout événement pertinent, ni l&apos;exactitude des
          informations émanant de sources tierces qu&apos;il cite en les
          identifiant.
        </p>
      </>
    ),
  },
  {
    title: "Formules d'abonnement",
    body: (
      <>
        <p>
          Le Prestataire propose les formules suivantes, décrites en détail sur
          la page tarifs du site :
        </p>
        <LegalList
          items={[
            <>
              <strong>RADAR</strong> — 49 € par mois. Un marché suivi, brief
              hebdomadaire, alertes hors cycle, rapport mensuel.
            </>,
            <>
              <strong>RADAR PRO</strong> — 199 € par mois. Les sept radars, le
              suivi des sujets jusqu&apos;à leur résolution, la surveillance
              nominative des acteurs structurants du marché, les scénarios et la
              feuille de route à 36 mois, l&apos;archive complète des briefs.
            </>,
            <>
              <strong>RADAR ADVISORY</strong> — 999 € par mois. Les prestations
              de RADAR PRO, complétées par l&apos;intervention d&apos;un analyste
              qui applique le marché à la situation de l&apos;Abonné : réunions,
              audits ponctuels et recommandations propres à sa configuration.
            </>,
            <>
              <strong>RADAR ENTERPRISE</strong> — à partir de 5 000 € par mois.
              Plusieurs marchés suivis en parallèle ou un marché créé sur mesure,
              équipe dédiée, intégrations et interface applicative, analystes
              attitrés.
            </>,
          ]}
        />
        <p>
          Le Prestataire se réserve le droit de limiter le nombre de marchés
          couverts et le nombre d&apos;Abonnés par marché, afin de garantir la
          qualité du travail de veille.
        </p>
      </>
    ),
  },
  {
    title: "Prix, paiement et révision tarifaire",
    body: (
      <>
        <p>
          Les prix sont indiqués en euros toutes taxes comprises, la TVA
          n&apos;étant pas applicable au titre de l&apos;article 293 B du Code
          général des impôts.
        </p>
        <p>
          Le paiement s&apos;effectue en ligne, par prélèvement mensuel
          automatique, via le prestataire de paiement Stripe (Stripe Payments
          Europe Limited, Dublin, Irlande). Le premier prélèvement intervient à
          la souscription, les suivants à la date anniversaire mensuelle.
        </p>
        <p>
          Une facture est transmise par voie électronique après chaque
          prélèvement.
        </p>
        <p>
          En cas d&apos;échec de prélèvement, l&apos;accès au service peut être
          suspendu après une relance restée sans effet pendant sept (7) jours.
        </p>
        <p>
          Toute révision tarifaire est notifiée par courriel au moins trente (30)
          jours avant sa prise d&apos;effet. L&apos;Abonné qui refuse le nouveau
          tarif peut résilier sans frais avant cette date ; à défaut de
          résiliation, le nouveau tarif s&apos;applique à l&apos;échéance
          suivante.
        </p>
      </>
    ),
  },
  {
    title: "Durée, reconduction et résiliation",
    body: (
      <>
        <p>
          Les formules RADAR et RADAR PRO sont souscrites pour une durée
          mensuelle, reconduite tacitement à chaque échéance, sans engagement de
          durée.
        </p>
        <p>
          Les formules RADAR ADVISORY et RADAR ENTERPRISE font l&apos;objet
          d&apos;un contrat particulier, dont la durée et les modalités de
          résiliation sont convenues à la mise en place.
        </p>
        <LegalBox>
          <p>
            <strong>Résiliation par l&apos;Abonné.</strong>
          </p>
          <p>
            La résiliation s&apos;effectue à tout moment depuis l&apos;espace
            abonné, par une fonctionnalité accessible en ligne, conformément à
            l&apos;article L.215-1-1 du Code de la consommation. Elle peut
            également être demandée par courriel.
          </p>
          <p>
            Elle prend effet à la fin de la période mensuelle en cours. La
            période entamée reste due et n&apos;est pas remboursée au prorata.
            L&apos;Abonné conserve l&apos;accès au service jusqu&apos;à cette
            échéance.
          </p>
        </LegalBox>
        <LegalBox>
          <p>
            <strong>Résiliation par le Prestataire.</strong>
          </p>
          <p>
            Le Prestataire peut résilier un abonnement moyennant un préavis de
            trente (30) jours, notamment s&apos;il cesse de couvrir le marché
            concerné. Dans ce cas, les sommes correspondant à la période non
            servie sont remboursées.
          </p>
          <p>
            Il peut également résilier sans préavis, et sans remboursement, en
            cas de manquement grave de l&apos;Abonné aux présentes CGV,
            notamment en cas de rediffusion non autorisée des briefs.
          </p>
        </LegalBox>
      </>
    ),
  },
  {
    title: "Droit de rétractation",
    body: (
      <>
        <p>
          <strong>Abonnés consommateurs.</strong> Conformément à l&apos;article
          L.221-18 du Code de la consommation, l&apos;Abonné consommateur dispose
          d&apos;un délai de quatorze (14) jours à compter de la souscription
          pour se rétracter, sans avoir à motiver sa décision. S&apos;il a
          expressément demandé que l&apos;exécution commence avant la fin de ce
          délai, il reste redevable du montant correspondant au service déjà
          fourni.
        </p>
        <p>
          <strong>Abonnés professionnels.</strong> Le droit de rétractation ne
          s&apos;applique pas aux professionnels, à l&apos;exception de ceux qui
          emploient cinq salariés au plus et dont l&apos;objet du contrat
          n&apos;entre pas dans le champ de leur activité principale, dans les
          conditions de l&apos;article L.221-3 du Code de la consommation.
        </p>
        <p>
          Toute demande de rétractation est adressée par courriel, avec mention
          de la facture concernée. Le remboursement intervient sous quatorze (14)
          jours à compter de la réception de la demande.
        </p>
      </>
    ),
  },
  {
    title: "Obligations de l'Abonné",
    body: (
      <>
        <p>L&apos;Abonné s&apos;engage à :</p>
        <LegalList
          items={[
            "Fournir des informations exactes lors de la souscription et les tenir à jour",
            "Réserver l'usage des briefs à son organisation, et à elle seule",
            "Ne pas rediffuser, revendre, publier ni mettre à disposition de tiers les contenus reçus",
            "Ne pas utiliser le service pour produire une prestation de veille concurrente",
          ]}
        />
        <p>
          L&apos;accès est nominatif et attaché à une seule organisation. La
          transmission des briefs à l&apos;intérieur de l&apos;organisation
          abonnée est libre.
        </p>
      </>
    ),
  },
  {
    title: "Obligations du Prestataire",
    body: (
      <>
        <p>Le Prestataire s&apos;engage à :</p>
        <LegalList
          items={[
            "Produire et diffuser un brief hebdomadaire pour chaque marché couvert, hors périodes d'interruption annoncées",
            "Citer la source et la date de chaque fait rapporté",
            "Distinguer les faits établis des informations non recoupées",
            "Signaler lorsqu'un domaine surveillé n'a produit aucun signal, plutôt que de le combler",
            "Garantir la confidentialité des informations transmises par l'Abonné",
          ]}
        />
        <p>
          Le Prestataire peut interrompre la diffusion pendant une durée
          annoncée à l&apos;avance, notamment en période de congés. Une
          interruption supérieure à deux (2) semaines consécutives ouvre droit à
          un avoir au prorata.
        </p>
      </>
    ),
  },
  {
    title: "Propriété intellectuelle et droit d'usage",
    body: (
      <>
        <p>
          Les briefs, alertes, rapports, fiches de marché et tout contenu produit
          par le Prestataire demeurent sa propriété exclusive.
        </p>
        <p>
          L&apos;Abonné bénéficie, pendant la durée de son abonnement, d&apos;un
          droit d&apos;usage interne, non exclusif et non cessible, pour les
          besoins propres de son organisation : lecture, diffusion interne,
          citation dans ses documents de travail.
        </p>
        <p>Sont exclus de ce droit d&apos;usage :</p>
        <LegalList
          items={[
            "La rediffusion publique, la republication et la revente, en tout ou partie",
            "La mise à disposition de tiers, y compris de clients ou de partenaires",
            "L'intégration dans une prestation de veille, de conseil ou de formation vendue par l'Abonné",
            "L'utilisation aux fins d'entraînement d'un système automatisé",
          ]}
        />
        <p>
          À l&apos;issue de l&apos;abonnement, l&apos;Abonné conserve les briefs
          déjà reçus pour son usage interne, mais perd l&apos;accès à
          l&apos;archive en ligne.
        </p>
        <p>
          Les faits, données publiques et textes réglementaires cités en source
          demeurent la propriété de leurs émetteurs respectifs.
        </p>
      </>
    ),
  },
  {
    title: "Confidentialité",
    body: (
      <>
        <p>
          Chacune des parties s&apos;engage à conserver strictement
          confidentielles les informations non publiques échangées dans le cadre
          de l&apos;abonnement.
        </p>
        <p>
          Le Prestataire ne divulgue jamais l&apos;identité de ses Abonnés sans
          leur accord écrit préalable, et ne communique à aucun tiers les
          questions ou informations transmises par un Abonné.
        </p>
        <p>Cet engagement perdure cinq (5) ans après la fin de l&apos;abonnement.</p>
      </>
    ),
  },
  {
    title: "Responsabilité",
    body: (
      <>
        <p>
          La responsabilité du Prestataire ne saurait être engagée pour les
          conséquences directes ou indirectes résultant :
        </p>
        <LegalList
          items={[
            "D'une décision prise par l'Abonné sur le fondement d'un brief, sans validation par un professionnel compétent lorsque le domaine l'exige",
            "De l'inexactitude d'une information émanant d'une source tierce citée et identifiée",
            "De l'absence de détection d'un événement, la veille ne pouvant être exhaustive",
            "D'une modification du cadre réglementaire postérieure à la diffusion d'un brief",
            "D'un cas de force majeure tel que défini à l'article 1218 du Code civil",
          ]}
        />
        <p>
          En toute hypothèse, la responsabilité du Prestataire est plafonnée au
          montant total des sommes versées par l&apos;Abonné au cours des douze
          (12) mois précédant le fait générateur.
        </p>
      </>
    ),
  },
  {
    title: "Données personnelles",
    body: (
      <p>
        Le traitement des données personnelles de l&apos;Abonné (identité,
        courriel, données de facturation) est régi par notre{" "}
        <Link href="/confidentialite" className="text-brand">
          politique de confidentialité
        </Link>
        , conforme au Règlement Général sur la Protection des Données (RGPD) et à
        la loi française Informatique et Libertés.
      </p>
    ),
  },
  {
    title: "Réclamation et médiation",
    body: (
      <>
        <p>
          Toute réclamation est adressée par courriel à{" "}
          <strong>contact@radar-intelligence.fr</strong>. Le Prestataire
          s&apos;engage à y répondre sous quinze (15) jours ouvrés.
        </p>
        <p>
          Conformément aux articles L.616-1 et R.616-1 du Code de la
          consommation, l&apos;Abonné consommateur peut, en cas de litige non
          résolu amiablement, recourir gratuitement au service de médiation de la
          consommation auprès du médiateur compétent.
        </p>
        <p>
          Il peut également utiliser la plateforme européenne de règlement en
          ligne des litiges :{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand"
          >
            ec.europa.eu/consumers/odr
          </a>
        </p>
      </>
    ),
  },
  {
    title: "Modification des CGV",
    body: (
      <p>
        Le Prestataire peut modifier les présentes CGV. Toute modification
        substantielle est notifiée par courriel au moins trente (30) jours avant
        sa prise d&apos;effet. L&apos;Abonné qui refuse les nouvelles conditions
        peut résilier sans frais avant cette date.
      </p>
    ),
  },
  {
    title: "Loi applicable et juridiction compétente",
    body: (
      <>
        <p>Les présentes CGV sont régies par le droit français.</p>
        <p>
          En cas de litige, et à défaut d&apos;accord amiable, les{" "}
          <strong>tribunaux français de Paris</strong> seront seuls compétents,
          nonobstant pluralité de défendeurs ou appel en garantie.
        </p>
        <p>
          Pour les Abonnés consommateurs résidant en dehors de la France, les
          règles de compétence légales applicables s&apos;appliquent conformément
          au droit de l&apos;Union européenne.
        </p>
      </>
    ),
  },
]

export default function CgvPage() {
  return (
    <LegalPage
      eyebrow="Conditions contractuelles"
      title="Conditions générales de"
      titleAccent="vente"
      lead="Les conditions applicables à tout abonnement souscrit auprès de RADAR, conformément aux articles L.111-1 et suivants du Code de la consommation."
      revision={REVISION}
      sections={ARTICLES}
      current="cgv"
    />
  )
}
