# Desk Chess XR — Devpost Submission & GitHub Deployment Kit

Prepared for **Meenamrutha Lakshmi Noolu** for the [Meta VR Start Developer Competition 2026](https://start-developer-competition-26.devpost.com/) ([Official Rules](https://start-developer-competition-26.devpost.com/rules) | [Competition Schedule](https://start-developer-competition-26.devpost.com/details/dates) | [Special Awards](https://start-developer-competition-26.devpost.com/details/special-awards)).

## 1. Quick Copy-Paste Submission Form Fields

| Devpost Form Field | Recommended Entry |
| :--- | :--- |
| **Submission Name** | Desk Chess XR: Gaze + Hands Spatial Tabletop Chess |
| **Submission Tagline** *(126 / 140 chars)* | Controller-free 3D multiplayer & AI chess with two-palm desk calibration, eye-gaze + pinch, shatter captures, and 3D timeline. |
| **Track** | **Gaming** (Games designed for hands-first or eyes and hands; seated, controller-free strategy) |
| **Division** | **New Experience** (Conceived and built from scratch within the competition window starting September 24, 2026) |
| **Special Awards Targeted** | **Best Social & Multiplayer Experience**, **Best First Five Minutes**, **Best Agentic Interaction**, **Best Accessibility Forward Experience** |
| **Target Launch Date** | December 15, 2026 |
| **Team Representative** | Meenamrutha Lakshmi Noolu (`meenanoolu@gmail.com`) — Lead XR Developer & Designer |

## 2. Project Description (448 Words — Under the 500-Word Suggested Limit)

### Inspiration
Classic tabletop chess is timeless, yet most digital chess games flatten the physical joy of sitting across a wooden board into 2D screens—or require bulky VR controllers that break immersion. Inspired by the [Immersive Web SDK (IWSDK)](https://iwsdk.dev/) agentic live-build workflow demonstrated in [Go From 0 to a VR Game With the Immersive Web SDK (Live Build)](https://www.youtube.com/watch?v=D04z9PYUSao&t=2139s), we built **Desk Chess XR** for the [Meta VR Start Developer Competition 2026](https://start-developer-competition-26.devpost.com/) to prove that a browser-delivered WebXR strategy game can feel both tangibly real and magically spatial without ever pairing a controller.

### What It Does & Design Guidelines Alignment
**Desk Chess XR** transforms any real-world desk—or a warm mahogany study—into a tactile 3D Staunton chessboard featuring metallic champagne-gold and crimson-lacquer pieces, crisp **A–H** and **1–8** coordinate borders, and spatial audio:
* **Two-Palm Surface Calibration (Best First Five Minutes):** Place both palms flat on your desk to trigger dual expanding cyan-and-gold calibration rings that merge across the surface and anchor a shadow-casting 3D chessboard directly in front of you in under five seconds.
* **Dual Gaze + Pinch & Direct Hand Grasping (Airplane Seat Test):** Built for both Meta VR Glasses and Meta Quest, players can lean back and gaze at any square while pinching remotely to levitate and arc-glide pieces, or reach out to physically grasp pieces over the board within a comfortable two-foot seated radius.
* **Explosive Battle Shatter Animations:** Every capture triggers a kinetic parabolic strike, a glowing shockwave ring, and 36 physics-driven crystalline lacquer shards that bounce across the wooden board with synthesized spatial clash audio.
* **Floating 3D Spatial Move Timeline & Evaluation Pillar:** A live 3D centipawn evaluation cylinder shifts smoothly between champagne gold and crimson red beside the board, paired with an interactive 3D helical ribbon of floating move nodes and an AI Gaze Threat Coach.
* **Instant AI Bot & Zero-Friction Multiplayer (One Bus Stop Test):** Judges can jump immediately into a 10-minute match against a 3-tier alpha-beta spatial AI bot, switch to 2-player seated pass-and-play, or sync across headsets and browser tabs via instant room codes.

### How We Built It
We engineered **Desk Chess XR** using [Three.js](https://threejs.org/) and the [WebXR Device API](https://immersiveweb.dev/) following the [Immersive Web SDK (IWSDK) Build & Deploy guidelines](https://iwsdk.dev/guides/08-build-deploy.html). All Staunton chess pieces (King, Queen, Rook, Bishop, Knight, and Pawn) are procedurally lathe-sculpted in 3D with physically based rendering (PBR) materials, procedural wood-grain textures, and synthesized Web Audio sound effects—keeping the entire application under a single fast-loading payload with zero external asset bottlenecks.

### Future Plans
Next, we plan to integrate WebXR shared spatial anchors for colocation on Meta Quest, voice-command algebraic notation, and Progressive Web App (PWA) packaging for the Meta Horizon Store.

## 3. How Hand Interactions Are Implemented & Future of VR (Optional Form Field)

**Desk Chess XR** implements a 100% controller-free interaction loop from cold start to checkmate:
1. **Two-Palm Desk Anchor Gesture:** Placing both hands palm-down calibrates the tabletop height and orientation via merging visual progress rings.
2. **Eye/Head Gaze + Remote Pinch:** A spatial gaze reticle highlights legal moves and tactical threats at a glance; a simple thumb-to-index pinch levitates the piece and releases it onto the target ring, making seated play effortless even in tight spaces.
3. **Direct Tabletop Grasping:** Players can reach directly over the board to grab and place pieces naturally, or pinch floating 3D timeline octahedrons to inspect move history.

What excites us most about the future of VR and Meta VR Glasses is the convergence of lightweight spatial web distribution ([IWSDK](https://iwsdk.dev/)) with low-effort eye-and-hand input—turning any everyday table into an instant social arena via a single URL.

## 4. Push `desk-chess` to Your GitHub Account & Deploy Live URL

Because your sandbox environment is isolated from your personal GitHub credentials, I have pre-built the complete **`desk-chess`** Git repository in `desk-chess.zip` with commits already authored under **Meenamrutha Lakshmi Noolu (`meenanoolu@gmail.com`)**, complete with a GitHub Pages deployment workflow (`.github/workflows/deploy.yml`) and `vercel.json`.

Run these three commands on your computer after unzipping `desk-chess.zip` to publish the repository under your GitHub account and enable your live playable link for the judges:

```bash
unzip desk-chess.zip -d desk-chess && cd desk-chess
gh repo create desk-chess --public --source=. --remote=origin --push
```

*(If you don't use the GitHub CLI `gh`, create an empty repository named `desk-chess` at [github.com/new](https://github.com/new) and run `git remote add origin https://github.com/<your-username>/desk-chess.git && git push -u origin main`.)*
