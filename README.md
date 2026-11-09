# 🌸 BuildAthon — Women Techmakers Montréal + IVADO + Prompts2Products

Bienvenue au **BuildAthon** co-organisé par **Women Techmakers Montréal**, **IVADO** et **Prompts2Products** ! 🚀

*(For the English version, see [README.en.md](./README.en.md))*

L'objectif de cet événement est de prendre un **problème concret du monde professionnel et des organisations** (automatiser une tâche répétitive, fluidifier un flux de travail, améliorer l'expérience employé, concevoir un outil interne, faciliter l'accès à l'information) et de le transformer en un **prototype fonctionnel et démontrable (MVP)** grâce au *vibe coding* assisté par **Antigravity**.

Ce gabarit de démarrage est spécialement conçu pour vous permettre de construire votre solution même si vous n'avez jamais programmé en TypeScript ou configuré de base de données.

> 💡 **Ce starter kit a été conçu et préparé avec ❤️ par Émilie et Daniel de l'agence [ctrlweb](https://ctrlweb.ca) pour faciliter le démarrage de tous les participant·e·s au BuildAthon.**

---

## 🎯 Comment démarrer ? Deux options simples

### Option 1 : Avec Antigravity Desktop (100% visuel, ZÉRO ligne de commande) 🌟
*Recommandé pour les débutant·e·s !*

1. Ouvrez l'application **Antigravity Desktop**.
2. Sur l'écran d'accueil, cliquez sur **« Clone Repository »** (ou allez dans le menu *File > Clone Git Repository...*).
3. Collez l'adresse du dépôt :
   ```text
   https://github.com/ctrlwebinc/wtmmtl-buildathon-starter
   ```
4. Choisissez un dossier sur votre ordinateur, puis ouvrez le projet dans Antigravity.
5. Dès votre premier message dans le chat, partagez votre idée :
   > *« Bonjour ! Pour le BuildAthon, je veux créer un outil interne pour automatiser l'accueil et le suivi des nouveaux employés en entreprise, avec une checklist interactive et l'assignation d'un mentor. »*
   
   Antigravity prendra en charge toute la partie technique :
   - Installation automatique des dépendances (`npm install`)
   - Création des règles de gestion (`src/domain/`)
   - Configuration de la base SQLite locale (`data/app.db`)
   - Création de l'API web Express et des routes
   - Mise à jour de l'interface graphique interactive dans votre navigateur (`public/index.html`)

> 💡 **Astuce encore plus directe** :  
> Dans une conversation avec Antigravity Desktop, vous pouvez aussi simplement taper :  
> *« Clone le dépôt https://github.com/ctrlwebinc/wtmmtl-buildathon-starter dans mon dossier de travail et prépare le projet. »*  
> Il exécutera le clonage et l'installation automatiquement !

---

### Option 2 : Via le Terminal (Ligne de commande)
Si vous êtes à l'aise avec la ligne de commande :
```bash
git clone https://github.com/ctrlwebinc/wtmmtl-buildathon-starter
cd wtmmtl-buildathon-starter
npm install
agy
```

---

## 💻 Visualiser votre application en direct

Une fois qu'Antigravity a généré votre projet, lancez le serveur :
```bash
npm run dev
```
Puis ouvrez votre navigateur sur :
👉 **[http://localhost:3000](http://localhost:3000)**

Chaque fois que vous demandez à Antigravity d'ajouter une fonctionnalité (ex: un bouton de vote, un champ de recherche, une nouvelle page), il mettra à jour l'interface web pour que vous puissiez tester le résultat en direct !

---

## 🛠️ Les Commandes Utiles

| Commande | À quoi ça sert ? |
| :--- | :--- |
| `npm run dev` | Démarre votre application avec rechargement automatique en cas de modification |
| `npm test` | Exécute tous les tests automatisés pour vérifier que rien n'est cassé |
| `npm run check` | Vérifie la compilation TypeScript et lance les tests |

---

## 📚 En savoir plus

- Consultez le **[Guide du Vibe Coder](./GUIDE_DU_VIBE_CODER.md)** pour apprendre à bien formuler vos demandes à l'IA.
- Consultez le catalogue d'**[Exemples de Prompts](./docs/IDEES_PROMPTS.md)** pour trouver l'inspiration.
- Prenez connaissance du **[Code de conduite WTM Montréal](./CODE_OF_CONDUCT.md)** pour un événement inclusif, respectueux et bienveillant.
- Projet distribué sous licence open source **[MIT](./LICENSE)** par **ctrlweb**.

---

*Conçu avec ❤️ par Émilie et Daniel de l'agence [ctrlweb](https://ctrlweb.ca) pour le BuildAthon (Women Techmakers Montréal + IVADO + Prompts2Products).*
