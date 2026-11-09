# 💡 The Vibe Coder's Guide (BuildAthon WTM Montreal + IVADO + Prompts2Products)

*(Pour la version française, consultez [GUIDE_DU_VIBE_CODER.md](./GUIDE_DU_VIBE_CODER.md))*

**Vibe Coding** is the art of building software by directing advanced AI like Antigravity or Claude Code, while staying 100% focused on **workplace needs, user experience, and delivered value**, rather than boilerplate syntax and low-level technical plumbing.

Here are essential tips to make your BuildAthon journey smooth and successful.

---

## 1. The Golden Rule: Small Steps 👣

Don't ask for your entire application at once. Build your project like a Lego set:

* **Step 1 — The Core MVP** :
  > *“Create the core app: I just want to post an item with a title, a category, and a description, and see the list of items.”*
* **Step 2 — Test & Verify** :
  Open your browser to `http://localhost:3000`, test the form, submit 2 or 3 items.
* **Step 3 — Add Features** :
  > *“Great! Now add a 'Contact' button on each item that opens a modal with a quick message form.”*
* **Step 4 — Polish UI** :
  > *“Enhance the homepage design with clean modern cards, warm colors, and a search filter at the top.”*

---

## 2. Leverage the Super-Commands 🪄

The template provides commands, available in both Antigravity and Claude Code, to help structure your thought process:

* **`/grill-me`** (Highly recommended when starting out!):
  Type `/grill-me` followed by your idea. Your AI copilot will interview you with 3 or 4 sharp questions to clarify what you really need before touching code.
  *Example:* `/grill-me I want to build an app helping female entrepreneurs in Montreal.`

* **`/plan`** :
  Ask your AI copilot to outline a step-by-step implementation plan before coding. Great for aligning on direction.

---

## 3. How to Handle Bugs or Errors 🛠️

If something doesn't display properly or an error shows up in your terminal:
1. **Don't panic!** This is completely normal.
2. Simply copy the error message or describe the issue to your AI copilot:
   > *“When I click the 'Submit' button, nothing happens and I see a 500 error in the console. Can you check and fix it?”*
3. It will inspect the code, fix the root cause, run tests (`npm test`), and get your app back in working shape.

---

## 4. System Permissions: How to Choose? 🛡️

To keep your computer secure, your AI copilot will occasionally ask you to approve terminal commands. Here is the golden rule to guide your choices:

### 🟢 1. Constructive commands (`git clone`, `npm install`, `npm test`, `tsx`)
* 👉 **Choose the permanent approval**: **“Yes, and always allow [command]”** in Antigravity, **“Yes, and don't ask again”** in Claude Code.
* **Why?** These are routine, constructive operations (downloading the template, installing libraries, running tests). Approving them permanently allows your AI copilot to work autonomously without interrupting you every 30 seconds for standard steps.

### ⚠️ 2. Destructive commands (`rm -rf`, deletions, database resets)
* 👉 **Allow once**: **“Allow this time”** in Antigravity, **“Yes”** in Claude Code.
* **Why?** Commands like `rm -rf test_dir` permanently delete files or directories. Even when the AI has a valid reason (e.g. cleaning up temporary test folders), **never grant permanent allow for `rm`**. Approving on a one-off basis keeps you in control and avoids accidental data loss.

---

## 5. 3 Rules of Thumb for Prompting

1. **Be specific about the desired outcome**:
   * ❌ *“Make it look better.”*
   * ✅ *“Use clean white cards with rounded corners, subtle shadows, and colored category badges.”*
2. **Give concrete examples**:
   * *“For instance, if the user chooses 'DIY / Tools', the badge should be light blue.”*
3. **Regularly ask AI to verify**:
   * Ask: *“Are all the tests still passing?”*

---

## 6. Security Check Before the Final Pitch 🛡️

Before demoing your prototype to the BuildAthon judges and mentors, ask your AI copilot for a security review (in Claude Code, you can also type `/security-audit`):
> *“Please do a security review of my app!”*

It will scan your entire codebase (SQL injection safety, XSS protection in the frontend, Zod input validation) and produce an easy-to-read **traffic-light report** (🟢 / 🟡 / 🔴) with automatic fixes if needed. It's a fantastic bonus to show off during your presentation!
