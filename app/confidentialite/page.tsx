import type { Metadata } from "next"
import {
  LegalPage,
  LegalBox,
  LegalBoxAccent,
  LegalList,
  type LegalSection,
} from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Politique de confidentialité · RADAR",
  description:
    "Données collectées, finalités, sous-traitants, durées de conservation et droits des personnes concernées.",
}

const REVISION = "21 août 2026"

const SECTIONS: LegalSection[] = [
  {
    title: "Identité du responsable de traitement",
    body: (
      <>
        <p>Le responsable du traitement des données collectées sur ce site est :</p>
        <p>
          <strong>Hamza El Jaouahiry</strong>
          <br />
          Entrepreneur individuel (micro-entreprise) — RADAR
          <br />
          8 place Eugène Thomas, 93160 Noisy-le-Grand, France
          <br />
          SIRET : 105 253 314 00014
          <br />
          Email : <strong>contact@radar-intelligence.fr</strong>
        </p>
        <p>
          Pour toute question relative au traitement de vos données personnelles,
          vous pouvez contacter le responsable de traitement à l&apos;adresse
          ci-dessus.
        </p>
      </>
    ),
  },
  {
    title: "Engagement et cadre légal",
    body: (
      <>
        <p>
          RADAR s&apos;engage à protéger la vie privée des visiteurs et des
          abonnés de son site, conformément à :
        </p>
        <LegalList
          items={[
            "Le Règlement Général sur la Protection des Données (règlement UE 2016/679, dit « RGPD »)",
            "La loi française n° 78-17 du 6 janvier 1978 modifiée, dite « Informatique et Libertés »",
            "Les recommandations de la Commission Nationale de l'Informatique et des Libertés (CNIL)",
          ]}
        />
      </>
    ),
  },
  {
    title: "Données collectées et finalités",
    body: (
      <>
        <p>
          RADAR collecte uniquement les données strictement nécessaires aux
          finalités décrites ci-dessous.
        </p>

        <LegalBoxAccent>
          <p>
            <strong>A. Souscription et gestion de l&apos;abonnement</strong>
          </p>
          <p>
            Données collectées : nom, prénom, adresse électronique, nom de
            l&apos;organisation, marché suivi, adresse de facturation.
          </p>
          <p>
            <strong>Finalité :</strong> exécuter le contrat d&apos;abonnement,
            diffuser les briefs, émettre les factures, assurer le suivi
            commercial.
          </p>
          <p>
            <strong>Base légale :</strong> exécution du contrat (article 6.1.b du
            RGPD).
          </p>
          <p>
            <strong>Durée de conservation :</strong> pendant la durée de
            l&apos;abonnement, puis trois (3) ans à compter du dernier contact.
            Dix (10) ans pour les factures et pièces comptables, conformément à
            l&apos;article L.123-22 du Code de commerce.
          </p>
        </LegalBoxAccent>

        <LegalBox>
          <p>
            <strong>B. Diffusion des briefs par courriel</strong>
          </p>
          <p>
            Données traitées : adresse électronique, statut de délivrance,
            ouverture éventuelle du message.
          </p>
          <p>
            <strong>Finalité :</strong> acheminer le brief hebdomadaire et les
            alertes, et vérifier leur bonne réception.
          </p>
          <p>
            <strong>Base légale :</strong> exécution du contrat (article 6.1.b du
            RGPD).
          </p>
          <p>
            <strong>Durée de conservation :</strong> treize (13) mois pour les
            statistiques de délivrance.
          </p>
        </LegalBox>

        <LegalBox>
          <p>
            <strong>C. Paiement</strong>
          </p>
          <p>
            Données collectées via Stripe : nom, adresse électronique, adresse de
            facturation, données de carte bancaire — ces dernières n&apos;étant
            jamais stockées par RADAR, mais exclusivement par Stripe.
          </p>
          <p>
            <strong>Finalité :</strong> encaisser l&apos;abonnement et gérer les
            éventuels remboursements.
          </p>
          <p>
            <strong>Base légale :</strong> exécution du contrat (article 6.1.b du
            RGPD) et obligation légale de conservation comptable (article 6.1.c).
          </p>
          <p>
            <strong>Durée de conservation :</strong> dix (10) ans pour les données
            comptables.
          </p>
        </LegalBox>

        <LegalBox>
          <p>
            <strong>D. Formulaire de contact</strong>
          </p>
          <p>
            Données collectées : nom, adresse électronique, message libre.
          </p>
          <p>
            <strong>Finalité :</strong> répondre à la demande et engager une
            éventuelle conversation commerciale.
          </p>
          <p>
            <strong>Base légale :</strong> consentement (article 6.1.a du RGPD),
            exprimé par la soumission volontaire du formulaire.
          </p>
          <p>
            <strong>Durée de conservation :</strong> trois (3) ans à compter du
            dernier contact, conformément aux recommandations de la CNIL en
            matière de prospection commerciale entre professionnels.
          </p>
        </LegalBox>

        <LegalBox>
          <p>
            <strong>E. Navigation sur le site</strong>
          </p>
          <p>
            Données techniques minimales : adresse IP, type de navigateur, pages
            consultées, via les outils intégrés à l&apos;hébergement Vercel.
          </p>
          <p>
            <strong>Finalité :</strong> assurer le bon fonctionnement du site et
            prévenir les abus techniques.
          </p>
          <p>
            <strong>Base légale :</strong> intérêt légitime (article 6.1.f du
            RGPD).
          </p>
          <p>
            <strong>Durée de conservation :</strong> treize (13) mois au maximum
            pour les journaux de navigation.
          </p>
        </LegalBox>

        <p>
          Aucune donnée transmise par un abonné n&apos;est utilisée pour
          personnaliser le contenu vendu à d&apos;autres abonnés, ni pour
          entraîner un système automatisé.
        </p>
      </>
    ),
  },
  {
    title: "Sous-traitants et destinataires des données",
    body: (
      <>
        <p>
          RADAR fait appel à des prestataires techniques tiers, sous-traitants au
          sens du RGPD, uniquement dans la mesure nécessaire à l&apos;exécution
          du service :
        </p>

        <LegalBox>
          <p>
            <strong>Stripe</strong> (Stripe Payments Europe Limited, Dublin,
            Irlande)
          </p>
          <p>
            Traitement des paiements et des abonnements récurrents. Données
            transférées : identité, adresse électronique, facturation, carte
            bancaire — traitée et stockée exclusivement par Stripe, jamais par
            RADAR.
          </p>
          <p>
            Stripe est certifié PCI-DSS niveau 1, la norme de sécurité bancaire
            la plus stricte.
          </p>
        </LegalBox>

        <LegalBox>
          <p>
            <strong>Vercel</strong> (Vercel Inc., Covina, États-Unis)
          </p>
          <p>
            Hébergement technique du site. Données traitées : journaux
            techniques, adresse IP des visiteurs.
          </p>
          <p>
            Cadre du transfert hors Union européenne : clauses contractuelles
            types de la Commission européenne.
          </p>
        </LegalBox>

        <LegalBox>
          <p>
            <strong>Prestataire d&apos;acheminement des courriels</strong>
          </p>
          <p>
            Diffusion des briefs et des alertes. Données transférées : adresse
            électronique, nom, contenu du message.
          </p>
          <p>
            L&apos;identité du prestataire retenu et le cadre juridique du
            transfert éventuel hors Union européenne sont précisés dans la
            présente politique dès sa mise en service.
          </p>
        </LegalBox>

        <p>
          Les données ne font l&apos;objet d&apos;aucune vente, location, échange
          ou communication à des tiers à des fins commerciales ou publicitaires.
        </p>
      </>
    ),
  },
  {
    title: "Cookies et traceurs",
    body: (
      <>
        <p>
          Le site n&apos;utilise que des cookies strictement nécessaires à son
          fonctionnement, dits « techniques », notamment pour maintenir la
          session d&apos;un abonné. Ils sont exemptés de consentement préalable
          au sens de l&apos;article 82 de la loi Informatique et Libertés.
        </p>
        <p>
          Aucun cookie publicitaire, aucun cookie de mesure d&apos;audience
          tierce non anonymisée et aucun traceur marketing tiers n&apos;est
          déposé sur le navigateur du visiteur.
        </p>
        <p>
          Vous pouvez à tout moment configurer votre navigateur pour bloquer ou
          supprimer les cookies. La suppression des cookies techniques entraîne
          la déconnexion de l&apos;espace abonné.
        </p>
      </>
    ),
  },
  {
    title: "Vos droits",
    body: (
      <>
        <p>
          Conformément au RGPD et à la loi Informatique et Libertés, vous
          disposez des droits suivants sur vos données personnelles :
        </p>
        <LegalList
          items={[
            <>
              <strong>Droit d&apos;accès</strong> — obtenir la confirmation que
              vos données sont traitées et en recevoir une copie
            </>,
            <>
              <strong>Droit de rectification</strong> — faire corriger des
              données inexactes ou incomplètes
            </>,
            <>
              <strong>Droit à l&apos;effacement</strong> — demander la
              suppression de vos données, sous réserve des obligations légales de
              conservation comptable
            </>,
            <>
              <strong>Droit à la limitation</strong> — demander le gel temporaire
              d&apos;un traitement contesté
            </>,
            <>
              <strong>Droit à la portabilité</strong> — recevoir vos données dans
              un format structuré et lisible par machine
            </>,
            <>
              <strong>Droit d&apos;opposition</strong> — vous opposer à un
              traitement fondé sur l&apos;intérêt légitime
            </>,
            <>
              <strong>Droit de retirer votre consentement</strong> — à tout
              moment, pour les traitements qui en dépendent
            </>,
          ]}
        />
        <p>
          Ces droits s&apos;exercent par courriel à{" "}
          <strong>contact@radar-intelligence.fr</strong>. Une réponse est apportée
          dans un délai d&apos;un (1) mois à compter de la réception de la
          demande, porté à trois (3) mois en cas de demande complexe, ce dont
          vous seriez informé.
        </p>
      </>
    ),
  },
  {
    title: "Sécurité des données",
    body: (
      <>
        <p>
          RADAR met en œuvre les mesures techniques et organisationnelles
          appropriées pour protéger les données contre la destruction,
          l&apos;altération, la divulgation ou l&apos;accès non autorisé :
        </p>
        <LegalList
          items={[
            "Chiffrement des échanges par protocole HTTPS sur l'ensemble du site",
            "Accès aux données limité au seul responsable de traitement",
            "Recours à des sous-traitants présentant des garanties de sécurité reconnues",
            "Absence de stockage des données bancaires sur les serveurs du site",
          ]}
        />
        <p>
          En cas de violation de données susceptible d&apos;engendrer un risque
          pour vos droits et libertés, la CNIL est notifiée dans les
          soixante-douze (72) heures, et les personnes concernées sont informées
          dans les meilleurs délais.
        </p>
      </>
    ),
  },
  {
    title: "Transferts hors Union européenne",
    body: (
      <>
        <p>
          Certains sous-traitants sont établis en dehors de l&apos;Union
          européenne. Ces transferts sont encadrés par les mécanismes prévus au
          chapitre V du RGPD :
        </p>
        <LegalList
          items={[
            "Clauses contractuelles types adoptées par la Commission européenne",
            "Ou adhésion du prestataire au cadre de protection des données UE — États-Unis, lorsqu'il en relève",
          ]}
        />
        <p>
          Le paiement est traité par une entité établie en Irlande, donc au sein
          de l&apos;Union européenne.
        </p>
      </>
    ),
  },
  {
    title: "Réclamation auprès de la CNIL",
    body: (
      <>
        <p>
          Si vous estimez, après nous avoir contactés, que vos droits ne sont pas
          respectés, vous pouvez introduire une réclamation auprès de la
          Commission Nationale de l&apos;Informatique et des Libertés :
        </p>
        <p>
          <strong>CNIL</strong>
          <br />
          3 place de Fontenoy, TSA 80715
          <br />
          75334 Paris Cedex 07
          <br />
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand"
          >
            cnil.fr
          </a>
        </p>
      </>
    ),
  },
  {
    title: "Modifications de la politique",
    body: (
      <p>
        La présente politique peut être modifiée pour tenir compte de
        l&apos;évolution du service ou de la réglementation. Toute modification
        substantielle est notifiée aux abonnés par courriel. La date de dernière
        mise à jour figure en bas de cette page.
      </p>
    ),
  },
]

export default function ConfidentialitePage() {
  return (
    <LegalPage
      eyebrow="Protection des données"
      title="Politique de"
      titleAccent="confidentialité"
      lead="Les données que nous collectons, pourquoi, pendant combien de temps, et les droits dont vous disposez sur elles."
      revision={REVISION}
      sections={SECTIONS}
      current="confidentialite"
    />
  )
}
