<p align="center">
  <img src="assets/icons/icon-192.png" alt="" width="88">
</p>

<h1 align="center">La classe de Madame Marion</h1>

<p align="center"><em>Tous les supports de la classe, prêts à imprimer.</em></p>

## Boîte à supports MS / GS

Générateur de supports imprimables pour une classe de maternelle à double niveau
moyenne section / grande section.

Un seul fichier, `index.html`. On l'ouvre d'un double-clic, on règle, on enregistre en PDF.
Aucune installation, aucun compte, aucune connexion : rien ne sort de l'ordinateur.

## Les huit générateurs

| Module | Ce qu'il produit |
|---|---|
| **Étiquettes prénoms** | Porte-manteaux, cahiers, casiers, bandes de présence. Capitales, script, cursive, ou deux écritures superposées. Formats prédéfinis ou sur mesure au millimètre, marges de feuille réglables pour optimiser le nombre par page. |
| **Cartes nombres** | Chiffre, constellation du dé, doigts de la main, collection de jetons, nombre en lettres. Pour le référentiel, le loto, le mémory. |
| **Fiches d'écriture** | Lignes de repère, quadrillage ou cadre vierge, avec modèle à repasser. |
| **Jeu de paires** | Mémory des graphies ou association chiffre / constellation. |
| **Écriture cursive** | Modèles en attaché, alphabet dessiné trait par trait. 26 majuscules, 26 minuscules, lettres accentuées. Sens de tracé affichable. |
| **Réglages** | Vos listes et vos paramètres s'enregistrent dans un fichier et se rouvrent à la rentrée suivante ou sur un autre poste. |
| **Progression annuelle** | La trame des cinq périodes, une ligne MS et une ligne GS par compétence, rappel des vacances. Un domaine ou les six à la suite. Export PDF et Word. |
| **Programmation** | Un tableau par domaine, colonne MS et colonne GS. Export PDF et Word. |
| **Synthèse des acquis** | Le bilan de fin de grande section, un document par élève, conforme aux six domaines. Grille à cocher, bloc de commentaire, signatures. |

## Enregistrer et imprimer

Le bouton **Enregistrer en PDF** ouvre la fenêtre d'impression du navigateur, avec le nom
du fichier déjà rempli et les marges A4 déjà réglées. Dans « Destination », choisir
**Enregistrer au format PDF**. Le PDF peut alors partir sur une clé USB et s'imprimer à l'école.

L'adresse du site, la date et l'heure ne s'impriment pas : les marges sont portées par la
feuille elle-même, le navigateur n'a plus la place d'ajouter ses en-têtes. Il reste à vérifier,
une fois pour toutes, le format **A4** et l'échelle **100 %**.

La programmation et la progression annuelle disposent en plus d'un export **Word** modifiable.

## Sur iPhone et sur ordinateur

L'interface s'adapte : au-delà de 1120 px, les réglages à gauche et la feuille à droite ;
en dessous, les réglages puis la feuille, les onglets défilant horizontalement.
Sur petit écran la feuille A4 est **réduite pour tenir dans la largeur**, mais elle
s'imprime toujours à l'échelle réelle. Les champs de saisie font 16 px au minimum,
sous peine de voir l'iPhone zoomer tout seul dès qu'on touche un champ.

## Données d'élèves

Le module Synthèse des acquis conserve les fiches **dans la mémoire du navigateur, sur ce
poste uniquement**. Rien n'est transmis. Les fiches sont également incluses dans le fichier
produit par « Enregistrer mes réglages », ce qui permet de les transporter d'un poste à
l'autre — mais ce fichier contient alors des données personnelles d'enfants : il ne doit
pas être déposé sur un espace partagé, une messagerie grand public ou un dépôt en ligne.

Si le navigateur refuse la mémoire locale (navigation privée, ordinateur verrouillé),
l'outil le signale et le travail se conserve alors par le fichier de réglages.

## Trois manières de s'en servir

**Double-clic.** Télécharger `index.html` et l'ouvrir. C'est tout.

**En ligne, avec GitHub Pages.** Dans le dépôt : `Settings` → `Pages` → source `Deploy from a branch`,
branche `main`, dossier `/ (root)`. L'outil est en ligne quelques minutes plus tard.

**Comme une application.** Une fois la page ouverte en ligne, le navigateur propose de
l'installer sur l'ordinateur, la tablette ou le téléphone. Elle fonctionne ensuite hors connexion.

## Contrôles qualité

Deux contrôles voyagent avec le dépôt et ne demandent que Node.js :

```bash
node tests/structure.js     # cohérence entre le HTML et le script
node tests/banc-essai.js    # 65 scénarios limites sur les huit modules
```

`structure.js` vérifie que chaque identifiant et chaque fonction appelés par la page
existent réellement, et que chaque module a son onglet et son panneau.
`banc-essai.js` rejoue les huit modules dans un DOM simulé : listes vides, bornes inversées,
dimensions aberrantes, caractères non gérés, aller-retour du fichier de réglages, mémoire locale du poste, export Word.

À lancer avant toute mise en ligne. Les deux doivent afficher zéro échec.

## Programmes de référence

Les modules Programmation et Progression annuelle suivent le **programme d'enseignement de l'école maternelle publié au
BO n° 19 du 7 mai 2026**, applicable à la rentrée 2026-2027 : six domaines, objectifs
déclinés par âge, colonne « exemples de réussite ». Les colonnes MS et GS correspondent aux
repères « à partir de 4 ans » et « à partir de 5 ans » du texte.

## Choix techniques

- **Aucune dépendance.** Ni bibliothèque, ni police, ni police de caractères à installer, ni CDN. Les réseaux d'école bloquent tout cela.
- **JavaScript volontairement ancien.** Pas de syntaxe moderne : l'outil tourne sur un vieux poste d'école comme sur un navigateur récent.
- **Écriture cursive vectorielle.** Chaque lettre est un tracé de courbes défini dans le fichier, pas une police. Le rendu reste net à toute taille et ne dépend de rien.
- **Pagination calculée.** Le nombre d'éléments par feuille est calculé en millimètres avant l'affichage : ce que montre l'aperçu est ce qui sort de l'imprimante.
- **Aucun stockage caché.** Rien n'est transmis, rien n'est écrit à votre insu. Les réglages ne sont conservés que si vous cliquez sur « Enregistrer mes réglages », dans un fichier que vous gardez.

## Limites connues

- L'export PDF passe par la fenêtre d'impression du navigateur : un fichier HTML seul ne peut pas produire un PDF sans dépendance externe.
- L'export Word produit un document `.doc` ouvert et modifiable par Word et LibreOffice. Si l'orientation ne suit pas, la corriger dans Mise en page.

## Avant toute diffusion publique

Si le projet devait être diffusé sous un nom de marque, une recherche d'antériorité auprès de l'INPI
resterait à faire. Le nom actuel, « La classe de Madame Marion », est un usage personnel.

## Licence

Voir [LICENSE](LICENSE).
