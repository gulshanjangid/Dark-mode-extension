# 🌙 Dark Mode Chrome Extension

A simple Chrome Extension that enables **Dark Mode** on any website with a single click.

This project demonstrates how to build a **Chrome Extension (Manifest V3)** using JavaScript.

---

# 📌 Features

* 🌙 Toggle dark mode on any webpage
* ⚡ One-click activation
* 🧩 Built using Chrome Extension Manifest V3
* 💻 Beginner-friendly project
* 🪶 Lightweight and fast

---

# 📁 Project Structure

```
dark-mode-extension/
│── manifest.json
│── background.js
│── README.md
```

---

# ⚙️ Installation Guide

Follow these steps to run the extension locally.

## Step 1 — Download or Clone the Project

You can either download the files manually or clone:

```
git clone https://github.com/your-username/dark-mode-extension.git
```

Or create the folder manually:

```
dark-mode-extension
│── manifest.json
│── background.js
```

---

## Step 2 — Open Chrome Extensions Page

Open Google Chrome and go to:

```
chrome://extensions/
```

---

## Step 3 — Enable Developer Mode

Turn **Developer Mode ON** (top-right corner).

---

## Step 4 — Load the Extension

Click:

```
Load unpacked
```

Then select the folder:

```
dark-mode-extension
```

The extension will now appear in Chrome.

---

## Step 5 — Run the Extension

1. Open any website
2. Click the extension icon
3. Dark mode will activate 🌙
4. Click again to disable

---

# 🧠 How It Works

When the extension icon is clicked:

1. A script is injected into the current tab
2. The extension checks if dark mode is already enabled
3. If enabled → remove dark mode
4. If disabled → apply dark colors

This is handled using:

* `chrome.action`
* `chrome.scripting.executeScript`
* DOM manipulation



---

# 🛠️ Technologies Used

* JavaScript
* Chrome Extensions API
* HTML DOM Manipulation
* Manifest V3

---

# 🎯 Learning Objectives

This project helps you learn:

* How Chrome Extensions work
* Manifest V3 structure
* Script injection
* Event handling
* DOM styling

Perfect for:

* Beginners learning Chrome Extensions
* JavaScript practice
* Portfolio projects

---

# 🚀 Future Improvements

You can extend this project by adding:

* 🎨 Custom theme colors
* 💾 Remember dark mode per site
* 🧩 Popup UI
* ⚙️ Settings page
* 🌐 Smart dark mode detection

---

# 🐞 Known Limitations

* Some websites may not render perfectly
* Images and videos are not inverted
* Inline styles may override dark mode

---

# 📜 License

This project is open-source and free to use for learning purposes.

---

# 👨‍💻 Author

Created as a beginner-friendly Chrome Extension project.

You can customize and improve it as needed.

---

# ⭐ If You Like This Project

Consider:

* ⭐ Starring the repository
* 🍴 Forking the project
* 🧠 Adding new features

Happy Coding! 🚀
