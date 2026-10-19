# ⚡ CYBER-DECK // GAME DEVELOPMENT PORTFOLIO

A bespoke, responsive single-page web terminal hardware simulation built natively with clean semantic **HTML5**, custom **CSS3 variables**, and decoupled asynchronous **Vanilla JavaScript**. This repository serves as my official professional hub, hosting browser-playable game builds, technical case study modules, and runtime telemetry logging feeds.

🚀 **Live Deployment URL:** [https://github.io](https://github.io)

---

## 🕹️ HARDWARE ARCHITECTURE OVERVIEW

The application functions as a virtual "Cyber-Deck" operating system console tailored specifically for hosting real-time **Godot WebGL/WASM** or **Unity Web Player** compilations without sacrificing modularity or frontend performance.
[SYSTEM_ARCHIVE Directory] ──> Selects Target Node
│
┌───────────────────────────┴───────────────────────────┐
▼                                                       ▼
[Desktop Viewport]                                      [Mobile Viewport]
Injects sandboxed iframe                                Disables iframe wrapper
Mounts fully playable WASM Core                         Spawns responsive MP4 trailer loop

---

## 🛠️ TECHNICAL ARCHITECTURE COMPONENT BLOCKS

### 1. Hybrid Viewport Screen Swap (Mobile Safe-Mode Fallback)
WebGL assemblies routinely encounter terminal runtime constraints, memory inflation risks, and keyboard capturing issues on mobile device parameters. 
* **The Architecture:** Leverages CSS grid layouts combined with hardware-targeted media queries to completely remove the unplayable `<iframe>` DOM mount-point below `768px`.
* **The Solution:** Hot-swaps the layout natively for an optimized HTML5 inline player, loading a responsive looping trailer array corresponding to the selected project node.

### 2. Isolated Case Study Telementry Modules (Neon Modals)
To prevent recruiter friction and eliminate the latency of hard navigation to distinct sub-pages, project documentation is handled directly in-memory.
* **The Architecture:** Clicking a project asset node routes unique dataset payloads (Engine specifications, development lifecycle metadata, post-mortem summaries) dynamically into a structured, modal overlay container template.

### 3. Decoupled Architecture Blueprint
To adhere to clean engineering guidelines, the engine is cleanly abstracted across three dedicated source files:
* `index.html` — Encapsulates purely structural document markup layers.
* `style.css` — Evaluates aesthetic variables, animation matrices, text-shadow pulses, and CRT monitor visual properties.
* `app.js` — Controls DOM lifecycle parameters, artificial terminal compilation timing sequences, and live logger tracking blocks.

---

## 📥 REPOSITORY FILES & INSTALLATION

To run a simulation environment locally or alter the operational variables:

1. Clone this repository locally on your computer workstation:
   ```bash
   git clone https://github.com
   ```
2. Navigate directly into the deployment root layout folder:
   ```bash
   cd YOUR-REPO-NAME
   ```
3. Open `index.html` inside any standard modern web browser to mount the console environment. No local web-server execution or dependency tree initialization required.

---

## 🛰️ DIRECTORY INJECTION SCHEMATIC (Adding Your Projects)

To inject your own game projects into the runtime deck array, open `index.html` and append your asset parameters inside the `<ul class="nav-list">` using these clean semantic data fields:

```html
<li>
  <button class="deck-node" 
          data-url="YOUR_ITCH_IO_HTML_BUILD_EMBED_URL" 
          data-video="YOUR_DIRECT_TRAILER_MP4_URL" 
          data-title="PROJECT_CODENAME" 
          data-engine="GODOT_4.x_OR_UNREAL_5" 
          data-role="YOUR_EXACT_DEVELOPMENT_ROLE" 
          data-timeline="DEVELOPMENT_DURATION"
          data-desc="Your project architectural breakdown, post-mortem notes, and optimization victories.">
    PROJECT_NAME.WASM
  </button>
</li>
```

---

## 📝 DEV NOTES & SYSTEM LOGS

* **Zero Dependencies:** Engineered purely on native web foundations. Zero compilation frameworks, zero heavy third-party bundles, ensuring pristine load speeds for recruiters.
* **Itch.io Embed Constraint Configuration:** When copying your embed link from your hosting profile dashboard, verify your permissions enable `autoplay`, `fullscreen`, and `gamepad API` threads within the iframe attributes to ensure smooth gamepad and mouse capture initialization.

---
[SYS_LOG] System framework documentation: COMPILED.
[SYS_LOG] Core terminal profile: DEPLOYED // READY TO AUDIT.
