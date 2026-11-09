# Règle de Persistance : SQLite Local & Drizzle ORM

## Configuration de la base de données :
- **Emplacement du fichier** : Toujours dans `data/app.db`.
- **Création du dossier automatique** : Lors de l'initialisation du client SQLite dans `src/infrastructure/db/connection.ts`, assure-toi que le dossier `data/` existe avec `fs.mkdirSync('data', { recursive: true })` avant d'ouvrir `better-sqlite3`.

## Gestion des tables :
- Chaque table est déclarée dans `src/infrastructure/db/schema/<entity>.sql.ts` avec `sqliteTable`.
- Utilise les types natifs : `text('id').primaryKey()`, `text('name').notNull()`, `integer('created_at', { mode: 'timestamp' })`.
- Pour appliquer le schéma localement lors de l'initialisation, tu peux exécuter `npx drizzle-kit push` ou exécuter le DDL SQLite au démarrage de l'app si nécessaire pour simplifier encore plus l'expérience.

## Mappers :
- Ne jamais exposer directement les lignes SQLite brutes au reste de l'application.
- Utilise un `Mapper` simple (ex: `ProjectMapper.toDomain(row)` et `ProjectMapper.toPersistence(entity)`) pour isoler le Domaine.
