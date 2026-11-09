# 🌸 WTM Montreal Hackathon — Vibe Coding Starter Kit

Welcome to the **Women Techmakers Montreal Hackathon**! 🚀

*(Pour la version française, consultez [README.md](./README.md))*

This starter kit is specifically designed to let you **vibe code** your hackathon project with **Antigravity**, even if you have never coded in TypeScript or set up a database before.

---

## 🎯 Getting Started in 3 Simple Steps

### Step 1: Clone the repository and install
Open your terminal in your workspace directory:
```bash
git clone <url-to-your-repo>
cd wtm-hackathon-agy-starter
npm install
```

### Step 2: Launch Antigravity
Start Antigravity in this folder:
```bash
agy
```
*(or open this directory in your favorite Antigravity environment).*

### Step 3: Share your idea!
From your very first message, Antigravity will welcome you and ask for your preferred language (**English or French**). Then, describe your project in plain words:
> *“Hello! For the hackathon, I want to build a local community app where neighbors in Montreal can lend each other tools and books.”*

Antigravity handles all the technical heavy lifting:
- Business rules & entities (`src/domain/`)
- Local SQLite database & schema (`data/app.db`)
- Express web API endpoints
- Interactive web frontend in your browser (`public/index.html`)

---

## 💻 View Your App Live

Once Antigravity has generated your project, start the local server:
```bash
npm run dev
```
Then open your browser to:
👉 **[http://localhost:3000](http://localhost:3000)**

Every time you ask Antigravity to add a feature (e.g. a vote button, search bar, new form), it updates the web interface so you can test it live!

---

## 🛠️ Helpful Commands

| Command | What does it do? |
| :--- | :--- |
| `npm run dev` | Starts the app with live hot-reloading on code changes |
| `npm test` | Runs all automated tests to ensure nothing is broken |
| `npm run check` | Checks TypeScript compilation and runs test suite |

---

## 📚 Learn More

- Check out the **[Vibe Coding Guide](./VIBE_CODING_GUIDE.md)** to learn how to prompt AI effectively.
- Explore the **[Prompt Ideas Catalog](./docs/PROMPT_IDEAS.md)** for project inspiration.
- Review the **[WTM Montreal Code of Conduct](./CODE_OF_CONDUCT.en.md)** for a respectful, welcoming event.

---

*Made with ❤️ for the Women Techmakers Montreal Hackathon.*
