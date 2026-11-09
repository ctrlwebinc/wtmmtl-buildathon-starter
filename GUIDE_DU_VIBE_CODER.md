# 💡 Le Guide du Vibe Coder (BuildAthon WTM Montréal + IVADO + Prompts2Products)

*(For the English version, see [VIBE_CODING_GUIDE.md](./VIBE_CODING_GUIDE.md))*

Le **Vibe Coding**, c'est l'art de créer des applications complètes en pilotant une intelligence artificielle de pointe comme Antigravity ou Claude Code, en restant concentré·e sur **le besoin professionnel, l'expérience utilisateur et la valeur générée**, plutôt que sur la syntaxe et la plomberie technique.

Voici quelques conseils d'or pour maximiser vos chances de briller lors du BuildAthon.

---

## 1. La Règle d'Or : Itérer par petits pas 👣

Ne demandez pas toute votre application d'un seul coup. Construisez votre projet comme un jeu de Lego :

* **Étape 1 — Le Cœur (MVP minimal)** :
  > *« Crée l'application de base : je veux juste pouvoir ajouter une annonce avec un titre, une catégorie et une description, et voir la liste des annonces. »*
* **Étape 2 — Test & Vérification** :
  Ouvrez votre navigateur sur `http://localhost:3000`, testez le formulaire, ajoutez 2 ou 3 annonces.
* **Étape 3 — L'enrichissement** :
  > *« Super ! Maintenant, ajoute un bouton 'Contacter' sur chaque annonce qui ouvre une boîte de dialogue avec un formulaire de message. »*
* **Étape 4 — Le peaufinage** :
  > *« Améliore le design de la page d'accueil avec des couleurs plus chaleureuses et un champ de recherche en haut. »*

---

## 2. Utilisez les super-commandes 🪄

Le gabarit fournit des commandes magiques, disponibles dans Antigravity comme dans Claude Code, particulièrement utiles pour cadrer votre réflexion :

* **`/grill-me`** (Fortement recommandé au démarrage !) :
  Tapez `/grill-me` suivi de votre idée. Votre copilote IA vous posera 3 ou 4 questions percutantes pour clarifier votre besoin avant de se lancer.
  *Exemple :* `/grill-me Je veux faire une app pour aider les femmes entrepreneures à Montréal.`

* **`/plan`** :
  Demande à votre copilote IA de détailler son plan d'attaque étape par étape avant d'écrire la moindre ligne de code. Idéal pour valider ensemble la direction.

---

## 3. Comment réagir en cas d'erreur ou de bogue ? 🛠️

Si quelque chose ne s'affiche pas comme prévu ou si une erreur s'affiche dans votre terminal :
1. **Pas de panique !** C'est tout à fait normal.
2. Copiez simplement le message d'erreur ou décrivez le symptôme à votre copilote IA :
   > *« Quand je clique sur le bouton 'Enregistrer', rien ne se passe et j'ai une erreur 500 dans la console. Peux-tu vérifier et réparer ? »*
3. Il lira le code, corrigera le bogue, exécutera les tests (`npm test`) et remettra l'application en état de marche.

---

## 4. Les autorisations système : Comment choisir ? 🛡️

Pour garantir votre sécurité, votre copilote IA vous demandera parfois de confirmer certaines actions sur votre ordinateur. Voici la règle d'or pour savoir quoi choisir :

### 🟢 1. Les commandes constructives (`git clone`, `npm install`, `npm test`, `tsx`)
* 👉 **Choisissez l'autorisation permanente** : **« Yes, and always allow [commande] »** dans Antigravity, **« Yes, and don't ask again »** dans Claude Code.
* **Pourquoi ?** Ce sont des opérations indispensables et courantes (télécharger le gabarit, installer les bibliothèques, tester le code). En donnant une autorisation permanente, votre copilote IA peut travailler en toute autonomie sans vous interrompre toutes les 30 secondes pour une simple installation.

### ⚠️ 2. Les commandes destructives (`rm -rf`, suppressions, réinitialisations)
* 👉 **Autorisez une seule fois** : **« Allow this time »** dans Antigravity, **« Yes »** dans Claude Code.
* **Pourquoi ?** Les commandes comme `rm -rf test_dir` suppriment définitivement des fichiers ou des dossiers. Même si l'agent l'utilise légitimement (par exemple pour nettoyer un dossier de test temporaire), **ne donnez jamais d'autorisation permanente** pour `rm`. Autoriser une seule fois vous permet de garder la maîtrise et d'éviter toute suppression accidentelle.

---

## 5. Les 3 Règles d'Or pour vos Prompts

1. **Soyez précis·e sur le résultat attendu** :
   * ❌ *« Rends ça plus beau. »*
   * ✅ *« Utilise des cartes blanches avec des coins arrondis, une ombre légère et des badges de couleur pour les catégories. »*
2. **Donnez des exemples concrets** :
   * *« Par exemple, si l'utilisatrice choisit la catégorie 'Bricolage', le badge doit être bleu clair. »*
3. **Faites vérifier régulièrement à l'IA** :
   * Demandez-lui : *« Est-ce que les tests passent toujours bien ? »*

---

## 6. Le réflexe Sécurité avant le pitch final 🛡️

Avant de présenter votre prototype aux juges et aux mentors du BuildAthon, demandez à votre copilote IA une revue de sécurité (dans Claude Code, vous pouvez aussi taper `/security-audit`) :
> *« Fais une revue de sécurité de mon application ! »*

Il va scanner l'ensemble de votre projet (injections SQL, failles XSS dans la page web, validation des formulaires avec Zod) et vous donner un **rapport feu tricolore** (🟢 / 🟡 / 🔴) avec des corrections automatiques si nécessaire. C'est un énorme plus pour briller lors de votre pitch !

