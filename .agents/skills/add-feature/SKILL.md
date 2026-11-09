---
name: add-feature
description: Procédure pour ajouter une nouvelle fonctionnalité de bout en bout sans casser l'existant.
---

# Skill : Ajout d'une Fonctionnalité

Utilise cette procédure lorsqu'un participant souhaite enrichir son application avec une nouvelle idée (ex: "Je veux ajouter un système de vote", "Ajoute un filtre par catégorie", "Ajoute une date limite").

## Démarche :

1. **Règle métier (Domain)** :
   - Ajoute le comportement ou le nouveau champ dans le modèle du domaine (`src/domain/models/`).
   - Ajuste l'interface du port si nécessaire (`src/domain/ports/`).

2. **Mise à jour Base de données (Infrastructure)** :
   - Met à jour le schéma Drizzle (`src/infrastructure/db/schema/`).
   - Met à jour le mapper pour refléter le changement.
   - Applique les changements avec `npx drizzle-kit push`.

3. **Orchestration (Application)** :
   - Crée ou modifie le Use Case correspondant dans `src/application/use-cases/`.

4. **API HTTP (Presentation)** :
   - Ajoute la route correspondante dans `src/presentation/routes/` ou dans `src/index.ts`.

5. **Interface Utilisateur (Public)** :
   - Ajoute le contrôle visuel (bouton, champ, affichage) dans `public/index.html`.
   - Rends l'action réactive en JavaScript.

6. **Validation & Sécurité** :
   - Assure-toi que les nouvelles entrées sont validées par Zod et que le DOM n'utilise pas de `innerHTML` non échappé.
   - Exécute `npm test` pour s'assurer que les anciens tests et les nouveaux réussissent.
   - Indique à l'utilisateur ce qui a été fait et qu'il peut tester immédiatement sur son navigateur.
