# 🧩 Philosophical Quiz

A **real-time multiplayer quiz game** where players join dynamic rooms, answer thought-provoking questions, and climb the leaderboard in pursuit of philosophical glory. This project is a **learning exercise** that explores frontend and backend development, databases, caching, containerization, and version control.  

⚠️ **DISCLAIMER**: This project is still under development. It is **not** a production-ready application — please treat it as an experimental work-in-progress. Be careful.

---

## 📑 Table of Contents
- [Overview](#overview)
  - [Core Mechanics](#core-mechanics)
- [Software Stack](#software-stack)
- [Core Design Components](#core-design-components)
- [License](#license)

---

## 🌌 Overview

The **Philosophical Quiz** is more than a game — it is a playful exploration of philosophy’s history and techniques. Players compete for **objects of research** (trophies), earned by demonstrating speed, precision, and intellectual agility in constructing **problematic environments**.

A **problematic environment** is the arena of thought where philosophy thrives. It is composed of three essential elements:

1. **Questions** — the sparks that ignite inquiry.  
2. **Resources** — technical and historical references that guide players toward resolution.  
3. **The Problem** — an atomic or composite proposition expressing the full entity of the challenge.  
   > ⚠️ Note: Some problems may transcend the expressive capacity of the current age of the Universe.

Victories are immortalized in **room-specific leaderboards**, where scores are tracked and displayed in real time.

---

### 🎮 Core Mechanics

- Players can **join quiz rooms** and engage in real-time competition.  
- Each **object-of-research** acts as a trophy, won by successfully setting up a problematic environment.  
- The game begins once **enough players** have joined a room.  
- **Questions** appear live, and players must answer swiftly and accurately.  
- **Scores** are updated instantly and stored in the database.  
- A **leaderboard** showcases the top-performing philosophers in each room.  

---

## 🛠️ Software Stack

This project integrates a modern and versatile stack:

- **Frontend:** `HTML, CSS, JavaScript, TypeScript`  
- **Backend:** `Node.js, Express.js`  
- **Databases:**  
  - `PostgreSQL` with `Sequelize` or `TypeORM` for relational data  
  - `MongoDB` with `Mongoose` (optional, for flexible data structures)  
- **Caching:** `Redis` for lightning-fast access to quiz questions and leaderboard data  
- **Containerization:** `Docker` to encapsulate frontend, backend, and database services  
- **Version Control:** `Git` and `GitHub` for collaborative development and history tracking  

---

## 🧩 Core Design Components

The architecture is designed around **real-time interactivity** and **scalable performance**:

- Players seamlessly **join quiz rooms**.  
- The **game session** begins when the threshold of participants is met.  
- **Questions** are broadcast in real time, ensuring synchronized play.  
- **Scores** are updated instantly and persisted in the database. 
- A **leaderboard** dynamically reflects the evolving competition.

### How the technologies fit together:
- **Frontend:** HTML, CSS, and TypeScript craft the user interface.  
- **Backend:** Node.js with Express orchestrates game logic and API endpoints.  
- **Database:** PostgreSQL (with Sequelize/TypeORM) stores accounts, questions, and scores. MongoDB (via Mongoose) may handle flexible data.  
- **Caching:** Redis accelerates access to frequently used data.  
- **Containerization:** Docker ensures reproducibility and portability across environments.  
- **Version Control:** Git and GitHub safeguard the codebase and enable collaboration.
- **Software Design Principles:** `SOLID principles`, `Design Patterns`
- **DevOps Essentials:** Deployment, monitoring, and scalability practices    

---

## 📜 License

**MIT License**

Copyright (c) 2025 **porcielf-eagle**

Permission is hereby granted, free of charge, to any person obtaining a copy  
of this software and associated documentation files (the "Software"), to deal  
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all  
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  
SOFTWARE.
