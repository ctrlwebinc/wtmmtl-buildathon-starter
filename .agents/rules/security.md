# Règle de Sécurité : Garde-Fous Essentiels pour le Vibe Coding

Cette règle définit les standards de sécurité non négociables que l'agent IA doit appliquer automatiquement sur tout le code généré. Les participant·e·s étant néophytes, l'IA est la garante de la sécurité applicative.

---

## 1. Protection contre les Injections SQL (SQLite + Drizzle)
- **Requêtes paramétrées obligatoires** : Utilise toujours les méthodes du Query Builder de Drizzle (`db.select().from(...).where(eq(...))`).
- **Interdiction formelle de concaténer des chaînes dans du SQL** : Ne jamais écrire de code comme `db.run(`SELECT * FROM users WHERE name = '${input}'`)`.
- Si du SQL brut est exceptionnellement nécessaire, utilise toujours la fonction `sql` de Drizzle avec substitution paramétrée : `sql`SELECT * FROM users WHERE id = ${input}``.

---

## 2. Protection contre les failles XSS (Cross-Site Scripting) dans `public/`
- **Interdiction de `innerHTML` avec des données utilisateur** :
  - ❌ **Interdit** : `element.innerHTML = user.comment;` ou `<div>${user.name}</div>` inséré tel quel dans le DOM.
  - ✅ **Obligatoire** : Utiliser `element.textContent = user.comment;` ou une fonction d'échappement sécurisée avant toute injection dans le HTML.
- Échappement des caractères dangereux (`<`, `>`, `&`, `"`, `'`) avant insertion dans le DOM.

---

## 3. Validation stricte des entrées d'API (Zod)
- Tout endpoint Express recevant des données (`req.body`, `req.query`, `req.params`) **doit** valider le contenu à l'aide d'un schéma **Zod** dans la couche Application ou Présentation.
- Exemple obligatoire :
  ```typescript
  const CreateItemSchema = z.object({
    title: z.string().min(1, "Le titre est requis").max(100, "Titre trop long"),
    description: z.string().max(1000).optional(),
  });
  ```
- Cela empêche les données malformées, les dépassements de mémoire et les plantages inopinés du serveur.

---

## 4. Gestion des Secrets et Données Sensibles
- **Aucun secret dans le code source** : Clés d'API, mots de passe, tokens ou URLs privées ne doivent JAMAIS être écrits en dur dans les fichiers `.ts` ou `.html`.
- Utilise systématiquement `process.env.NOM_DU_SECRET` avec la bibliothèque `dotenv`.
- Crée toujours un fichier `.env.example` documentant les variables nécessaires sans inclure les vraies valeurs.

---

## 5. Protection du Serveur Express
- Limiter la taille des corps de requêtes JSON pour éviter les attaques par déni de service :
  ```typescript
  app.use(express.json({ limit: '1mb' }));
  ```
- Toujours intercepter les erreurs non gérées avec un middleware d'erreur global pour ne pas faire fuiter de stack traces techniques vers le navigateur du client.
