---

Author: Alain ORLUK
Formation : Développeur Web & Web mobile
Lieu: MArseille
Date : 08/11/2023

---
# **Votre première ECF**

Bonjour.  

Vous voici arrivé à la première grande étape de votre formation : votre première ***É***valuation en ***C***ours de ***F***ormation.

Cette étape va nous permettre, vous et moi, d'établir un constat de la situation à ce jour.  

Nous avons commencé la formation le 25 septembre 2023.

Les premiers apprentissages furent ceux autour du HTML et du CSS.

Dès le 09 octobre, nous avons démarré l'apprentissage de votre premier langage de programmation, JavaScript.

Vous en êtes donc à 7 semaines de pratique via les nombreux TP que je vous ai proposés.

Il est temps de déterminer le niveau que vous avez atteint.

Vous allez donc devoir me rendre un exercice via un projet que vous partagerez (positionnement public) via votre espace `github`.

## **Cahier des charges**

### **Contexte et enjeux**

Le centre de formation AFPA de Marseille Saint-Jérôme dispose actuellement, pour la saisie des apprenants inscrits en formation, d'un simple classeur Excel.

Dans le but de moderniser et sécuriser la conservation des données, le centre souhaite disposer d'une application web qui permettra d'interroger la base de données pour en lire le contenu (*avec une recherche par critère(s)*) mais aussi pour saisir individuellement et enregistrer en base de données chaque nouvel apprenant.

### **Plan de l'application et maquette**

Le client souhaite que vous lui présentiez un prototype via une maquette qui présentera l'interface et l'identité graphique (le design, les couleurs, …) que vous lui proposez.  
Dans tous les cas, l'identité colorimétrique attachée au logo de l'AFPA devra être respectée.

Le client souhaite en outre 3 pages :  

- Une page d'accueil
Avec une barre en haut de la page permettant de naviguer sur l'application, une partie basse avec les informations d'usage (entreprise, copyright, année). *La partie haute et basse sera présente sur chaque page*
- Une page contenant un formulaire permettant d'afficher un tableau qui liste l'ensemble des apprenants enregistrés.
- Une page permettant de faire une recherche selon certains critères.
- Une page permettant de saisir et d'enregistrer un nouvel apprenant qui entre en formation aujourd'hui

### **Types et jeu des données**

Les données sont inscrites en base au format JSON et sont hébérgées sur la plateforme [JSONBIN.io](https://jsonbin.io/) via votre propre compte

Un apprenant est caractérisé en base de données par :

- un `id` au format chaîne de caractère
- un `nom`, en majuscules au format chaîne de caractère
- un `prenom`, au format au format chaîne de caractère "capitalize"
- un `e-mail` au format chaîne de caractère
- une information `formation` (Choix possibles : `FDV`, `TSSR`, `HR`, `DWWM`) au format chaîne de caractère
- un type de financement (`PRF`, `PE`, `IND` ou `TPRO`) au format chaîne de caractère
- une date d'entrée en formation au format `jj/mm/aaaa` au format chaîne de caractère

Voici un exemples de données :

```json
{
    "id": "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
    "nom": "DELOIN",
    "prenom": "Alain",
    "e-mail": "alainwebdev@free.fr",
    "formation": "DWWM",
    "financement": "PRF",
    "date-entree": "25/09/2023"
}
```

### **Exigences techniques**

La donnée `date-entree` devra être générée par l'utilsiation d'un objet `Date`. Interdiction de coder la date en dur "23/11/2023".

Pour générer un `id`, vous utiliserez la librairie `uuid`..

Vous ne pourrez pas l'installer avec `npm` donc vous utiliserez un import par **url**
À toutes fins utiles, la documentation de la librairie se trouve [ICI](https://www.npmjs.com/package/uuid);

Voici comment l'implémenter :

Dans votre script JavaScript de type `module`:

```js
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';//Tout en haut de votre script
```

Puis au sein du script :  

```js
const newId = uuidv4();
```
