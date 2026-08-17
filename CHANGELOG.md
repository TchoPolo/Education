# Journal des versions

## 2.3.1

### Ajouté
- Préréglage **Avery DP247-100** (24 étiquettes, 70 × 37 mm) sur la disposition « Planche d'étiquettes toute prête » : un clic règle le format, la grille 3 × 8 et remet les décalages à zéro, sans ressaisie manuelle des mesures.

### Vérifié
- Un signalement faisait état d'une bordure visible en haut et en bas de la planche exportée. Calcul et export direct revérifiés avec les dimensions exactes du produit (70 × 37 mm, 3 × 8) : la grille remplit la page à 0 mm de marge gauche/droite et 0,5 mm en haut/bas, conforme à la planche réelle. L'écart venait d'une dimension pas encore ajustée ; le nouveau préréglage l'élimine.

## 2.3.0

### Ajouté — export PDF direct pour les étiquettes, sans fenêtre d'impression
La fenêtre d'impression du navigateur a son propre réglage d'en-tête et de pied de
page, indépendant de tout ce que la page peut demander en CSS. Sur une planche
d'étiquettes autocollantes, ce réglage caché suffit à décaler tout l'alignement — un
plafond technique de l'impression par le navigateur, pas un défaut réglable côté page.

Le bouton **Télécharger le PDF**, sur Étiquettes prénoms, contourne le problème à la
racine : le fichier PDF est désormais écrit directement par le script, octet par octet,
sans passer par aucune fenêtre d'impression. Plus d'en-tête, plus de pied de page, plus
de marge par défaut du navigateur, puisqu'il n'y a plus de navigateur dans la boucle.

Ce nouvel export couvre fidèlement tout ce que l'aperçu propose : capitales, script,
écriture cursive (minuscules, majuscules, accents), pastille de niveau, point de départ,
bordure pleine ou pointillée, formats prédéfinis ou sur mesure, feuille libre ou planche
toute prête avec décalage de calibration, et la pagination automatique sur plusieurs
feuilles. L'ancienne méthode par la fenêtre d'impression reste disponible en secours,
via un lien discret sous le nouveau bouton.

Vérifié fichier par fichier avec `qpdf --check` sur onze scénarios (structure PDF
valide), et à l'image pour chacun : alignement de la grille planche vérifié au dixième
de millimètre près, y compris avec un décalage de calibration.

### Corrigé au passage
- Les lettres cursives de l'export direct étaient démesurées et se chevauchaient avec le
  texte en capitales (mauvaise échelle de proportion, corrigée).
- La notice mentionnait encore l'absence de majuscules cursives, alors qu'elles sont
  disponibles depuis une version précédente ; le texte est à jour.

## 2.2.0

### Ajouté — impression sur planches d'étiquettes autocollantes toutes prêtes
Le mode précédent (marge choisie, calcul automatique) supposait une impression sur
papier libre. Il ne convient pas aux planches autocollantes prédécoupées, dont la
grille est fixée par le produit et non par un choix de confort.

Nouveau mode **« Planche d'étiquettes toute prête »** : on indique directement le
nombre d'étiquettes par ligne et par colonne compté sur la feuille vierge (par exemple
3 × 8), la grille se centre automatiquement sur la page A4, sans aucune marge calculée.
Deux réglages de décalage (horizontal et vertical, en millimètres, positifs ou négatifs)
permettent de calibrer finement l'alignement sur une planche réelle : imprimer un essai
sur papier ordinaire, le poser contre la planche à la lumière, ajuster jusqu'à ce que ça
tombe juste.

Vérifié position par position : une planche 3 × 8 en 6,4 × 3,4 cm centre sa grille à
9 mm du bord gauche et 12,5 mm du bord haut, chaque étiquette exactement à sa place ;
un décalage de calibration se répercute fidèlement sur la position de toute la grille.

Le centrage du texte à l'intérieur de chaque étiquette a été revérifié à l'image,
horizontalement et verticalement.

## 2.1.0

### Corrigé — bug confirmé sur les étiquettes personnalisées
Le nombre d'étiquettes par page ne correspondait pas toujours à ce que le réglage promettait.
Cause : la disposition des étiquettes reposait sur le retour à la ligne naturel du
navigateur, une mécanique qui peut interpréter différemment un même calcul selon le
moteur de rendu. Le compte annoncé pouvait être juste tandis que la disposition
réellement imprimée ne l'était pas.

Correction : chaque étiquette reçoit désormais une position exacte, en millimètres,
calculée et imposée par le script — plus aucun retour à la ligne laissé à l'appréciation
du navigateur. Vérifié position par position, colonne par colonne, avec une étiquette de
6,4 × 3,4 cm : 2 colonnes × 7 rangées = 14 à la marge de confort (10 mm), 3 colonnes × 8
rangées = 24 à une marge de 5 mm — conforme dans les deux cas.

Le banc d'essai vérifiait jusque-là seulement l'absence d'erreur, pas l'exactitude de la
disposition ; c'est ce qui a laissé passer ce défaut. Trois contrôles géométriques stricts
ont été ajoutés, qui rejouent la disposition réelle et la comparent au calcul attendu.

### Corrigé — vérifié en conditions réelles
La programmation par période (ticket précédent) a été revérifiée avec de vrais
événements de formulaire plutôt que des appels internes : confirmé que changer de
période ouvre bien une programmation distincte et conserve les saisies de chaque période.

## 2.0.0

### Changé
- L'application s'appelle désormais **La classe de Madame Marion**. Emblème et nom repris dans le bandeau, le manifeste d'application, le nom des fichiers de réglages et la mémoire du poste. Les anciens fichiers de réglages restent relisibles.
- **Alphabet cursif entièrement reconstruit.** Les lettres ne sont plus tracées une à une à la main mais engendrées à partir des mêmes formes de base — même rond, même arche, même boucle, mêmes hauteurs. C'est cette régularité qui fait la lisibilité d'un modèle d'écriture. Trait légèrement épaissi, boucles hautes ramenées à 2,2 fois la hauteur des petites lettres, lignes de repère ajustées.

### Corrigé
- **Étiquettes : le nombre par feuille.** Les marges de la feuille et l'espace entre les étiquettes sont maintenant réglables. Une étiquette de 6,4 × 3,4 cm donne 14 par page avec la marge de confort, et **24 par page avec une marge de 5 mm**.
- **Le `u` était construit comme un `n`** : sommets arrondis et creux pointus, alors que le `u` est exactement l'inverse. « quatre » se lisait « qnatne ». Le `y`, bâti sur le `u`, avait le même défaut.
- Tracés du `r` et du `s` repris.
- **Programmation : chaque période a désormais sa propre planification.** Changer de période ouvrait le même tableau ; les cinq périodes sont maintenant indépendantes et conservent chacune leurs saisies.

## 1.3.0

### Ajouté
- Module **Synthèse des acquis** : le bilan de fin de grande section, un document par élève, bâti sur les six domaines du programme. Grille à trois niveaux cochée d'un clic, bloc « ce que l'élève réussit », lignes de signature, impression d'un élève ou de toute la classe.
- Les fiches d'élèves sont conservées dans la mémoire locale du poste, et incluses dans le fichier de réglages pour passer d'un ordinateur à l'autre. Avertissement explicite sur les données personnelles.
- Interface revue pour iPhone et MacBook : onglets défilants, champs de 16 px pour empêcher le zoom automatique d'iOS, cibles tactiles agrandies, marges de sécurité de l'écran, aperçu A4 réduit à la largeur disponible et toujours imprimé en taille réelle.

### Corrigé
- La grille de synthèse ne coupe plus le bloc de commentaire en bas de page, et la page de suite ne porte plus de tableau vide.
- Le bandeau de marque forçait la page à 468 px de large sur un écran de 390 px.

## 1.2.0

### Ajouté
- Module **Progression annuelle** : la trame des cinq périodes, une ligne par compétence du programme, doublée en MS et en GS. Rappel des vacances sous chaque période, un domaine ou les six à la suite, export PDF et Word.
- Les saisies sont conservées domaine par domaine et niveau par niveau : on peut passer de l'un à l'autre sans rien perdre.
- Noms de fichiers PDF et Word plus lisibles pour les documents de programmation.

## 1.1.0

### Ajouté
- Enregistrement et relecture des réglages : listes de prénoms, mots et paramètres de tous les modules tiennent dans un fichier à conserver sur l'ordinateur.
- Sens de tracé des lettres cursives : point de départ, flèche de direction et ordre des traits, calculés à partir des courbes elles-mêmes.
- Dépôt complet : `index.html` à la racine, manifeste d'application, fonctionnement hors connexion, contrôles qualité embarqués.

### Corrigé
- L'adresse du site, la date et l'heure ne s'impriment plus : les marges sont désormais portées par la feuille et non par la page, le navigateur n'a plus la place d'ajouter ses en-têtes.
- La fiche d'écriture débordait sur plusieurs pages quand on demandait beaucoup de lignes hautes ; le nombre de lignes est maintenant borné à la hauteur de la feuille.

## 1.0.0

Première version complète, six modules.

### Ajouté
- Alphabet cursif complet : 26 minuscules, 26 majuscules, lettres accentuées et cédille, dessinés en courbes dans le fichier, sans police à installer.
- Sens de tracé : point de départ, flèche de direction et ordre des traits, lus dans le tracé des lettres.
- Écriture cursive sur les étiquettes prénoms, seule ou sous les capitales.
- Format d'étiquette sur mesure, en centimètres, avec rattrapage des saisies aberrantes.
- Module Programmation aligné sur le programme du BO n° 19 du 7 mai 2026 : six domaines, repères par âge, colonne « exemples de réussite ».
- Export Word de la programmation, et nom de fichier PDF pré-rempli par module.
- Identité visuelle Complice de Classe, manifeste d'application et fonctionnement hors connexion.
- Contrôle structurel HTML / JavaScript et banc d'essai de 41 scénarios, livrés avec le dépôt.

### Corrigé
- Lettres cursives illisibles : `s`, `r`, `z` en minuscules, `T`, `L`, `M`, `N`, `H` en majuscules. Le `M` était dessiné avec deux jambes, donc identique au `N`.
- Liaisons manquantes après les lettres `v` et `w`.
- Dernière rangée de cartes rognée en bas de feuille.
- Tailles de police incohérentes d'une carte à l'autre au sein d'un même jeu.
- Modèle d'écriture occupant toute la ligne, sans place laissée à l'élève.
- Fond sombre de l'interface s'imprimant en haut des feuilles.
- Mise en page reposant sur `calc()`, prise en défaut par les moteurs anciens.
- Intitulés des cases à cocher affichés en capitales par héritage de style.
- Bordures et fonds de colonnes perdus à l'ouverture de l'export Word.
- Panneau du module cursive absent de la page, défaut invisible pour le banc d'essai et à l'origine du contrôle structurel.
