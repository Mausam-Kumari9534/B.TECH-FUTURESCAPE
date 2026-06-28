# B.TECH FUTURESCAPE

[![React](https://img.shields.github.io/badge/React-18.3-blue?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.github.io/badge/TypeScript-5.8-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.github.io/badge/Vite-5.4-purple?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.github.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.github.io/badge/Framer_Motion-12.2-ff69b4?logo=framer&logoColor=white)](https://www.framer.com/motion/)

An interactive, premium career guidance platform designed to help engineering students explore cutting-edge career paths, salary insights, and step-by-step learning roadmaps across four major B.Tech domains.

---

## 🌟 Features

- **Futuristic Dark & Light Themes**: Smooth, adaptive theme transitions between a deep slate-navy dark mode and a clean off-white light mode.
- **Glassmorphic UI Design**: Custom glassmorphism with subtle glowing highlights, gradients, and 3D shadows.
- **Detailed Career Roadmaps**: Expandable career cards showing structured learning paths (Frontend, Backend, VLSI, CAD, Site Engineering, etc.), average packages, and industry demand.
- **Interactive Micro-animations**: Smooth hover transitions, spinning icons, and entering animations powered by Framer Motion.
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices.

---

## 📐 Architecture & Flow

### ASCII Architecture Diagram

```text
+-----------------------------------------------------------------+
|                           VITE APP                              |
+-----------------------------------------------------------------+
                                |
                                v
+-----------------------------------------------------------------+
|                           ROUTING                               |
|        (BrowserRouter -> App.tsx -> ThemeToggle)                |
+-----------------------------------------------------------------+
         |                  |                |               |
         v                  v                v               v
    +---------+       +-----------+      +-------+       +-------+
    |  Home   | ----> |  Streams  | ---> | CS/IT |       | Civil |
    | (Index) |       | Selection |      +-------+       +-------+
    +---------+       +-----------+      | Mech  |       | ECE   |
         |                  |            +-------+       +-------+
         +------------------+----------------+---------------+
                                |
                                v
                +-------------------------------+
                |           COMPONENTS          |
                | - FloatingBlobs (BG)          |
                | - CareerCard (Roadmaps)       |
                | - GlassCard (Layouts)         |
                | - Footer (Creator Info)       |
                +-------------------------------+
```

### Navigation Flowchart

```mermaid
graph TD
    A[Start: Index.tsx /] -->|Explore / Scroll| B[Explore Departments Section]
    A -->|Click 'Click Here'| C[Streams.tsx /streams]
    B -->|Click Branch Card| D[Branch Pages]
    C -->|Select Branch Card| D
    
    subgraph Branch Pages
        D1[CSIT.tsx /cs-it]
        D2[Mechanical.tsx /mechanical]
        D3[Electronics.tsx /electronics]
        D4[Civil.tsx /civil]
    end
    
    D1 & D2 & D3 & D4 -->|Click Career Card| E[Expandable CareerCard Component]
    E -->|View Roadmap| F[Interactive Roadmaps]
    
    D1 & D2 & D3 & D4 -->|Click 'Back to Streams'| C
    C -->|Click 'Back to Home'| A
    
    G[ThemeToggle Component] -.--->|Toggles Class| H[document.documentElement .light]
```

---

## 🛠️ Tech Stack

- **Framework**: React 18 (TypeScript)
- **Build Tool**: Vite
- **Styling**: TailwindCSS & Custom CSS Variables (HSL)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State/Routing**: React Router DOM v6

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mausam-Kumari9534/B.TECH-FUTURESCAPE.git
   cd B.TECH-FUTURESCAPE
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:8082](http://localhost:8082) in your browser to view the app.

4. Build for production:
   ```bash
   npm run build
   ```

---

## ✍️ Creator

Designed & Developed with ❤️ by **[Mausam Kumari](https://github.com/Mausam-Kumari9534)**.
