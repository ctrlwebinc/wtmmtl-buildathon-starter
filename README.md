# 🌸 BuildAthon — Women Techmakers Montréal + IVADO + Prompts2Products

Bienvenue au **BuildAthon** co-organisé par **Women Techmakers Montréal**, **IVADO** et **Prompts2Products** ! 🚀

*(For the English version, see [README.en.md](./README.en.md))*

L'objectif de cet événement est de prendre un **problème concret du monde professionnel et des organisations** (automatiser une tâche répétitive, fluidifier un flux de travail, améliorer l'expérience employé, concevoir un outil interne, faciliter l'accès à l'information) et de le transformer en un **prototype fonctionnel et démontrable (MVP)** grâce au *vibe coding* assisté par **Antigravity**.

Ce gabarit de démarrage est spécialement conçu pour vous permettre de construire votre solution même si vous n'avez jamais programmé en TypeScript ou configuré de base de données.

> 💡 **Ce starter kit a été conçu et préparé avec ❤️ par Émilie et Daniel de l'agence [ctrlweb](https://ctrlweb.ca) pour faciliter le démarrage de tous les participant·e·s au BuildAthon.**

---

## 🎯 Comment démarrer ? Deux options simples

### Option 1 : Directement dans Antigravity Desktop (ZÉRO ligne de commande) 🌟
*La méthode la plus simple et recommandée pour les débutant·e·s !*

1. Ouvrez l'application **Antigravity Desktop**.
2. Dans la barre latérale gauche, cliquez sur **Projects**, puis sélectionnez **« New Project »** (ou l'icône **`+`**) pour créer un espace de travail dédié à votre BuildAthon.
3. Nommez votre projet ou choisissez un dossier de travail sur votre ordinateur.
4. Dans cette session dédiée, envoyez simplement ce prompt à Antigravity :
   > *« Clone le dépôt https://github.com/ctrlwebinc/wtmmtl-buildathon-starter ici et prépare mon environnement pour le BuildAthon. »*
   
   > 🛡️ **Autorisations Antigravity** : Si l'application vous demande une confirmation pour `git clone` ou `npm install`, choisissez **« Yes, and always allow [commande] »** pour travailler sans interruption. En revanche, pour des suppressions de fichiers (comme `rm -rf`), choisissez **« Allow this time »** par mesure de prudence.

5. Antigravity va automatiquement cloner le gabarit dans ce dossier dédié et installer les dépendances (`npm install`).
6. Partagez-lui ensuite votre idée de projet, et Antigravity construira toute l'application pour vous !

*(Note : Si vous aviez déjà cloné le dépôt auparavant, il vous suffit de cliquer sur **Projects** et d'ouvrir le dossier existant).*

---

### Option 2 : Via le Terminal (Ligne de commande)
Si vous préférez utiliser votre terminal classique :
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
