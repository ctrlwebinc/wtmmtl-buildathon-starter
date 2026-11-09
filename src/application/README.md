# Couche Application (`src/application`)

Ce dossier orchestre les **cas d'utilisation** (Use Cases) de l'application.

### Rôle :
- Reçoit les demandes (ex: "Créer un nouveau projet", "Assigner un mentor").
- Valide les données d'entrée (souvent avec `zod`).
- Appelle le Domaine pour exécuter la règle métier.
- Demande au Repository (via son interface) de sauvegarder le résultat.

### Structure attendue :
- `use-cases/` : Un fichier ou une classe par action utilisateur (ex: `create-project.use-case.ts`).
- `dtos/` : Les formats d'entrée et de sortie des requêtes.
