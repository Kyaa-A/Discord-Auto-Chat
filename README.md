> ⭐ **If you find this script useful, drop a star — it really helps!**
> ![GitHub Repo stars](https://img.shields.io/github/stars/Kyaa-A/Discord-Auto-Chat?style=social)

# 💬 Discord Plume Chat Bot (Human Style)

A Tampermonkey userscript that casually sends **human-like messages about Plume** in Discord chats. Great for vibing in servers without sounding like a bot.

---

## 📦 Features

- 🧠 Random, chill messages about Plume + Nostr
- ⏱️ Sends messages every 2–5 minutes (randomized)
- 😎 Looks like a real person chatting
- 👻 No UI, just runs quietly in the background

---

## 🤖 How It Works

- Waits for a Discord text box
- Pastes a random message from a list
- Simulates Enter keypress to send it
- Repeats every few minutes with variation

Example message:
> *“bruh plume got no ads?? why did no one tell me this earlier”*

---

## 🚀 Installation

> 🧩 Requires [Tampermonkey](https://www.tampermonkey.net/) installed in your browser.

1. Install Tampermonkey if you haven’t already
2. Click the link below to install the script:

👉 **[Install the script via GitHub](https://raw.githubusercontent.com/Kyaa-A/Discord-Auto-Chat/main/script.js)**

3. Join a server or channel on Discord and let it do its thing (wait 5 seconds on page load)

---

## 🛠️ Configuration (Optional)

You can change the message frequency or customize the message list in the script:

```js
const MIN_INTERVAL = 120_000; // 2 minutes
const MAX_INTERVAL = 300_000; // 5 minutes

const MESSAGES = [
  "yo plume’s actually kinda good lol",
  "bruh plume got no ads?? why did no one tell me this earlier",
  "tbh i just post random stuff on plume and it somehow feels better than twitter",
  // ...add your own
];
