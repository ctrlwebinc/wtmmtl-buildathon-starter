# 🚀 Getting Started with Claude Code

*(Pour la version française, consultez [DEMARRAGE_CLAUDE_CODE.md](./DEMARRAGE_CLAUDE_CODE.md))*

[← Back to README](../README.en.md)

---

## 1. Install Claude Code

> ℹ️ Claude Code requires a Claude **Pro**, **Max**, **Team** or **Enterprise** subscription (or a Claude Console API account).

Two ways to use it, your choice:

- **Claude Desktop app (ZERO command line, recommended for beginners)**: download it from 👉 **[claude.com/download](https://claude.com/download)**, install it following the instructions on the page, then sign in. Claude Code lives in the app's **Code** tab.
- **In the terminal**: follow the installation instructions at 👉 **[code.claude.com/docs/en/quickstart](https://code.claude.com/docs/en/quickstart)**, then run `claude` once to sign in.

---

## 2. Start Your Project

### Option 1: In the Claude Desktop App (ZERO Command Line) 🌟

1. Create an **empty folder** on your computer for your BuildAthon project (e.g. `Documents/buildathon`).
2. Open **Claude Desktop** and go to the **Code** tab.
3. Start a new session and select that empty folder as the working folder.
4. If a mode selector is shown at the bottom of the chat panel, choose **“Auto”** if available, otherwise **“Accept edits”**, so Claude can work without interrupting you for every file.
5. Send this prompt to Claude:
   > *“Clone https://github.com/ctrlwebinc/wtmmtl-buildathon-starter directly into this folder (using `git clone <url> .`) and set up my environment for the BuildAthon. Then read CLAUDE.md and follow its instructions.”*

   > 🛡️ **Claude Code Permissions**: When prompted for `git clone` or `npm install`, select **“Yes, and don't ask again”** to work without interruptions. For file deletions (such as `rm -rf`), simply choose **“Yes”** (one time only) as a safety precaution.

6. Claude will clone the template, install dependencies (`npm install`) and welcome you.
7. Share your project idea, and Claude will build the application with you!

> 💡 **Tip**: If a command like `/grill-me` isn't recognized right after setup, start a new session in the same folder: Claude Code will then load all of the project's commands.

*(Note: If you already cloned the repository previously, simply start a session in the existing folder).*

### Option 2: Via Terminal (Command Line)
```bash
git clone https://github.com/ctrlwebinc/wtmmtl-buildathon-starter
cd wtmmtl-buildathon-starter
npm install
claude
```
Then simply say “Hello!” to Claude: it will welcome you and guide you.

---

## 3. What's Next?

- Read the **[Vibe Coding Guide](../VIBE_CODING_GUIDE.md)** (5 minutes) to learn how to steer the AI effectively.
- Head back to the **[README](../README.en.md#-view-your-app-live)** to see how to view your app live in the browser.
