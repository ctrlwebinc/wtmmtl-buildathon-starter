# Couche Infrastructure (`src/infrastructure`)

Ce dossier contient la **tuyauterie technique** (Base de données SQLite, Drizzle ORM, services externes).

### Rôle :
- Implémente concrètement les interfaces définies par le Domaine.
- Gère la persistance des données dans le fichier local SQLite `data/app.db`.

### Structure attendue :
- `db/schema/` : Définition des tables SQLite avec Drizzle (ex: `projects.sql.ts`).
- `db/connection.ts` : Initialisation de la connexion `better-sqlite3`.
- `db/mappers/` : Traducteurs qui convertissent une ligne SQL en entité du Domaine, et inversement.
- `db/repositories/` : Implémentations réelles des repositories (ex: `sqlite-project-repository.ts`).
