# 🚀 Getting Started with Antigravity

*(Pour la version française, consultez [DEMARRAGE_ANTIGRAVITY.md](./DEMARRAGE_ANTIGRAVITY.md))*

[← Back to README](../README.en.md)

---

## 1. Install Antigravity Desktop

1. Go to the official download page: 👉 **[antigravity.google/download](https://antigravity.google/download)**
2. Download the version for your system (macOS, Windows or Linux) and follow the installation instructions shown on the page.
3. Launch the app and sign in with your Google account.

---

## 2. Start Your Project

### Option 1: Directly in Antigravity Desktop (ZERO Command Line) 🌟
*The easiest and recommended method for beginners!*

1. Open the **Antigravity Desktop** application.
2. In the left-hand sidebar, click **Projects**, then select **“New Project”** (or the **`+`** icon) to create a dedicated workspace for your BuildAthon project.
3. Name your project or choose a destination folder on your computer.
4. Make sure the mode/model selector is set to **“Auto”** (located at the bottom of the chat panel) so Antigravity can autonomously orchestrate development and select the optimal model.
5. Inside this dedicated project session, send this prompt in the chat:
   > *“Clone https://github.com/ctrlwebinc/wtmmtl-buildathon-starter here and set up my environment for the BuildAthon. Then read GEMINI.md and follow its instructions.”*

   > 🛡️ **Antigravity Permissions**: When prompted for `git clone` or `npm install`, select **“Yes, and always allow [command]”** to work without interruptions. For file deletions (such as `rm -rf`), choose **“Allow this time”** as a safety precaution.

6. Antigravity will automatically clone the template into your dedicated folder and install dependencies (`npm install`).
7. Share your project idea in the chat, and Antigravity will take care of building the application for you!

*(Note: If you already cloned the repository previously, simply click on **Projects** and select your existing folder).*

### Option 2: Via Terminal (Command Line)
If you prefer using your standard terminal:
```bash
git clone https://github.com/ctrlwebinc/wtmmtl-buildathon-starter
cd wtmmtl-buildathon-starter
npm install
agy
```

---

## 3. What's Next?

- Read the **[Vibe Coding Guide](../VIBE_CODING_GUIDE.md)** (5 minutes) to learn how to steer the AI effectively.
- Head back to the **[README](../README.en.md#-view-your-app-live)** to see how to view your app live in the browser.
