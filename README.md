# MockMind – AI Interview Copilot
<img width="1262" height="714" alt="image" src="https://github.com/user-attachments/assets/865229f4-ac4e-4742-a341-f2539fcaee08" />

MockMind is a company-aware AI interview preparation platform that generates personalized technical, coding, and behavioral interview prep based on:

- Your resume
- Target company
- Interview role

Built using AWS Bedrock, Minimax LLMs, and Datadog observability to support scalable, production-grade AI workflows.

---

## 🚀 Overview

MockMind transforms interview preparation into a structured, intelligent workflow:

1. Create your profile and upload your resume.
2. Add an upcoming interview (company + role).
3. Receive AI-powered preparation tailored specifically to that interview.

Unlike generic question banks, MockMind adapts preparation dynamically based on role and company context.

---

## 🧠 Core Concept

MockMind is:

> Company + Role + Resume Aware Interview Intelligence.

When a user enters:
- Company (e.g., Google)
- Role (e.g., Data Scientist)

The system generates structured preparation in:

- Technical concepts
- Coding challenges
- Behavioral questions

All aligned with the candidate’s experience and target role.

---

## 🏗️ Architecture

### Frontend
- React
- TypeScript
- Vite
- TailwindCSS

### AI Layer
- AWS Bedrock (LLM orchestration)
- Minimax models for structured question generation
- Prompt engineering for role-aware generation
- Resume-context injection pipeline

### Observability & Monitoring
- Datadog for:
  - LLM latency monitoring
  - API request tracking
  - Error logging
  - Performance metrics
  - System health dashboards

The observability layer ensures production reliability and scalable AI performance.

---

## 🧩 Product Flow

### Step 1 – Profile Setup
Users provide:
- Personal information
- Experience level
- Resume upload

Resume data is parsed and used for contextual personalization.

### Step 2 – Applications
Users enter:
- Company name
- Role title

Each entry becomes a dedicated preparation workspace.

<img width="1271" height="718" alt="image" src="https://github.com/user-attachments/assets/04147a4a-a829-4e3b-920a-6b8ba78ccfb1" />

### Step 3 – Interview Prep
Preparation is divided into:

- Technical
- Coding
- Behavioral

Questions are generated using:
- Company-specific patterns
- Role expectations
- Resume-based contextual awareness

---

## 🎯 Key Features

- Resume-aware AI generation
- Company-specific interview alignment
- Role-based question structuring
- AI-powered mock session generation
- Observability-first architecture
- Scalable LLM backend via AWS Bedrock
- Production monitoring via Datadog

---

## 📂 Project Structure

src/ ├── App.tsx ├── components/ ├── pages/ ├── hooks/ └── styles/



Designed for modular AI expansion and backend integration.

---

## 🔮 Roadmap

- Resume parsing automation
- Interview simulation mode
- Agent-based interview reasoning
- Analytics dashboard
- Cloud deployment pipeline
- Multi-model orchestration

---

## 🛠️ Getting Started

### Install dependencies

```bash
npm install
```

Run development server

```
npm run dev
```

🌩️ Infrastructure Stack
* AWS Bedrock for LLM orchestration
* Minimax LLM for structured interview generation
* Datadog for monitoring and observability
* Scalable cloud-ready architecture
