# 🧠 SOC Memory Copilot

> An AI-powered Security Operations Center (SOC) assistant that remembers previous cybersecurity investigations using Cognee's persistent hybrid graph-vector memory.

Built for the **WeMakeDevs – The Hangover Part AI Hackathon**.

---

## 🚀 Problem

Traditional AI assistants are stateless.

Every new investigation starts from scratch, forcing security analysts to repeatedly analyze similar Indicators of Compromise (IOCs) without benefiting from previous investigations.

Cybersecurity investigations naturally build knowledge over time, but conventional LLMs lose that context after each session.

---

## 💡 Solution

SOC Memory Copilot combines threat intelligence with persistent AI memory.

Instead of forgetting previous investigations, the assistant stores investigation summaries inside **Cognee**, allowing future investigations to recall historical context and analyst knowledge.

This transforms the assistant from a simple chatbot into a continuously learning cybersecurity copilot.

---

## ✨ Features

- 📡 Live threat feed ingestion from AlienVault OTX
- 🔍 IOC investigation workflow
- 🧠 Persistent memory using Cognee
- 💾 MongoDB storage for investigation records
- 📊 React dashboard for analysts
- ⚡ FastAPI backend
- 🔄 Memory recall across investigations

---

## 🏗️ Architecture

```
                 AlienVault OTX
                       │
                       ▼
                FastAPI Backend
                       │
       ┌───────────────┴──────────────┐
       ▼                              ▼
   Cognee Memory                MongoDB Database
       │                              │
       └───────────────┬──────────────┘
                       ▼
                React Frontend
```

---

## 🛠️ Tech Stack

### Frontend
- React
- Axios
- CSS

### Backend
- FastAPI
- Python
- Requests

### Database
- MongoDB

### AI Memory
- Cognee

### Threat Intelligence
- AlienVault OTX API

---

## 📂 Project Structure

```
soc-memory-copilot/
│
├── backend/
│   ├── api/
│   ├── database/
│   ├── services/
│   ├── memory/
│   └── main.py
│
├── frontend/
│   ├── src/
│   ├── components/
│   └── services/
│
└── README.md
```

---

## ⚙️ How It Works

1. Fetch the latest threat intelligence from AlienVault OTX.
2. Display threats in the React dashboard.
3. Investigate an Indicator of Compromise (IOC).
4. Store investigation summaries in Cognee.
5. Recall previous investigations during future analysis.
6. Build a growing cybersecurity knowledge base over time.

---

## 🎯 Why Cognee?

Cognee enables the assistant to remember beyond a single chat session.

The project uses Cognee's memory lifecycle to:

- Remember investigation summaries
- Recall historical investigations
- Build long-term organizational knowledge
- Enable context-aware investigations

---

## 📈 Future Improvements

- Multi-IOC support (IP, Domain, URL, Hash)
- MITRE ATT&CK mapping
- Analyst feedback loop
- Memory visualization
- Threat correlation engine
- Multi-user SOC collaboration

---

## 📸 Demo



---

## 📖 Blog



---

## 👩‍💻 Author

**Priyadharshini R**

Computer Science Engineering Student

Built for the **WeMakeDevs – The Hangover Part AI Hackathon 2026**.

---

## 🙏 Acknowledgements

- WeMakeDevs
- Cognee
- AlienVault OTX
- FastAPI
- React
- MongoDB