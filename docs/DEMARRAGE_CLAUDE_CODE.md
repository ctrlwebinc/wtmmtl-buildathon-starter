# 🚀 Démarrer avec Claude Code

*(For the English version, see [CLAUDE_CODE_SETUP.md](./CLAUDE_CODE_SETUP.md))*

[← Retour au README](../README.md)

---

## 1. Installer Claude Code

> ℹ️ Claude Code nécessite un abonnement Claude **Pro**, **Max**, **Team** ou **Enterprise** (ou un compte API Claude Console).

Deux façons de l'utiliser, au choix :

- **Application Claude Desktop (ZÉRO ligne de commande, recommandée pour les débutant·e·s)** : téléchargez-la sur 👉 **[claude.com/download](https://claude.com/download)**, installez-la en suivant les instructions de la page, puis connectez-vous. Claude Code se trouve dans l'onglet **Code** de l'application.
- **Dans le terminal** : suivez les instructions d'installation de 👉 **[code.claude.com/docs/fr/quickstart](https://code.claude.com/docs/fr/quickstart)**, puis lancez `claude` une première fois pour vous connecter.

---

## 2. Démarrer votre projet

### Option 1 : Dans l'application Claude Desktop (ZÉRO ligne de commande) 🌟

1. Créez un **dossier vide** sur votre ordinateur pour votre projet BuildAthon (ex. : `Documents/buildathon`).
2. Ouvrez **Claude Desktop** et allez dans l'onglet **Code**.
3. Démarrez une nouvelle session en sélectionnant ce dossier vide comme dossier de travail.
4. Si un sélecteur de mode est proposé au bas de la zone de discussion, choisissez **« Auto »** s'il est disponible, sinon **« Accepter les modifications »** (*Accept edits*), pour que Claude puisse travailler sans vous interrompre à chaque fichier.
5. Envoyez ce prompt à Claude :
   > *« Clone le dépôt https://github.com/ctrlwebinc/wtmmtl-buildathon-starter directement dans ce dossier (avec `git clone <url> .`) et prépare mon environnement pour le BuildAthon. Ensuite, lis CLAUDE.md et suis ses consignes. »*

   > 🛡️ **Autorisations Claude Code** : Si Claude vous demande une confirmation pour `git clone` ou `npm install`, choisissez **« Yes, and don't ask again »** (Oui, et ne plus demander) pour travailler sans interruption. En revanche, pour des suppressions de fichiers (comme `rm -rf`), choisissez simplement **« Yes »** (une seule fois) par mesure de prudence.

6. Claude va cloner le gabarit, installer les dépendances (`npm install`) et vous souhaiter la bienvenue.
7. Partagez-lui ensuite votre idée de projet, et Claude construira l'application avec vous !

> 💡 **Astuce** : Si une commande comme `/grill-me` n'est pas reconnue juste après l'installation, démarrez une nouvelle session dans le même dossier : Claude Code chargera alors toutes les commandes du projet.

*(Note : Si vous aviez déjà cloné le dépôt auparavant, démarrez simplement une session dans le dossier existant).*

### Option 2 : Via le Terminal (Ligne de commande)
```bash
git clone https://github.com/ctrlwebinc/wtmmtl-buildathon-starter
cd wtmmtl-buildathon-starter
npm install
claude
```
Dites ensuite simplement « Bonjour ! » à Claude : il vous accueillera et vous guidera.

---

## 3. Et ensuite ?

- Lisez le **[Guide du Vibe Coder](../GUIDE_DU_VIBE_CODER.md)** (5 minutes) pour apprendre à bien piloter l'IA.
- Revenez au **[README](../README.md#-visualiser-votre-application-en-direct)** pour savoir comment voir votre application en direct dans le navigateur.
