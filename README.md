# 🌸 WTM Montréal Hackathon — Starter Kit Vibe Coding

Bienvenue au **Hackathon Women Techmakers Montréal** ! 🚀

Ce gabarit de démarrage est spécialement conçu pour vous permettre de **vibe coder** votre projet de hackathon avec l'assistance d'**Antigravity**, même si vous n'avez jamais programmé en TypeScript ou configuré de base de données.

---

## 🎯 Comment démarrer en 3 étapes simples

### Étape 1 : Cloner le projet et installer
Ouvrez votre terminal dans votre dossier de travail :
```bash
git clone <url-de-votre-repo>
cd wtm-hackathon-agy-starter
npm install
```

### Étape 2 : Lancer Antigravity
Démarrez Antigravity dans ce dossier :
```bash
agy
```
*(ou ouvrez ce dossier dans votre environnement Antigravity habituel)*.

### Étape 3 : Partagez votre idée !
Dès votre premier message à Antigravity, décrivez simplement votre projet en français :
> *« Bonjour ! Pour le hackathon, je veux créer une application d'entraide locale pour prêter des outils et des livres entre voisins à Montréal. »*

Antigravity prendra en charge toute la partie technique :
- Création des règles de gestion (`src/domain/`)
- Création de la base SQLite locale (`data/app.db`)
- Création de l'API web Express
- Création de l'interface graphique interactive dans votre navigateur (`public/index.html`)

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

---

*Fait avec ❤️ pour le Hackathon Women Techmakers Montréal.*
