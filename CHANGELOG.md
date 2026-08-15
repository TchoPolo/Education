# Journal des versions

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
