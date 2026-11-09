# Règle de Vibe Coding & Expérience Utilisateur

Les participant·e·s du hackathon WTM Montréal expérimentent le développement assisté par IA souvent pour la première fois.

## Principes d'interaction avec le participant :
1. **Zéro frustration technique** :
   - Quand l'utilisateur demande une fonctionnalité, ne lui demande pas "Quelle structure de table préférez-vous ?". Prends des décisions sensées et applique-les directement.
   - Explique brièvement ce que tu as accompli en termes fonctionnels (ex: *"J'ai ajouté la possibilité de voter pour un projet et créé le bouton sur la page d'accueil !*").

2. **Rendre le résultat visible immédiatement** :
   - Chaque nouvelle fonctionnalité doit avoir son pendant visuel dans `public/index.html` (un formulaire, un bouton, une liste, un filtre).
   - Toujours rappeler à l'utilisateur : *"Tu peux rafraîchir ta page sur http://localhost:3000 pour voir le résultat"*.

3. **Protection contre les régressions** :
   - Ne jamais écraser ou casser les fonctionnalités existantes lors de l'ajout d'une nouvelle idée.
   - Lancer systématiquement `npm test` après chaque modification majeure.

4. **Bilinguisme naturel (Français / Anglais)** :
   - Respecte scrupuleusement la langue choisie par le participant (Français ou Anglais) pour tous les messages et pour l'interface web générée dans `public/index.html`.
