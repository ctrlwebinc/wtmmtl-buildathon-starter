# Règle d'Architecture : Séparation des Couches

Cette règle garantit que le projet reste propre, compréhensible et facile à étendre même quand le développement est très rapide durant le hackathon.

## 1. Flux des dépendances
Le flux des dépendances est unidirectionnel, de l'extérieur vers le centre :
`Presentation (Web / API)` -> `Application (Use Cases)` -> `Domain (Règles métiers)`
L'infrastructure implémente les ports définis par le Domaine.

## 2. Ce qui est interdit
- **JAMAIS d'import de frameworks dans le Domaine** :
  `src/domain/` ne doit JAMAIS importer `express`, `drizzle-orm`, `better-sqlite3`, etc.
- **JAMAIS d'accès direct à la base de données depuis les contrôleurs Express** :
  Les routes Express appellent les Use Cases dans `src/application/`, qui appellent les interfaces du Domaine.

## 3. Emplacement des fichiers
- `src/domain/models/` : Entités pures et types métiers.
- `src/domain/ports/` : Interfaces TypeScript pour la persistance (ex: `ProjectRepository`).
- `src/application/use-cases/` : Orchestration des actions.
- `src/infrastructure/db/schema/` : Définition des tables Drizzle SQLite.
- `src/infrastructure/db/repositories/` : Classes concrètes qui interagissent avec `better-sqlite3`.
- `src/presentation/` : Serveur Express et routes HTTP.
- `public/` : Interface web utilisateur.
