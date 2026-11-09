# Couche Domaine (`src/domain`)

Ce dossier est le **cœur des règles d'affaires** de votre projet.

### Règles fondamentales pour l'agent IA et les développeurs :
1. **Zéro dépendance externe** : Aucun import depuis `express`, `better-sqlite3`, `drizzle-orm`, ou le web.
2. **Pureté et logique métier** : On n'y trouve que des modèles (entités métiers), des objets de valeur et des interfaces de repositories (*ports*).
3. **Facile à tester** : Toutes les règles métier ici doivent pouvoir être testées à 100% en quelques millisecondes sans base de données.

### Structure attendue :
- `models/` : Les concepts clés de votre application (ex: `User`, `Project`, `Mentor`).
- `ports/` : Les interfaces définissant ce dont le domaine a besoin (ex: `ProjectRepository`).
- `services/` : Les règles de calcul ou de validation métier complexes qui touchent plusieurs entités.
