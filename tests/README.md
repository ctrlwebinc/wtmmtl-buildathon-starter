# Tests du projet (`tests/`)

Pour garantir que le code généré par Antigravity reste toujours fonctionnel et sans bogue :

- `tests/unit/` : Tests rapides des règles métiers du Domaine (100% en mémoire, sans base de données, < 100ms).
- `tests/doubles/` : Faux dépôts de données en mémoire (`InMemory...Repository`) pour tester les cas d'utilisation sans dépendance SQL.
- `tests/integration/` : Tests de persistance vérifiant que les requêtes Drizzle et SQLite fonctionnent fidèlement.

Pour lancer tous les tests :
```bash
npm test
```
