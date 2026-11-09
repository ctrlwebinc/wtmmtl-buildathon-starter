---
name: security-audit
description: Effectue une revue de sécurité complète et pédagogique de l'application (injections SQL, failles XSS, validation des entrées, fuites de secrets) et propose des corrections automatiques.
---

# Skill : Revue de Sécurité de l'Application

Utilise cette procédure dès qu'un participant ou un mentor demande :
> *« Fais une revue de sécurité »*, *« Est-ce que mon app est sécurisée ? »*, ou *« Lance un audit de sécurité »*.

---

## 🔍 Déroulement de l'Audit

Inspecte l'intégralité du code du projet selon les 5 points d'analyse ci-dessous :

### 1. Analyse Base de Données (Injections SQL)
- Parcourt tous les fichiers de `src/infrastructure/db/`.
- Vérifie que chaque requête utilise Drizzle ORM avec des paramètres préparés.
- Assure-toi qu'aucune chaîne de caractères externe n'est concaténée directement dans une clause SQL.

### 2. Analyse Frontend (Failles XSS)
- Parcourt `public/index.html` et les fichiers JavaScript clients.
- Recherche l'utilisation de `.innerHTML`, `document.write` ou d'insertions de variables dynamiques sans échappement HTML.
- Vérifie que les données provenant de l'API sont injectées via `.textContent` ou une méthode d'échappement sécurisée.

### 3. Analyse des Routes API (Validation des entrées)
- Parcourt `src/presentation/` et `src/application/`.
- Vérifie que chaque route `POST`, `PUT`, `PATCH` filtre ses entrées avec un schéma **Zod**.
- Vérifie que des messages d'erreur clairs sont renvoyés en cas de saisie invalide (statut HTTP 400).

### 4. Recherche de Fuites de Secrets
- Recherche la présence éventuelle de clés d'API (OpenAI, Stripe, etc.), de jetons JWT ou de mots de passe codés en dur dans le dépôt.
- Vérifie que `.env` est bien ignoré par `.gitignore` et qu'un fichier `.env.example` existe si des variables sont requises.

### 5. Robustesse du Serveur
- Vérifie que `express.json({ limit: '1mb' })` est en place.
- Vérifie la présence d'un gestionnaire d'erreurs pour éviter d'exposer les détails internes du serveur.

---

## 📋 Format du Rapport à présenter à l'utilisateur

Sois encourageant, clair et évite le jargon cryptique. Présente le rapport sous forme de **feu tricolore** :

```markdown
### 🛡️ Rapport de Sécurité WTM

🟢 **Points Forts (Sécurisé) :**
- [Ex: Requêtes SQLite 100% protégées contre les injections grâce à Drizzle ORM]
- [Ex: Toutes les données entrantes sont validées par Zod]

🟡 **Recommandations d'Amélioration :**
- [Ex: Ajouter une limite de 500 caractères sur le champ 'description' pour éviter les abus]

🔴 **Points d'Attention Critiques (si applicable) :**
- [Ex: Un affichage dans la page d'accueil utilise .innerHTML avec des données utilisateurs non échappées]
```

### 🛠️ Action Corrective Automatique :
Si des points 🟡 ou 🔴 sont détectés :
1. Explique simplement le risque en 1 phrase accessible à un débutant.
2. Propose immédiatement d'appliquer la correction automatique : *"Veux-tu que je corrige ces points tout de suite pour toi ?"* (ou applique-les directement si le prompt demandait de sécuriser l'application).
