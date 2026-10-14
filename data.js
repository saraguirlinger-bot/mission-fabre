/* ═══════════════════════════════════════════════════════════
   MISSION MAISON FABRE — Contenu pédagogique
   Formation « Construire et piloter la trésorerie de son entreprise » (21 h)
   Horizon PME · 6 objectifs = 6 modules + une synthèse finale
   Montants en k€ sauf indication contraire. Tous les chiffres sont cohérents entre eux.
   ═══════════════════════════════════════════════════════════ */

const GAME = {
  storeKey: 'fabre_tresorerie_v1',
  salt: 'MF-TRESO-HPME-2026',
  saveUrl: 'https://www.horizonpme.fr/save-tresorerie.php',
  codePrefix: 'MF',
  mark: 'MF',
  brand: 'Maison Fabre',
  brandSub: 'Mission Trésorerie',
  stripLabel: 'Construire et piloter la trésorerie',
  heroTag: 'Formation-action dirigeants · Construire et piloter la trésorerie de son entreprise',
  heroTitle: 'Mission<em>Maison Fabre</em>',
  heroSub: 'Septembre 2026, Gaillac. Une cave qui gagne de l’argent, et dont le compte bancaire plonge pourtant chaque automne. Vous aidez son gérant à comprendre, prévoir, agir, puis à ne plus jamais piloter au solde bancaire.',
  heroMetaVal: '6 objectifs',
  heroMetaLab: 'Formation de 21 h',
  dossierLabel: 'Dossier de l’entreprise',
  footer: 'Horizon PME · Centre de formation · Cas pédagogique fictif',
  finalNote: 'Le plan de trésorerie est prêt pour la saison. Découvrez votre fiche de résultats.',
  resultsEyebrow: 'Fiche récapitulative · Mission Maison Fabre · Piloter la trésorerie',
  diagTitle: 'Diagnostic par objectif de la formation',
  partName: c => 'Objectif ' + c,
  partsName: 'Tous les objectifs',
  unit: 'Module',
  unitPlural: 'Modules',
  finalLabel: 'Synthèse',
  duration: '3 h',
  durationLab: 'Durée conseillée',
  classLabel: 'Entreprise ou groupe',
  classPlaceholder: 'Ex : Session novembre 2026'
};

const PEOPLE = {
  laurent: { name: 'Laurent Fabre', role: 'Gérant', service: 'Maison Fabre', ini: 'LF', col: '#1A1A1A',
             bio: '48 ans, ancien sommelier. A repris la cave de son oncle en 2014 et développé la vente aux restaurants et les coffrets d’entreprise. Regarde son compte sur l’application de la banque tous les matins.' },
  emilie:  { name: 'Émilie Roques', role: 'Assistante administrative', service: 'Maison Fabre', ini: 'ER', col: '#7A9E7E',
             bio: 'À mi-temps. Facture, saisit les achats et prépare les remises de chèques. N’a jamais eu accès à un prévisionnel.' },
  hugo:    { name: 'Hugo Bardou', role: 'Commercial restaurants et cavistes', service: 'Maison Fabre', ini: 'HB', col: '#7A2E3A',
             bio: 'Suit 60 restaurants et cavistes entre Albi, Gaillac et Toulouse. Accorde volontiers « un peu plus de temps » pour payer.' },
  martine: { name: 'Martine Cazals', role: 'Responsable boutique', service: 'Maison Fabre', ini: 'MC', col: '#8A8A84',
             bio: 'Gère la boutique et passe les commandes de réassort aux domaines, « au feeling ».' },
  sophie:  { name: 'Sophie Calmels', role: 'Expert-comptable', service: 'Cabinet Calmels, Gaillac', ini: 'SC', col: '#4A7A52',
             bio: 'Établit les comptes annuels. Ne voit les chiffres de la cave qu’une fois par an, en mars.' },
  julien:  { name: 'Julien Teyssier', role: 'Conseiller professionnel', service: 'Crédit Tarnais, Gaillac', ini: 'JT', col: '#2F5D7C',
             bio: 'Autorise un découvert de 30 k€. A appelé Laurent deux fois l’automne dernier pour des dépassements.' }
};
const ORG = null;
const COURTS = null;

const DOSSIER_HTML = `
<div class="doc-card">
  <div class="doc-head"><span>Fiche entreprise</span><span>SARL Maison Fabre</span></div>
  <div class="doc-body">
    <p><b>Cave et négoce de vins</b> à Gaillac (Tarn), créée en 1987, reprise par Laurent Fabre en 2014. 8 salariés.</p>
    <p>Chiffre d’affaires 2025 : 1 200 k€ HT, réparti en quatre canaux :</p>
    <ul><li>la boutique, payée comptant : 35 % ;</li><li>les restaurants et cavistes, payés à 60 jours : 45 % ;</li><li>les coffrets pour comités d’entreprise (CE), facturés en décembre et payés en janvier-février : 15 % ;</li><li>la vente en ligne, payée à la commande : 5 %.</li></ul>
    <p>Activité très saisonnière : plus de 40 % des ventes entre novembre et janvier. Les achats aux domaines se font surtout en septembre et octobre, payés le mois suivant.</p>
    <p>Autorisation de découvert : 30 k€. TVA à 20 % sur toutes les opérations.</p>
  </div>
</div>
<div class="doc-card">
  <div class="doc-head"><span>Compte de résultat 2025</span><span>En k€ HT</span></div>
  <div class="doc-body"><div class="tscroll"><table class="mini wide">
    <thead><tr><th>Poste</th><th>2025</th></tr></thead><tbody>
    <tr class="tot"><td>Ventes de marchandises</td><td>1 200</td></tr>
    <tr><td>Achats de marchandises</td><td>740</td></tr>
    <tr><td>Variation de stock (stock initial 260, final 220)</td><td>40</td></tr>
    <tr><td>Coût d’achat des marchandises vendues</td><td>780</td></tr>
    <tr class="tot"><td>Marge commerciale</td><td>420</td></tr>
    <tr><td>Charges externes</td><td>90</td></tr>
    <tr><td>Impôts et taxes</td><td>8</td></tr>
    <tr><td>Charges de personnel</td><td>260</td></tr>
    <tr><td>Dotations aux amortissements</td><td>15</td></tr>
    <tr><td>Charges financières</td><td>7</td></tr>
    <tr class="tot"><td>Résultat</td><td>40</td></tr>
    </tbody></table></div>
  </div>
</div>
<div class="doc-card">
  <div class="doc-head"><span>Bilan au 31 décembre 2025</span><span>En k€</span></div>
  <div class="doc-body"><div class="tscroll"><table class="mini wide">
    <thead><tr><th>Actif</th><th>k€</th></tr></thead><tbody>
    <tr><td>Immobilisations brutes</td><td>180</td></tr>
    <tr><td>Amortissements cumulés</td><td>100</td></tr>
    <tr><td>Stock de vins</td><td>220</td></tr>
    <tr><td>Créances clients TTC</td><td>324</td></tr>
    <tr><td>Autres créances d’exploitation</td><td>10</td></tr>
    <tr><td>Disponibilités</td><td>25</td></tr>
    </tbody></table></div>
    <div class="tscroll" style="margin-top:10px"><table class="mini wide">
    <thead><tr><th>Passif</th><th>k€</th></tr></thead><tbody>
    <tr><td>Capitaux propres</td><td>455</td></tr>
    <tr><td>Emprunts bancaires</td><td>84</td></tr>
    <tr><td>Dettes fournisseurs TTC</td><td>60</td></tr>
    <tr><td>Dettes fiscales et sociales</td><td>60</td></tr>
    <tr><td>Découvert bancaire</td><td>0</td></tr>
    </tbody></table></div>
    <p style="margin-top:8px;font-size:13px;color:var(--muted)">Créances clients au 31/12 : coffrets CE de décembre 192 k€ TTC, restaurants et cavistes (ventes de novembre et décembre) 132 k€ TTC.</p>
  </div>
</div>
<div class="doc-card">
  <div class="doc-head"><span>Ce qui s’est passé depuis</span><span>Notes d’entretien</span></div>
  <div class="doc-body">
    <ul><li>Mars 2026 : une cave climatisée de 36 k€ a été payée comptant, « puisque le compte était bien garni après Noël ».</li>
    <li>Juin 2026 : Laurent s’est versé 30 k€ de dividendes.</li>
    <li>Automne 2025 : le découvert autorisé a été dépassé pendant six semaines, avec des frais et deux appels de la banque.</li>
    <li>Martine estime à environ 60 k€ (prix d’achat) les références qui ne se sont pas vendues depuis plus d’un an.</li>
    <li>Hugo accorde souvent des délais supplémentaires aux restaurants « pour garder la relation ».</li></ul>
  </div>
</div>`;

const MISSIONS = [
  { id: 'm1', num: 1, title: 'Comprendre la trésorerie', ch: 1, badge: 'Flux compris',
    intro: `<p>Lundi 31 août 2026, 18 h. La boutique vient de fermer. Laurent Fabre vous montre l’application de sa banque.</p>
            <p class="quote">« Regardez : +32 000 €. Et l’an dernier on a gagné 40 000 €. Alors pourquoi mon banquier m’appelle chaque automne ? »</p>
            <p>Avant de prévoir quoi que ce soit, il faut savoir ce que représente vraiment ce chiffre, et d’où vient l’argent qui entre et qui sort.</p>` },
  { id: 'm2', num: 2, title: 'Les causes des tensions', ch: 2, badge: 'Causes identifiées',
    intro: `<p>Mardi. Sophie Calmels, l’expert-comptable, a envoyé les comptes 2025. Laurent ne les avait jamais ouverts en dehors du rendez-vous de mars.</p>
            <p class="quote">« Le problème, c’est la banque qui ne comprend pas mon métier. »</p>
            <p>Avant d’accuser la banque, regardons les délais, le stock, la saison, et quelques décisions du gérant.</p>` },
  { id: 'm3', num: 3, title: 'Construire le plan de trésorerie', ch: 3, badge: 'Plan construit',
    intro: `<p>Mercredi. Avec Émilie, vous ouvrez un tableur vide. Il faut prévoir septembre à février, la période où tout se joue.</p>
            <p class="quote">« Je n’ai jamais fait ça, dit Émilie. Je ne sais même pas par quelle ligne commencer. »</p>
            <p>Ce module est le plus calculatoire. Gardez vos résultats : ils servent dans tous les modules suivants.</p>` },
  { id: 'm4', num: 4, title: 'Seuils, scénarios et alertes', ch: 4, badge: 'Risques anticipés',
    intro: `<p>Jeudi. Le plan est posé. Laurent le regarde longtemps sans rien dire.</p>
            <p class="quote">« Et si Noël est mauvais ? L’an dernier, deux comités d’entreprise ont réduit leur commande. »</p>
            <p>Un plan ne sert à rien s’il n’est pas confronté au pire, et s’il ne dit pas à quel moment il faut réagir.</p>` },
  { id: 'm5', num: 5, title: 'Agir sur les délais et les stocks', ch: 5, badge: 'Leviers activés',
    intro: `<p>Vendredi. Réunion avec toute l’équipe : Hugo pour les restaurants, Martine pour la boutique et les achats, Émilie pour la facturation.</p>
            <p class="quote">« On ne va quand même pas demander de l’argent à nos clients avant de les livrer ? » s’inquiète Hugo.</p>
            <p>Trois leviers sont sur la table : les clients, les fournisseurs et le stock. À vous de chiffrer ce que chacun rapporte.</p>` },
  { id: 'm6', num: 6, title: 'Organiser le suivi', ch: 6, badge: 'Routine installée',
    intro: `<p>Lundi suivant. Les décisions sont prises. Reste le plus difficile : que le plan vive, chaque semaine, sans que Laurent y passe ses soirées.</p>
            <p class="quote">« Je veux un rituel simple. Qui fait quoi, quel jour, et ce que je regarde, moi. »</p>` },
  { id: 'm7', num: 7, final: true, title: 'Le point avec la banque', ch: 0, badge: 'Saison sécurisée',
    intro: `<p>Mardi 15 septembre, 10 h. Crédit Tarnais, agence de Gaillac. Julien Teyssier s’attend à une demande d’augmentation de découvert, comme chaque automne.</p>
            <p class="quote">« Alors, Monsieur Fabre, combien cette année ? »</p>
            <p>Cette dernière étape mobilise toute la formation.</p>` }
];

const EXTRA_BADGE = null;

/* Tableau du plan de trésorerie, réutilisé dans plusieurs activités */
const PLAN_DOC = `<div class="doc-card"><div class="doc-head"><span>Hypothèses du plan</span><span>Septembre 2026 à février 2027</span></div><div class="doc-body">
  <div class="tscroll"><table class="mini wide"><thead><tr><th>Ventes et achats en k€ HT</th><th>Sept.</th><th>Oct.</th><th>Nov.</th><th>Déc.</th><th>Janv.</th><th>Févr.</th></tr></thead><tbody>
  <tr><td>Boutique et web (payés comptant)</td><td>30</td><td>35</td><td>45</td><td>90</td><td>25</td><td>25</td></tr>
  <tr><td>Restaurants et cavistes (payés à M+2)</td><td>40</td><td>45</td><td>55</td><td>70</td><td>35</td><td>35</td></tr>
  <tr><td>Coffrets CE</td><td>0</td><td>0</td><td>0</td><td>180</td><td>0</td><td>0</td></tr>
  <tr><td>Achats aux domaines (payés à M+1)</td><td>80</td><td>110</td><td>90</td><td>30</td><td>30</td><td>40</td></tr>
  </tbody></table></div>
  <ul style="margin-top:10px"><li>Ventes aux restaurants et cavistes de juillet : 40 ; d’août : 30. Achats d’août : 50.</li>
  <li>Coffrets CE facturés en décembre, payés moitié en janvier, moitié en février.</li>
  <li>Tout est encaissé et décaissé TTC (TVA 20 %).</li>
  <li>Charges mensuelles décaissées : salaires et charges sociales 22 (30 en décembre, prime de fin d’année), charges externes 8, échéance d’emprunt 2,5.</li>
  <li>TVA à reverser (calculée par Émilie) : sept. 6, oct. 5, nov. 4, déc. 8, janv. 22, févr. 8.</li>
  <li>Trésorerie réelle au 1er septembre : −2 (module 1).</li></ul>
</div></div>
<div class="doc-card"><div class="doc-head"><span>Plan de trésorerie</span><span>k€ TTC</span></div><div class="doc-body"><div class="tscroll">
  <table class="mini wide"><thead><tr><th>Ligne</th><th>Sept.</th><th>Oct.</th><th>Nov.</th><th>Déc.</th><th>Janv.</th><th>Févr.</th></tr></thead><tbody>
  <tr class="tot"><td>Total encaissements</td><td>84</td><td>78</td><td class="q">?</td><td class="q">?</td><td class="q">?</td><td>222</td></tr>
  <tr class="tot"><td>Total décaissements</td><td>98,5</td><td>133,5</td><td class="q">?</td><td>156,5</td><td class="q">?</td><td>76,5</td></tr>
  <tr class="tot"><td>Trésorerie fin de mois</td><td>−16,5</td><td>−72</td><td class="q">?</td><td class="q">?</td><td class="q">?</td><td class="q">?</td></tr>
  </tbody></table></div></div></div>`;

const PLAN_RESULT = `<div class="doc-card"><div class="doc-head"><span>Plan de trésorerie complet (module 3)</span><span>k€ TTC</span></div><div class="doc-body"><div class="tscroll">
  <table class="mini wide"><thead><tr><th>Ligne</th><th>Sept.</th><th>Oct.</th><th>Nov.</th><th>Déc.</th><th>Janv.</th><th>Févr.</th></tr></thead><tbody>
  <tr><td>Boutique et web</td><td>36</td><td>42</td><td>54</td><td>108</td><td>30</td><td>30</td></tr>
  <tr><td>Restaurants et cavistes</td><td>48</td><td>36</td><td>48</td><td>54</td><td>66</td><td>84</td></tr>
  <tr><td>Coffrets CE</td><td>0</td><td>0</td><td>0</td><td>0</td><td>108</td><td>108</td></tr>
  <tr class="tot"><td>Total encaissements</td><td>84</td><td>78</td><td>102</td><td>162</td><td>204</td><td>222</td></tr>
  <tr><td>Achats aux domaines</td><td>60</td><td>96</td><td>132</td><td>108</td><td>36</td><td>36</td></tr>
  <tr><td>Salaires, charges externes, emprunt</td><td>32,5</td><td>32,5</td><td>32,5</td><td>40,5</td><td>32,5</td><td>32,5</td></tr>
  <tr><td>TVA à reverser</td><td>6</td><td>5</td><td>4</td><td>8</td><td>22</td><td>8</td></tr>
  <tr class="tot"><td>Total décaissements</td><td>98,5</td><td>133,5</td><td>168,5</td><td>156,5</td><td>90,5</td><td>76,5</td></tr>
  <tr class="tot"><td>Trésorerie fin de mois</td><td class="neg">−16,5</td><td class="neg">−72</td><td class="neg">−138,5</td><td class="neg">−133</td><td class="neg">−19,5</td><td>126</td></tr>
  </tbody></table></div><p style="margin-top:8px;font-size:13px;color:var(--muted)">Découvert autorisé : 30 k€.</p></div></div>`;

/* ═══════════════════ ACTIVITÉS ═══════════════════ */
const ACTIVITIES = [

/* ─────────────── MODULE 1 — COMPRENDRE ─────────────── */
{
  id: 'a11', mission: 'm1', ch: 1, title: 'D’où vient l’argent ?',
  notions: ['Les flux financiers : exploitation, investissement, financement'],
  remediation: 'Les flux de trésorerie se rangent en trois familles. L’exploitation : tout ce qui vient de l’activité courante (ventes encaissées, achats, salaires, charges, TVA). L’investissement : l’achat ou la vente d’immobilisations. Le financement : les apports et les dividendes, les emprunts reçus et remboursés. Une entreprise saine finance son exploitation par l’exploitation, et ses investissements par des ressources longues.',
  intro: 'Émilie a imprimé les relevés bancaires de l’année. Laurent voudrait savoir ce qui a vraiment fait bouger son compte.',
  parts: [{
    type: 'sort', pts: 1,
    q: 'Classez chaque mouvement bancaire dans sa famille de flux.',
    cats: [ { id: 'E', label: 'Exploitation' }, { id: 'I', label: 'Investissement' }, { id: 'F', label: 'Financement' } ],
    items: [
      { id: 'f1', cat: 'E', text: 'Encaissement d’une facture du restaurant Le Vieux Pressoir' },
      { id: 'f2', cat: 'E', text: 'Paiement d’une commande au domaine de Brin' },
      { id: 'f3', cat: 'E', text: 'Versement de la TVA du mois de juillet', why: 'La TVA collectée sur les ventes et reversée à l’État fait partie du cycle d’exploitation.' },
      { id: 'f4', cat: 'I', text: 'Paiement de la cave climatisée (36 k€)' },
      { id: 'f5', cat: 'F', text: 'Échéance mensuelle de l’emprunt du véhicule', why: 'Rembourser un emprunt est un flux de financement, même si l’emprunt a servi à acheter un véhicule.' },
      { id: 'f6', cat: 'F', text: 'Dividendes de 30 k€ versés à Laurent' },
      { id: 'f7', cat: 'E', text: 'Salaires de juillet' },
      { id: 'f8', cat: 'I', text: 'Vente de l’ancien utilitaire à un garage', why: 'La cession d’une immobilisation est un flux d’investissement (désinvestissement).' }
    ],
    hint: 'Ce mouvement vient-il de l’activité de tous les jours, d’un bien durable acheté ou vendu, ou des relations avec la banque et les associés ?',
    hint2: 'Notion à mobiliser : les <b>trois familles de flux</b>. Les emprunts et les dividendes sont du financement ; les immobilisations sont de l’investissement.',
    explain: 'Exploitation : ventes encaissées, achats, TVA, salaires. Investissement : cave climatisée, vente de l’utilitaire. Financement : remboursement d’emprunt, dividendes. En 2026, 66 k€ sont sortis hors exploitation (cave et dividendes) avant même la saison.'
  }]
},
{
  id: 'a12', mission: 'm1', ch: 1, title: 'Le vrai solde',
  notions: ['Solde bancaire et solde de trésorerie réel'],
  remediation: 'Le solde affiché par la banque ne tient compte que des opérations déjà passées sur le compte. Le solde de trésorerie réel corrige ce chiffre : on retire les chèques émis et les paiements engagés non encore débités, on ajoute les remises clients déposées et non encore créditées. C’est ce solde réel qui sert de point de départ au plan de trésorerie.',
  intro: 'Le 31 août au soir, l’application affiche +32 k€. Émilie sort le carnet de chèques et le bordereau de remise.',
  doc: `<div class="doc-card"><div class="doc-head"><span>Au 31 août 2026</span><span>Pointage d’Émilie</span></div><div class="doc-body"><ul>
    <li>Solde affiché par la banque : <b>+32 k€</b>.</li>
    <li>Chèques remis aux domaines fin août, pas encore débités : <b>38 k€</b>.</li>
    <li>Chèques de clients déposés le 31 août, pas encore crédités : <b>4 k€</b>.</li>
  </ul></div></div>`,
  parts: [
    {
      type: 'num', pts: 0.5,
      q: 'Calculez la trésorerie réellement disponible au 31 août.',
      rows: [ { label: 'Trésorerie réelle au 31 août (avec son signe)', unit: 'k€', answer: -2, abs: 0.5, show: '−2', calc: '32 − 38 + 4 = −2 k€' } ],
      hint: 'Partez du solde de la banque. Que va-t-il se passer quand les chèques émis et les chèques déposés passeront sur le compte ?',
      hint2: 'Les chèques émis vont sortir : on les retire. Les chèques déposés vont entrer : on les ajoute.',
      explain: 'Les +32 k€ de l’application sont en réalité −2 k€. Laurent pilote depuis des années un chiffre qui a jusqu’à quatre semaines de retard sur la réalité.'
    },
    {
      type: 'choice', pts: 0.5,
      q: 'Laurent gagne de l’argent (40 k€ en 2025). Pourquoi son compte peut-il quand même être à découvert ?',
      options: [
        { id: 'r1', ok: true,  text: 'Le résultat mesure ce que l’entreprise gagne sur l’année ; la trésorerie dépend du moment où l’argent entre et sort. Stock acheté d’avance, clients qui paient tard, investissements et dividendes payés comptant consomment de la trésorerie sans toucher au résultat de la même façon.' },
        { id: 'r2', ok: false, text: 'Parce que le résultat de 40 k€ est faux : s’il était juste, il serait sur le compte.', why: 'Le résultat est juste. Il ne se retrouve pas sur le compte, car une partie est immobilisée dans le stock, les créances et la cave climatisée.' },
        { id: 'r3', ok: false, text: 'Parce que la banque prélève des frais trop élevés.', why: 'Les frais bancaires (7 k€ de charges financières) sont déjà déduits du résultat : ils n’expliquent pas l’écart.' },
        { id: 'r4', ok: false, text: 'Parce que la TVA collectée appartient à l’entreprise et qu’elle la dépense trop vite.', why: 'La TVA collectée appartient à l’État. La reverser n’affecte pas le résultat, mais il faut la prévoir dans le plan.' }
      ],
      hint: 'Le résultat et la trésorerie mesurent-ils la même chose, au même moment ?',
      hint2: 'Notion à mobiliser : la différence entre <b>résultat</b> (enrichissement) et <b>trésorerie</b> (argent disponible à une date).',
      explain: 'Une entreprise peut être rentable et manquer de trésorerie. Chez Maison Fabre, le stock, les délais clients et les sorties hors exploitation absorbent les bénéfices.'
    }
  ]
},
{
  id: 'a13', mission: 'm1', ch: 1, title: 'L’équilibre du bilan',
  notions: ['Fonds de roulement, BFR et trésorerie nette'],
  remediation: 'Fonds de roulement = capitaux propres + amortissements cumulés + emprunts − immobilisations brutes. BFR d’exploitation = stocks + créances clients + autres créances d’exploitation − dettes fournisseurs − dettes fiscales et sociales. Trésorerie nette = FR − BFR = disponibilités − découvert. Pour une activité saisonnière, le bilan au 31 décembre n’est qu’une photo, prise à un moment particulier de l’année.',
  intro: 'Ouvrez le bilan au 31 décembre 2025 dans le dossier de l’entreprise.',
  parts: [{
    type: 'num', pts: 1,
    q: 'Calculez l’équilibre financier au 31 décembre 2025.',
    rows: [
      { label: 'Fonds de roulement', unit: 'k€', answer: 459, abs: 1, calc: '455 + 100 + 84 − 180 = 459' },
      { label: 'BFR d’exploitation', unit: 'k€', answer: 434, abs: 1, calc: '220 + 324 + 10 − 60 − 60 = 434' },
      { label: 'Trésorerie nette', unit: 'k€', answer: 25, abs: 1, calc: '459 − 434 = 25 = disponibilités 25 − découvert 0' },
      { label: 'BFR exprimé en jours de chiffre d’affaires HT', unit: 'jours', answer: 130.2, tol: 2, show: '130,2', calc: '434 ÷ 1 200 × 360 = 130,2 jours' }
    ],
    hint: 'FR = ressources stables − immobilisations brutes. BFR = actif d’exploitation − dettes d’exploitation.',
    hint2: 'Vérifiez la trésorerie nette par les deux méthodes. Le BFR en jours = BFR ÷ CA HT × 360.',
    explain: 'Le BFR représente plus de quatre mois de chiffre d’affaires. Il est couvert de justesse par un fonds de roulement solide. Au 31 décembre, juste après Noël, tout semble aller bien. Mais c’est une photo prise au meilleur moment.'
  }]
},

/* ─────────────── MODULE 2 — CAUSES ─────────────── */
{
  id: 'a21', mission: 'm2', ch: 2, title: 'Stock et délais',
  notions: ['Rotation des stocks', 'Délais clients et fournisseurs'],
  remediation: 'Durée de rotation du stock = stock moyen ÷ coût d’achat des marchandises vendues × 360. Stock moyen = (stock initial + stock final) ÷ 2. Délai clients = créances TTC ÷ CA TTC × 360. Délai fournisseurs = dettes fournisseurs TTC ÷ achats TTC × 360. Ces ratios se lisent avec prudence quand le bilan tombe en pleine saison.',
  intro: 'Sophie Calmels a préparé les ratios « comme chaque année ». Recalculez-les à partir du dossier.',
  parts: [
    {
      type: 'num', pts: 1.5,
      q: 'Calculez les trois durées 2025 (TVA 20 %).',
      rows: [
        { label: 'Durée de rotation du stock', unit: 'jours', answer: 110.77, tol: 1.5, show: '110,8', calc: 'Stock moyen (260 + 220) ÷ 2 = 240. 240 ÷ 780 × 360 = 110,8 jours' },
        { label: 'Délai clients apparent (sur tout le CA)', unit: 'jours', answer: 81, tol: 1.5, show: '81,0', calc: '324 ÷ (1 200 × 1,2) × 360 = 81,0 jours' },
        { label: 'Délai fournisseurs apparent', unit: 'jours', answer: 24.32, tol: 2, show: '24,3', calc: '60 ÷ (740 × 1,2) × 360 = 24,3 jours' }
      ],
      hint: 'Le stock se compare au coût d’achat des marchandises vendues (780), les créances au CA TTC, les dettes fournisseurs aux achats TTC.',
      hint2: 'Stock moyen = (260 + 220) ÷ 2. CA TTC = 1 440. Achats TTC = 888.',
      explain: 'Près de quatre mois de stock, des clients qui semblent payer à 81 jours, des fournisseurs payés à 24 jours. Mais ces chiffres sont pris au 31 décembre : il faut les interpréter.'
    },
    {
      type: 'choice', pts: 0.5,
      q: 'Que penser de ces délais calculés au 31 décembre ?',
      options: [
        { id: 'p1', ok: true,  text: 'Ils sont faussés par la saison : les coffrets CE de décembre (192 k€) gonflent les créances, les achats de décembre sont faibles, et la boutique payée comptant fait baisser la moyenne. Il faut suivre les délais canal par canal et à plusieurs dates.' },
        { id: 'p2', ok: false, text: 'Ils sont fiables : ce sont les chiffres officiels du bilan.', why: 'Le bilan est exact à sa date, mais pour une activité saisonnière, une seule date ne représente pas l’année.' },
        { id: 'p3', ok: false, text: 'Ils montrent que les fournisseurs sont payés trop tôt : il faut les payer à 120 jours.', why: 'Les fournisseurs ne peuvent pas être payés au-delà des délais légaux. Et ce délai bas vient surtout de la faiblesse des achats en décembre.' },
        { id: 'p4', ok: false, text: 'Ils prouvent que tous les clients paient mal.', why: 'La boutique et le web paient comptant. Ce sont les CE et une partie des restaurants qui allongent la moyenne.' }
      ],
      hint: 'Que contiennent exactement les créances et les dettes au 31 décembre, en pleine saison ?',
      hint2: 'Notion à mobiliser : un ratio de bilan est une <b>photo à une date</b>. La saison et le mélange des canaux le déforment.',
      explain: 'Pour piloter la trésorerie, on suit les délais par canal (restaurants, CE) et tout au long de l’année, pas seulement au bilan.'
    }
  ]
},
{
  id: 'a22', mission: 'm2', ch: 2, title: 'Pourquoi le compte plonge',
  notions: ['Les causes des tensions de trésorerie'],
  remediation: 'Les tensions de trésorerie ont quatre grandes familles de causes : la saisonnalité (décalage entre achats et ventes dans l’année), le stock (trop acheté ou qui ne tourne pas), les délais (clients qui paient tard, fournisseurs payés tôt) et les décisions du dirigeant (investissements payés comptant, prélèvements, dividendes). Une perte d’exploitation en est une cinquième, absente ici : Maison Fabre est rentable.',
  intro: 'Laurent liste lui-même ce qui, selon lui, pèse sur son compte. Aidez-le à y voir clair.',
  parts: [{
    type: 'sort', pts: 1.5,
    q: 'Rangez chaque fait dans la famille de causes qu’il illustre.',
    cats: [ { id: 'S', label: 'Saisonnalité' }, { id: 'K', label: 'Stock' }, { id: 'D', label: 'Délais' }, { id: 'G', label: 'Décisions du gérant' } ],
    items: [
      { id: 'c1', cat: 'S', text: 'Les achats aux domaines sont concentrés en septembre et octobre' },
      { id: 'c2', cat: 'S', text: 'Plus de 40 % des ventes se font entre novembre et janvier' },
      { id: 'c3', cat: 'K', text: '60 k€ de références ne se sont pas vendues depuis plus d’un an' },
      { id: 'c4', cat: 'K', text: 'Martine commande le réassort « au feeling », sans suivi des ventes par référence' },
      { id: 'c5', cat: 'D', text: 'Hugo accorde des délais supplémentaires aux restaurants' },
      { id: 'c6', cat: 'D', text: 'Les coffrets CE sont payés en janvier et février, après avoir été achetés en octobre', why: 'Le problème n’est pas la saison elle-même, mais l’écart entre le moment où l’on paie le vin et celui où le client paie le coffret : c’est un problème de délai.' },
      { id: 'c7', cat: 'G', text: 'La cave climatisée a été payée comptant, sans emprunt' },
      { id: 'c8', cat: 'G', text: '30 k€ de dividendes versés en juin, juste avant la saison' }
    ],
    hint: 'Le problème vient-il du calendrier de l’activité, de ce qui dort en cave, du moment où l’on paie et où l’on est payé, ou d’un choix de Laurent ?',
    hint2: 'Notion à mobiliser : les <b>familles de causes</b> des tensions de trésorerie. Un investissement durable payé avec la trésorerie courante est une décision de financement.',
    explain: 'La saison crée le creux, le stock dormant et les délais le creusent, et les 66 k€ sortis en mars et en juin ont vidé le matelas avant l’automne. Rien de tout cela n’est une question de rentabilité.'
  }]
},

/* ─────────────── MODULE 3 — PLAN ─────────────── */
{
  id: 'a31', mission: 'm3', ch: 3, title: 'Les règles du plan',
  notions: ['Encaissements et décaissements'],
  remediation: 'Le plan de trésorerie enregistre les montants TTC, au mois où ils sont réellement encaissés ou décaissés, pas au mois de la facture. Il comprend la TVA à reverser et le remboursement du capital des emprunts. Il exclut les charges qui ne sortent pas d’argent (dotations aux amortissements, provisions).',
  intro: 'Avant de remplir le tableau, Émilie veut être sûre des règles.',
  parts: [{
    type: 'fields', pts: 1,
    q: 'Vrai ou faux ?',
    shared: ['Vrai', 'Faux'],
    rows: [
      { label: 'On inscrit les montants TTC.', answer: 0 },
      { label: 'On inscrit une vente au mois où elle est facturée.', answer: 1, why: 'On l’inscrit au mois où le client paie. Un coffret CE facturé en décembre est encaissé en janvier et février.' },
      { label: 'La dotation aux amortissements de la cave climatisée figure dans le plan.', answer: 1, why: 'Une dotation est une charge comptable sans sortie d’argent. Seul le paiement de la cave, en mars, a touché la trésorerie.' },
      { label: 'L’échéance d’emprunt (capital et intérêts) figure dans le plan.', answer: 0 },
      { label: 'La TVA à reverser à l’État est un décaissement.', answer: 0 }
    ],
    hint: 'Le plan de trésorerie suit l’argent qui entre et qui sort de la banque, à la date où il bouge.',
    hint2: 'Notion à mobiliser : <b>encaissement</b> et <b>décaissement</b>, à distinguer des produits et charges du compte de résultat.',
    explain: 'TTC, à la date de paiement, avec la TVA et les emprunts, sans les amortissements : ce sont les quatre réflexes d’un plan de trésorerie juste.'
  }]
},
{
  id: 'a32', mission: 'm3', ch: 3, title: 'Novembre',
  notions: ['Construire un plan de trésorerie'],
  remediation: 'Pour chaque mois, on part des hypothèses HT, on applique la TVA et le décalage de paiement de chaque canal, on additionne les encaissements et les décaissements, puis on calcule : trésorerie fin de mois = trésorerie début de mois + encaissements − décaissements.',
  intro: 'Septembre et octobre sont faits. À vous de construire novembre à partir des hypothèses.',
  doc: PLAN_DOC,
  parts: [{
    type: 'num', pts: 1.5,
    q: 'Calculez novembre.',
    rows: [
      { label: 'Total des encaissements de novembre', unit: 'k€', answer: 102, abs: 0.5, calc: 'Boutique 45 × 1,2 = 54 + restaurants de septembre 40 × 1,2 = 48 → 102' },
      { label: 'Total des décaissements de novembre', unit: 'k€', answer: 168.5, abs: 0.5, show: '168,5', calc: 'Achats d’octobre 110 × 1,2 = 132 + 22 + 8 + 2,5 + TVA 4 → 168,5' },
      { label: 'Trésorerie fin novembre (avec son signe)', unit: 'k€', answer: -138.5, abs: 1, show: '−138,5', calc: '−72 + 102 − 168,5 = −138,5' }
    ],
    hint: 'En novembre, la boutique encaisse ses ventes de novembre, les restaurants paient leurs achats de septembre (M+2) et l’on paie les domaines pour octobre (M+1).',
    hint2: 'N’oubliez pas la TVA (×1,2) sur les ventes et les achats. Point de départ : trésorerie fin octobre −72.',
    explain: 'En novembre, on paie les gros achats d’octobre alors que les ventes de Noël ne sont pas encore encaissées : la trésorerie tombe à −138,5 k€, plus de quatre fois le découvert autorisé.'
  }]
},
{
  id: 'a33', mission: 'm3', ch: 3, title: 'Décembre et janvier',
  notions: ['Construire un plan de trésorerie', 'Lire le point bas d’un plan'],
  remediation: 'Le point bas du plan est le solde cumulé le plus faible. C’est lui qui mesure le besoin de financement maximal, et le moment où il faut l’avoir prévu. Un mois de flux positif ne suffit pas à sortir du rouge si l’on part de très bas.',
  intro: 'Continuez le plan sur décembre et janvier.',
  doc: PLAN_DOC,
  parts: [{
    type: 'num', pts: 1,
    q: 'Calculez décembre et janvier.',
    rows: [
      { label: 'Total des encaissements de décembre', unit: 'k€', answer: 162, abs: 0.5, calc: 'Boutique 90 × 1,2 = 108 + restaurants d’octobre 45 × 1,2 = 54 → 162' },
      { label: 'Trésorerie fin décembre (avec son signe)', unit: 'k€', answer: -133, abs: 1, show: '−133', calc: '−138,5 + 162 − 156,5 = −133' },
      { label: 'Trésorerie fin janvier (avec son signe)', unit: 'k€', answer: -19.5, abs: 1, show: '−19,5', calc: 'Encaissements 30 + 66 + 108 (moitié des CE) = 204. Décaissements 36 + 22 + 8 + 2,5 + 22 = 90,5. −133 + 204 − 90,5 = −19,5' }
    ],
    hint: 'En janvier, la moitié des coffrets CE est encaissée : 180 × 1,2 ÷ 2. Attention à la TVA de janvier, élevée après Noël.',
    hint2: 'Décembre : achats de novembre 90 × 1,2 = 108, salaires 30 (prime). Janvier : achats de décembre 30 × 1,2 = 36, TVA 22.',
    explain: 'Décembre est le mois des plus grosses ventes, mais le compte reste à −133 k€. Il faut attendre janvier et le paiement des CE pour revenir près de zéro. Le point bas est en novembre : −138,5 k€.'
  }]
},
{
  id: 'a34', mission: 'm3', ch: 3, title: 'Quel rythme ?',
  notions: ['Périodicité du plan de trésorerie'],
  remediation: 'La périodicité s’adapte au risque. Un plan mensuel sur 12 mois donne la tendance et les besoins de l’année. Quand la trésorerie est tendue ou proche du découvert autorisé, on passe à un plan hebdomadaire glissant sur 13 semaines, mis à jour chaque semaine, pour voir arriver les échéances (TVA, salaires, gros règlements) au jour près.',
  intro: 'Laurent : « Un plan par mois, ça me suffit. Je le regarderai en fin de mois. »',
  parts: [{
    type: 'choice', pts: 0.5,
    q: 'Quelle périodicité recommandez-vous ?',
    options: [
      { id: 'q1', ok: true,  text: 'Un plan mensuel sur 12 mois pour l’année, et un plan hebdomadaire glissant sur 13 semaines d’octobre à janvier, mis à jour chaque semaine.' },
      { id: 'q2', ok: false, text: 'Un plan annuel, établi en mars avec l’expert-comptable.', why: 'C’est la situation actuelle : un regard par an ne permet pas de voir venir le creux de novembre.' },
      { id: 'q3', ok: false, text: 'Un plan quotidien toute l’année.', why: 'Trop lourd pour une équipe de 8 personnes, et inutile hors saison.' },
      { id: 'q4', ok: false, text: 'Un plan mensuel suffit toute l’année, il suffit de le regarder en fin de mois.', why: 'En novembre, les salaires, la TVA et les domaines tombent à des dates différentes : un solde de fin de mois cache les creux en cours de mois.' }
    ],
    hint: 'Pendant quelle période la trésorerie est-elle la plus tendue ? Que cache un solde de fin de mois ?',
    hint2: 'Notion à mobiliser : la <b>périodicité</b> s’adapte au niveau de tension, avec un plan glissant sur 13 semaines en période critique.',
    explain: 'Le mensuel sert à voir l’année, l’hebdomadaire sert à passer la saison. Les deux se complètent.'
  }]
},

/* ─────────────── MODULE 4 — SEUILS ET SCÉNARIOS ─────────────── */
{
  id: 'a41', mission: 'm4', ch: 4, title: 'Le seuil d’alerte',
  notions: ['Seuils d’alerte'],
  remediation: 'Un seuil d’alerte est un niveau de trésorerie prévisionnelle qui déclenche une action, avant d’atteindre la limite. On le fixe au-dessus de la limite réelle (le découvert autorisé) pour garder le temps d’agir. On compte ensuite les périodes du plan où il est franchi.',
  intro: 'Avec Laurent, vous fixez le seuil d’alerte à −20 k€ : deux tiers du découvert autorisé de 30 k€. En dessous, une action doit être lancée.',
  doc: PLAN_RESULT,
  parts: [{
    type: 'num', pts: 1,
    q: 'Confrontez le plan à ce seuil.',
    rows: [
      { label: 'Nombre de fins de mois sous le seuil d’alerte de −20 k€', unit: 'mois', answer: 3, abs: 0, calc: 'Octobre −72, novembre −138,5, décembre −133. Septembre (−16,5) et janvier (−19,5) restent au-dessus.' },
      { label: 'Dépassement maximal du découvert autorisé', unit: 'k€', answer: 108.5, abs: 0.5, show: '108,5', calc: '138,5 − 30 = 108,5 k€, en novembre' }
    ],
    hint: 'Comparez chaque solde de fin de mois à −20. Attention aux mois tout proches du seuil.',
    hint2: 'Janvier est à −19,5 : c’est au-dessus de −20. Le dépassement du découvert se calcule au point bas.',
    explain: 'Trois mois d’alerte d’affilée, et un dépassement qui irait jusqu’à 108,5 k€ au-delà de ce que la banque autorise. Sans action, l’automne 2026 sera pire que le précédent.'
  }]
},
{
  id: 'a42', mission: 'm4', ch: 4, title: 'Et si Noël est mauvais ?',
  notions: ['Construire des scénarios'],
  remediation: 'Un scénario modifie une ou deux hypothèses clés et recalcule le plan. On construit au moins un scénario prudent. C’est sur lui que l’on dimensionne les actions et les financements, pas sur le scénario central.',
  intro: 'Scénario prudent : ventes boutique de décembre −20 % (72 au lieu de 90 HT) et commandes CE −30 % (126 au lieu de 180 HT). Les achats, déjà passés en septembre et octobre, ne changent pas.',
  doc: PLAN_RESULT,
  parts: [
    {
      type: 'num', pts: 1,
      q: 'Recalculez le plan dans le scénario prudent.',
      rows: [
        { label: 'Trésorerie fin décembre (avec son signe)', unit: 'k€', answer: -154.6, abs: 1, show: '−154,6', calc: 'Encaissements de décembre 72 × 1,2 + 54 = 140,4. −138,5 + 140,4 − 156,5 = −154,6' },
        { label: 'Trésorerie fin janvier (avec son signe)', unit: 'k€', answer: -73.5, abs: 1, show: '−73,5', calc: 'CE : 126 × 1,2 ÷ 2 = 75,6. Encaissements 30 + 66 + 75,6 = 171,6. −154,6 + 171,6 − 90,5 = −73,5' }
      ],
      hint: 'Novembre ne change pas. Seuls les encaissements de décembre (boutique) et de janvier-février (CE) baissent.',
      hint2: 'Décembre : boutique 72 × 1,2 = 86,4. Janvier : moitié des CE = 126 × 1,2 ÷ 2.',
      explain: 'Dans le scénario prudent, le point bas passe en décembre à −154,6 k€, et janvier reste très loin dans le rouge (−73,5). Le stock acheté pour Noël est payé, quoi qu’il arrive aux ventes.'
    },
    {
      type: 'choice', pts: 0.5,
      q: 'Sur quel scénario Laurent doit-il dimensionner ses actions ?',
      options: [
        { id: 'sc1', ok: true,  text: 'Sur le scénario prudent : les actions doivent tenir même si Noël déçoit.' },
        { id: 'sc2', ok: false, text: 'Sur le scénario central : c’est le plus probable.', why: 'Si les actions ne couvrent que le cas central, un Noël moyen suffit à replonger dans le rouge.' },
        { id: 'sc3', ok: false, text: 'Sur un scénario optimiste, pour ne pas inquiéter la banque.', why: 'C’est exactement ce qui fait perdre la confiance du banquier quand la réalité arrive.' },
        { id: 'sc4', ok: false, text: 'Aucun : un plan suffit, les scénarios compliquent tout.', why: 'L’an dernier, deux CE ont réduit leur commande : le risque est réel et connu.' }
      ],
      hint: 'Que se passe-t-il si les actions sont calibrées sur un cas plus favorable que la réalité ?',
      hint2: 'Notion à mobiliser : on <b>dimensionne</b> sur le scénario prudent.',
      explain: 'On pilote avec le scénario central, mais on se protège avec le scénario prudent.'
    }
  ]
},
{
  id: 'a43', mission: 'm4', ch: 4, title: 'Les actions correctrices',
  notions: ['Actions correctrices'],
  remediation: 'Une action correctrice agit sur la cause d’une tension et produit un effet chiffré avant le point bas. Elle se prépare à l’avance, avec un déclencheur (le seuil d’alerte). Les actions qui reportent le problème sur un tiers (URSSAF, fournisseurs payés hors délai) ou qui dégradent la marge à long terme ne sont pas des actions correctrices.',
  intro: 'Laurent propose une liste d’actions. Gardez celles qui corrigent vraiment la trajectoire avant novembre.',
  parts: [{
    type: 'multi', pts: 0.5,
    q: 'Sélectionnez les actions correctrices pertinentes.',
    options: [
      { id: 'ac1', ok: true,  text: 'Demander un acompte aux comités d’entreprise à la commande, en octobre.' },
      { id: 'ac2', ok: true,  text: 'Puiser dans le stock dormant pour composer les coffrets, au lieu d’acheter de nouvelles références.' },
      { id: 'ac3', ok: true,  text: 'Ramener le délai de paiement des restaurants de 60 à 30 jours pour les ventes de la saison.' },
      { id: 'ac4', ok: false, text: 'Reporter le paiement de la TVA de novembre.', why: 'La TVA collectée appartient à l’État : la reporter crée une dette avec pénalités, sans rien corriger.' },
      { id: 'ac5', ok: false, text: 'Brader tout le stock à −40 % en septembre.', why: 'On récupère de la trésorerie en détruisant la marge, et on vide la cave juste avant Noël.' },
      { id: 'ac6', ok: false, text: 'Attendre de voir si le compte passe dans le rouge.', why: 'Le plan montre déjà que le seuil sera franchi en octobre : attendre, c’est subir.' }
    ],
    hint: 'Une action correctrice doit agir avant novembre, sur une cause identifiée, sans créer de dette cachée ni détruire la marge.',
    hint2: 'Notion à mobiliser : une action correctrice agit sur les <b>causes</b> (délais, stock), pas sur les créanciers publics.',
    explain: 'Acompte CE, stock dormant, délais restaurants : trois actions sur les causes identifiées au module 2. Le module 5 va chiffrer leur effet.'
  }]
},

/* ─────────────── MODULE 5 — DÉLAIS ET STOCKS ─────────────── */
{
  id: 'a51', mission: 'm5', ch: 5, title: 'L’acompte des comités d’entreprise',
  notions: ['Agir sur les délais clients'],
  remediation: 'Un acompte à la commande avance une partie de l’encaissement au moment où l’entreprise engage ses dépenses. Il est courant pour les commandes spécifiques comme les coffrets personnalisés. Il se prévoit dans les conditions générales de vente et sur le devis.',
  intro: 'Les CE passent commande en octobre. Proposition : un acompte de 30 % du montant TTC encaissé en octobre, le solde de 70 % payé moitié en janvier, moitié en février. Coffrets CE : 180 k€ HT.',
  doc: PLAN_RESULT,
  parts: [{
    type: 'num', pts: 1,
    q: 'Chiffrez l’effet de l’acompte seul sur le plan.',
    rows: [
      { label: 'Acompte encaissé en octobre', unit: 'k€', answer: 64.8, abs: 0.3, show: '64,8', calc: '180 × 1,2 × 30 % = 64,8' },
      { label: 'Trésorerie fin novembre avec l’acompte seul (avec son signe)', unit: 'k€', answer: -73.7, abs: 1, show: '−73,7', calc: '−138,5 + 64,8 = −73,7 (tout le reste est inchangé jusqu’en décembre)' }
    ],
    hint: 'L’acompte s’ajoute aux encaissements d’octobre ; il se retrouve dans tous les soldes cumulés suivants.',
    hint2: 'Jusqu’en décembre, seul l’acompte change : trésorerie de novembre = −138,5 + acompte.',
    explain: 'L’acompte améliore de 64,8 k€ chaque fin de mois d’octobre à décembre. En janvier et février, les CE paient moins (75,6 au lieu de 108 chaque mois) : l’argent arrive simplement plus tôt.'
  }]
},
{
  id: 'a52', mission: 'm5', ch: 5, title: 'Le stock qui dort',
  notions: ['Agir sur les stocks'],
  remediation: 'Chaque jour de stock en moins libère le coût d’achat quotidien des ventes : gain = (rotation actuelle − rotation cible) × coût d’achat des marchandises vendues ÷ 360. À court terme, on puise dans le stock dormant au lieu d’acheter, et l’on passe des commandes de réassort à partir des ventes réelles par référence.',
  intro: 'Martine accepte de composer une partie des coffrets avec des références déjà en cave : les achats d’octobre passent de 110 à 80 k€ HT. À plus long terme, l’objectif est de ramener la rotation du stock de 110,8 à 90 jours.',
  doc: PLAN_RESULT,
  parts: [{
    type: 'num', pts: 1,
    q: 'Chiffrez le levier stock.',
    rows: [
      { label: 'Trésorerie fin novembre avec ce seul déstockage (avec son signe)', unit: 'k€', answer: -102.5, abs: 1, show: '−102,5', calc: 'Les achats d’octobre, payés en novembre, baissent de 30 × 1,2 = 36. −138,5 + 36 = −102,5' },
      { label: 'Trésorerie libérée durablement si la rotation passe de 110,8 à 90 jours', unit: 'k€', answer: 45, tol: 2, show: '45,0', calc: '(110,8 − 90) × 780 ÷ 360 = 45,0 k€' }
    ],
    hint: 'Les achats d’octobre sont payés en novembre (M+1), TTC.',
    hint2: 'Pour la rotation : un jour de stock vaut 780 ÷ 360 = 2,17 k€.',
    explain: 'Puiser dans la cave évite 36 k€ de décaissement en novembre, sans perdre de marge. Et une rotation à 90 jours libérerait 45 k€ de façon durable.'
  }]
},
{
  id: 'a53', mission: 'm5', ch: 5, title: 'Les fournisseurs',
  notions: ['Agir sur les délais fournisseurs'],
  remediation: 'Entre professionnels, le délai de paiement convenu ne peut pas dépasser 60 jours à compter de la date de facture, ou 45 jours fin de mois si le contrat le prévoit (Code de commerce). Négocier avec les fournisseurs reste possible dans ce cadre : étalement des livraisons, commandes fractionnées, conditions saisonnières écrites. Les retards au-delà exposent à une amende administrative et dégradent la relation.',
  intro: 'Laurent : « Et si je demandais aux domaines de me laisser payer mes achats d’octobre en février ? Ils me connaissent. »',
  parts: [{
    type: 'choice', pts: 0.5,
    q: 'Que lui répondez-vous ?',
    options: [
      { id: 'fo1', ok: false, text: 'Bonne idée : 120 jours de délai, c’est le levier le plus puissant.', why: 'Un délai de 120 jours dépasse le plafond légal entre professionnels : c’est sanctionnable, même si le domaine est d’accord.' },
      { id: 'fo2', ok: true,  text: 'C’est au-delà du plafond légal de 60 jours. On peut en revanche négocier des livraisons fractionnées, en septembre puis en novembre, pour que les paiements suivent mieux les ventes.' },
      { id: 'fo3', ok: false, text: 'Il suffit de payer en retard sans rien demander : les domaines ne diront rien.', why: 'C’est hors la loi, cela détruit la relation et expose à des pénalités de retard.' },
      { id: 'fo4', ok: false, text: 'Rien n’est possible avec les fournisseurs.', why: 'Le calendrier des commandes et des livraisons se négocie : fractionner déplace les paiements dans le respect du délai légal.' }
    ],
    hint: 'Que dit le Code de commerce sur les délais de paiement entre professionnels ?',
    hint2: 'Notion à mobiliser : le <b>délai légal</b> (60 jours date de facture) et les marges de négociation qui le respectent.',
    explain: 'Le levier fournisseur passe par le calendrier des commandes, pas par des délais hors la loi.'
  }]
},
{
  id: 'a54', mission: 'm5', ch: 5, title: 'Les trois leviers ensemble',
  notions: ['Agir sur les délais clients', 'Recalculer un plan après actions'],
  remediation: 'Après avoir chiffré chaque levier séparément, on refait le plan complet avec tous les leviers. On vérifie le nouveau point bas et l’on compare au découvert autorisé et au seuil d’alerte.',
  intro: 'Trois leviers retenus : l’acompte de 30 % des CE en octobre ; le déstockage (achats d’octobre 80 au lieu de 110 HT) ; et, pour les ventes aux restaurants à partir de septembre, un paiement à 30 jours (M+1) au lieu de 60. Les ventes de juillet et août restent payées à M+2.',
  doc: PLAN_RESULT,
  parts: [{
    type: 'num', pts: 1,
    q: 'Recalculez le plan avec les trois leviers.',
    rows: [
      { label: 'Encaissements des restaurants en octobre', unit: 'k€', answer: 84, abs: 0.5, calc: 'Ventes d’août (ancien délai) 30 + ventes de septembre (nouveau délai) 40 = 70 HT × 1,2 = 84' },
      { label: 'Trésorerie fin octobre (avec son signe)', unit: 'k€', answer: 40.8, abs: 1, show: '40,8', calc: 'Encaissements 42 + 84 + 64,8 = 190,8 ; décaissements 133,5. −16,5 + 190,8 − 133,5 = +40,8' },
      { label: 'Trésorerie fin novembre (avec son signe)', unit: 'k€', answer: 16.3, abs: 1, show: '16,3', calc: 'Encaissements 54 + 54 (restaurants d’octobre) = 108 ; décaissements 96 + 32,5 + 4 = 132,5. 40,8 + 108 − 132,5 = +16,3' }
    ],
    hint: 'En octobre, les restaurants paient deux mois d’un coup : août (ancien délai) et septembre (nouveau délai). C’est l’effet de transition.',
    hint2: 'Novembre : restaurants d’octobre 45 × 1,2 = 54 ; achats d’octobre 80 × 1,2 = 96.',
    explain: 'Avec les trois leviers, la trésorerie ne descend plus sous −16,5 k€ (début septembre, avant que les mesures n’agissent). Novembre passe de −138,5 à +16,3 k€. Les causes ont été traitées, sans un euro de financement supplémentaire.'
  }]
},

/* ─────────────── MODULE 6 — SUIVI ─────────────── */
{
  id: 'a61', mission: 'm6', ch: 6, title: 'Qui fait quoi',
  notions: ['Responsabilités et fréquence de mise à jour'],
  remediation: 'Le suivi de trésorerie repose sur des rôles clairs. Une personne alimente le plan à date fixe (pointage des relevés, mise à jour des prévisions). Le dirigeant décide des actions quand un seuil est franchi. L’expert-comptable rapproche périodiquement le plan du réalisé comptable. La banque reçoit une information régulière, ce qui entretient sa confiance.',
  intro: 'Laurent veut un partage des rôles simple, que chacun puisse tenir dans la durée.',
  parts: [{
    type: 'fields', pts: 0.75,
    q: 'Attribuez chaque tâche à la bonne personne, au bon rythme.',
    shared: ['Émilie, chaque lundi', 'Laurent, chaque mardi', 'Sophie Calmels, chaque mois', 'Julien Teyssier, chaque trimestre'],
    rows: [
      { label: 'Pointer les relevés et mettre à jour le plan sur 13 semaines', answer: 0 },
      { label: 'Décider des actions quand le seuil d’alerte est franchi', answer: 1, why: 'Décider d’une action (relance, report d’une commande) engage l’entreprise : c’est le rôle du gérant, sur la base du plan mis à jour la veille.' },
      { label: 'Rapprocher le plan du réalisé comptable et corriger les hypothèses', answer: 2 },
      { label: 'Recevoir le plan et le point d’avancement des actions', answer: 3, why: 'Un point trimestriel, et à chaque alerte, suffit à la banque. Elle n’apprend plus les difficultés par un dépassement de découvert.' }
    ],
    hint: 'Qui a les relevés sous la main ? Qui décide ? Qui contrôle ? Qui finance ?',
    hint2: 'Notion à mobiliser : séparer <b>alimenter</b>, <b>décider</b>, <b>contrôler</b> et <b>informer</b>.',
    explain: 'Émilie alimente, Laurent décide, l’expert-comptable contrôle, la banque est informée. Chacun à son rythme, et personne ne fait tout.'
  }]
},
{
  id: 'a62', mission: 'm6', ch: 6, title: 'La routine du lundi',
  notions: ['Routine de pilotage'],
  remediation: 'Une routine de pilotage se fait toujours dans le même ordre : constater le réalisé, mettre à jour les prévisions, comparer aux seuils, décider, puis informer. Sauter une étape, par exemple décider sans avoir pointé les relevés, revient à piloter à l’aveugle.',
  intro: 'Remettez dans l’ordre les étapes de la routine hebdomadaire de trésorerie.',
  parts: [{
    type: 'order', pts: 0.75,
    q: 'Classez les étapes, de la première à la dernière.',
    items: [
      { id: 'o1', text: 'Émilie importe les relevés bancaires et pointe les opérations de la semaine' },
      { id: 'o2', text: 'Elle remplace les prévisions de la semaine écoulée par le réalisé' },
      { id: 'o3', text: 'Elle met à jour les prévisions des 13 semaines suivantes (commandes, relances, échéances)' },
      { id: 'o4', text: 'Elle compare le solde prévisionnel le plus bas au seuil d’alerte' },
      { id: 'o5', text: 'Mardi, Laurent valide ou lance les actions nécessaires' },
      { id: 'o6', text: 'En fin de mois, le plan est transmis à l’expert-comptable' }
    ],
    hint: 'On ne peut pas comparer à un seuil un plan qui n’est pas à jour, ni mettre à jour un plan sans connaître le réalisé.',
    hint2: 'Ordre logique : constater, mettre à jour, comparer, décider, informer.',
    explain: 'Constater, mettre à jour, comparer, décider, informer : trente minutes par semaine pour Émilie, dix pour Laurent.'
  }]
},

/* ─────────────── SYNTHÈSE ─────────────── */
{
  id: 'a71', mission: 'm7', ch: [4, 5], title: 'Le plan résiste-t-il ?',
  notions: ['Scénarios et actions correctrices', 'Recalculer un plan après actions'],
  remediation: 'Avant de rencontrer la banque, on vérifie que le plan avec actions tient dans le scénario prudent. Si le point bas reste dans le découvert autorisé, il n’y a pas de financement supplémentaire à demander. Sinon, on chiffre le besoin résiduel.',
  intro: 'Avant le rendez-vous, vous croisez les trois leviers du module 5 avec le scénario prudent du module 4 (boutique de décembre 72 HT, CE 126 HT).',
  doc: PLAN_RESULT,
  parts: [{
    type: 'num', pts: 0.75,
    q: 'Vérifiez le plan avec actions dans le scénario prudent.',
    rows: [
      { label: 'Acompte CE encaissé en octobre', unit: 'k€', answer: 45.36, abs: 0.2, show: '45,4', calc: '126 × 1,2 × 30 % = 45,4' },
      { label: 'Trésorerie fin décembre (avec son signe)', unit: 'k€', answer: -7.2, abs: 1, show: '−7,2', calc: 'Oct. : −16,5 + 42 + 84 + 45,4 − 133,5 = 21,4. Nov. : 21,4 + 108 − 132,5 = −3,1. Déc. : −3,1 + 86,4 + 66 − 156,5 = −7,2' }
    ],
    hint: 'Reprenez le plan du module 5 en changeant uniquement l’acompte CE (sur 126) et la boutique de décembre (72).',
    hint2: 'Décembre : boutique 72 × 1,2 = 86,4, restaurants de novembre 55 × 1,2 = 66.',
    explain: 'Même avec un mauvais Noël, la trésorerie ne descend pas sous −16,5 k€ (septembre) et finit décembre à −7,2 k€ : tout reste dans le découvert autorisé de 30 k€, et au-dessus du seuil d’alerte.'
  }]
},
{
  id: 'a72', mission: 'm7', ch: [3, 6], title: 'Devant le banquier',
  notions: ['Piloter la trésorerie avec sa banque'],
  remediation: 'Une banque fait confiance à un dirigeant qui anticipe : un plan à jour, des scénarios, des actions déjà engagées et un suivi régulier. Quand les actions suffisent, on ne demande pas de financement supplémentaire. On présente le plan, on confirme l’autorisation existante, et l’on garde en réserve une solution saisonnière (crédit de campagne) à activer si le scénario prudent était dépassé.',
  intro: 'Julien Teyssier attend sa demande « d’augmentation de découvert, comme chaque automne ».',
  parts: [{
    type: 'choice', pts: 0.75,
    q: 'Que Laurent doit-il présenter ?',
    options: [
      { id: 'b1', ok: true,  text: '« Cette année, je ne vous demande rien de plus. Voici mon plan sur six mois, un scénario prudent et les trois actions déjà lancées : le point bas reste dans mes 30 k€ autorisés. Je vous enverrai le plan chaque trimestre, et nous parlerons d’un crédit de campagne seulement si mon seuil d’alerte était franchi. »' },
      { id: 'b2', ok: false, text: '« Il me faut 140 k€ de découvert supplémentaire pour passer Noël. »', why: 'C’était le besoin sans action. Les leviers l’ont fait disparaître : demander ce financement coûterait des agios inutiles.' },
      { id: 'b3', ok: false, text: '« Je voudrais un emprunt sur cinq ans pour reconstituer ma trésorerie. »', why: 'Le besoin est saisonnier et désormais couvert : un emprunt long financerait un problème qui n’existe plus.' },
      { id: 'b4', ok: false, text: '« Tout va bien, mon résultat est positif, je n’ai rien à vous montrer. »', why: 'Le résultat positif n’a pas empêché les dépassements de l’an dernier. La banque attend un plan et un suivi.' }
    ],
    hint: 'Avec les actions, quel est le point bas, même dans le scénario prudent ? Quel est le découvert autorisé ?',
    hint2: 'Notion à mobiliser : un <b>pilotage anticipé</b> remplace la demande de financement en urgence.',
    explain: 'Laurent arrive avec un plan, pas avec une demande. C’est le meilleur résultat possible d’un pilotage de trésorerie : la banque devient un partenaire informé, pas un recours en catastrophe.'
  }]
}
];

const CH_LABELS = {
  1: 'Objectif 1 — Flux financiers, solde de trésorerie et BFR',
  2: 'Objectif 2 — Causes des tensions de trésorerie',
  3: 'Objectif 3 — Construire le plan de trésorerie',
  4: 'Objectif 4 — Seuils d’alerte, scénarios et actions correctrices',
  5: 'Objectif 5 — Délais clients, fournisseurs et stocks',
  6: 'Objectif 6 — Organisation et routine de suivi'
};
