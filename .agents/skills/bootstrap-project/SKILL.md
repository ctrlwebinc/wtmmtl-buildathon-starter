---
name: bootstrap-project
description: Guide pas-à-pas pour initialiser et générer la première version complète de l'application lorsqu'un participant présente son idée pour la première fois.
---

# Skill : Démarrage Initial du Projet (Bootstrap)

Utilise cette procédure dès que l'utilisateur exprime sa première idée de projet au début du hackathon.

## Étapes à suivre :

### 1. Vérification de l'environnement
- Vérifie si le dossier `node_modules` existe.
- Si non, lance ou demande l'autorisation d'exécuter `npm install`.

### 2. Modélisation Métier (Domain)
- Identifie les 1 ou 2 concepts clés de l'idée de l'utilisateur (ex: `Task`, `Idea`, `Event`, `Profile`).
- Crée l'entité dans `src/domain/models/<nom>.ts`.
- Crée l'interface du repository dans `src/domain/ports/<nom>-repository.port.ts`.

### 3. Persistance SQLite (Infrastructure)
- Crée la table SQLite Drizzle dans `src/infrastructure/db/schema/<nom>.sql.ts`.
- Crée la connexion `src/infrastructure/db/connection.ts` (avec création automatique du dossier `data/` si absent).
- Crée le repository concret `src/infrastructure/db/repositories/sqlite-<nom>-repository.ts`.
- Crée le mapper `src/infrastructure/db/mappers/<nom>.mapper.ts`.
- Exécute `npx drizzle-kit push` ou initialise les tables pour créer le fichier `data/app.db`.

### 4. Cas d'utilisation (Application)
- Crée un use case de création (ex: `create-<nom>.use-case.ts`).
- Crée un use case de lecture (ex: `list-<nom>s.use-case.ts`).

### 5. Serveur Web & API (Presentation)
- Crée `src/index.ts` qui initialise Express, branche les routes d'API (ex: `GET /api/<nom>s`, `POST /api/<nom>s`), et sert le dossier statique `public/`.
- Écoute par défaut sur le port 3000.

### 6. Interface Visuelle (Frontend)
- Modifie `public/index.html` pour remplacer la zone réservée par un formulaire attrayant et une liste dynamique qui interroge l'API.

### 7. Vérification, Test & Sécurité
- Crée un test unitaire dans `tests/unit/<nom>.test.ts` (utilisant un `InMemory<Nom>Repository`).
- Valide la sécurité : requêtes paramétrées avec Drizzle, validation Zod sur l'API, aucun `.innerHTML` non échappé dans `public/index.html`.
- Lance `npm test` pour t'assurer que tout passe.

### 8. Message d'accueil final
- Félicite le participant pour le lancement de son projet.
- Donne-lui les instructions simples :
  ```bash
  npm run dev
  ```
  et invite-le à ouvrir son navigateur sur `http://localhost:3000`.
