# 🌸 BuildAthon — Women Techmakers Montreal + IVADO + Prompts2Products

Welcome to the **BuildAthon** co-hosted by **Women Techmakers Montreal**, **IVADO**, and **Prompts2Products**! 🚀

*(Pour la version française, consultez [README.md](./README.md))*

The goal of this BuildAthon is to take a **real-world challenge from organizations and the workplace** (automating a repetitive task, streamlining a workflow, enhancing employee experience, creating an internal tool, simplifying access to information) and transform it into a **demonstrable, working prototype (MVP)** through *vibe coding* assisted by **Antigravity**.

This starter kit is specifically designed to let you build your solution even if you have never coded in TypeScript or set up a database before.

> 💡 **This starter kit was designed and crafted with ❤️ by Émilie & Daniel from the [ctrlweb](https://ctrlweb.ca) agency to empower all participants at the BuildAthon.**

---

## 🎯 How to Get Started? Two Simple Options

### Option 1: Directly in Antigravity Desktop (ZERO Command Line) 🌟
*The easiest method for beginners!*

1. Open the **Antigravity Desktop** application.
2. In the left-hand sidebar, click **“New Conversation”** to start a new session.
3. Simply send this prompt in the chat:
   > *“Clone https://github.com/ctrlwebinc/wtmmtl-buildathon-starter and set up my environment for the BuildAthon.”*
4. Antigravity will automatically clone the repository into your workspace and install dependencies (`npm install`).
5. Share your project idea in the chat, and Antigravity will take care of building the application for you!

*(Note: If the project is already cloned on your machine, you can also select it directly from the **Projects** section in the left sidebar).*

---

### Option 2: Via Terminal (Command Line)
If you prefer using your standard terminal:
```bash
git clone https://github.com/ctrlwebinc/wtmmtl-buildathon-starter
cd wtmmtl-buildathon-starter
npm install
agy
```

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
- Released under the open-source **[MIT License](./LICENSE)** by **ctrlweb**.

---

*Crafted with ❤️ by Émilie and Daniel from [ctrlweb](https://ctrlweb.ca) for the BuildAthon (Women Techmakers Montreal + IVADO + Prompts2Products).*
