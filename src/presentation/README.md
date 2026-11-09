# Couche Présentation (`src/presentation`)

Ce dossier gère les **points d'entrée HTTP et l'API web** (Express).

### Rôle :
- Reçoit les requêtes HTTP (GET, POST, etc.) du navigateur ou du client.
- Appelle le Use Case correspondant dans `src/application/`.
- Renvoie la réponse JSON au format attendu ou gère les erreurs HTTP.

### Structure attendue :
- `routes/` : Définition des routes Express (ex: `projects.routes.ts`).
- `controllers/` : Gestionnaires de requêtes (parsing des paramètres, appel aux use cases).
- `server.ts` : Configuration de l'application Express et des middlewares.
