# Tauri + React + Typescript

This template should help get you started developing with Tauri, React and Typescript in Vite.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

# 🚀 Nexus POS - Modern Desktop Terminal

**Nexus POS** is a lightweight, stable, and high-performance desktop-based Point of Sales (POS) application. Built using Tauri v2 and React, it is designed to meet the needs of modern point-of-sale terminals with an intuitive interface and efficient system management..

[Image of a modern desktop application dashboard with a grid of colorful menu icons and a dark mode interface]

## ✨ Key Features
* **Native Desktop Performance**: Uses **Tauri v2** infrastructure for secure system resource access and minimal memory usage..
* **Reactive State Management**: Responsive global theme and authentication management using **Zustand**.
* **Dual Theme Support**: Dark and Light modes that automatically sync across all app components.
* **Automated CI/CD**: Automated build flows for Windows, Linux, and macOS managed through **GitHub Actions**.
* **Modern UI/UX**: **Glassmorphism** based interface using Tailwind CSS for a premium user experience.

## 🛠️ Tech Stack
* **Core Framework**: [Tauri v2](https://v2.tauri.app/) (Rust-based backend)
* **Frontend Library**: React + Vite + TypeScript
* **State Management**: Zustand
* **Styling**: Tailwind CSS
* **Package Manager**: pnpm
* **CI/CD**: GitHub Actions

## 🏗️ Project Structure
* `src/apps/`: Contains main modules such as Auth (Login) and Dashboard.
* `src/common/`: Contains global constants, hooks, and global store (Zustand).
* `src/routes/`: Navigation configuration and route protection (Auth Guard).
* `src-tauri/`: Rust backend configuration and operating system integration.

## 🚀 Starting Development

### Preparation
Make sure your system is installed:
1.  [Rust](https://www.rust-lang.org/tools/install) (Stable)
2.  Node.js (LTS)
3.  pnpm (`npm install -g pnpm`)

### Installation and Running
```bash
# Clone repository
git clone [https://github.com/username/nexus-pos-tauri.git](https://github.com/username/nexus-pos-tauri.git)

# Go to the project folder
cd nexus-pos-tauri

# Install dependencies
pnpm install

# Run development mode
pnpm tauri dev