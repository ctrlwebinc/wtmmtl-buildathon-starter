# 🚀 Démarrer avec Antigravity

*(For the English version, see [ANTIGRAVITY_SETUP.md](./ANTIGRAVITY_SETUP.md))*

[← Retour au README](../README.md)

---

## 1. Installer Antigravity Desktop

1. Rendez-vous sur la page de téléchargement officielle : 👉 **[antigravity.google/download](https://antigravity.google/download)**
2. Téléchargez la version correspondant à votre système (macOS, Windows ou Linux) et suivez les instructions d'installation affichées sur la page.
3. Lancez l'application et connectez-vous avec votre compte Google.

---

## 2. Démarrer votre projet

### Option 1 : Directement dans Antigravity Desktop (ZÉRO ligne de commande) 🌟
*La méthode la plus simple et recommandée pour les débutant·e·s !*

1. Ouvrez l'application **Antigravity Desktop**.
2. Dans la barre latérale gauche, cliquez sur **Projects**, puis sélectionnez **« New Project »** (ou l'icône **`+`**) pour créer un espace de travail dédié à votre BuildAthon.
3. Nommez votre projet ou choisissez un dossier de travail sur votre ordinateur.
4. Assurez-vous que le mode est bien réglé sur **« Auto »** (dans le sélecteur au bas de la zone de discussion) pour qu'Antigravity orchestre le développement de manière fluide et autonome.
5. Dans cette session dédiée, envoyez simplement ce prompt à Antigravity :
   > *« Clone le dépôt https://github.com/ctrlwebinc/wtmmtl-buildathon-starter ici et prépare mon environnement pour le BuildAthon. Ensuite, lis GEMINI.md et suis ses consignes. »*

   > 🛡️ **Autorisations Antigravity** : Si l'application vous demande une confirmation pour `git clone` ou `npm install`, choisissez **« Yes, and always allow [commande] »** pour travailler sans interruption. En revanche, pour des suppressions de fichiers (comme `rm -rf`), choisissez **« Allow this time »** par mesure de prudence.

6. Antigravity va automatiquement cloner le gabarit dans ce dossier dédié et installer les dépendances (`npm install`).
7. Partagez-lui ensuite votre idée de projet, et Antigravity construira toute l'application pour vous !

*(Note : Si vous aviez déjà cloné le dépôt auparavant, il vous suffit de cliquer sur **Projects** et d'ouvrir le dossier existant).*

### Option 2 : Via le Terminal (Ligne de commande)
Si vous préférez utiliser votre terminal classique :
```bash
git clone https://github.com/ctrlwebinc/wtmmtl-buildathon-starter
cd wtmmtl-buildathon-starter
npm install
agy
```

---

## 3. Et ensuite ?

- Lisez le **[Guide du Vibe Coder](../GUIDE_DU_VIBE_CODER.md)** (5 minutes) pour apprendre à bien piloter l'IA.
- Revenez au **[README](../README.md#-visualiser-votre-application-en-direct)** pour savoir comment voir votre application en direct dans le navigateur.
