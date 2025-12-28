# SkillProof

> AI + Blockchain Hiring Trust Platform - "The Trust Layer for Remote Hiring"

## 🎯 Overview

SkillProof is a platform that verifies real skills of developers and freelancers using AI-driven interviews and stores verified proof on blockchain for tamper-proof trust.

**Think:** LinkedIn + GitHub + AI Interviewer + Blockchain Credential

## 🏗️ Monorepo Structure

```
skillproof/
├── packages/
│   ├── frontend/          # Next.js 14 frontend application
│   ├── backend/           # NestJS backend API
│   └── ai-service/        # Python/FastAPI AI interview service
├── contracts/             # Solidity smart contracts
├── docs/                  # Additional documentation
└── App_Flow/              # Application workflow documentation
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **Python** >= 3.10
- **PostgreSQL** >= 14
- **Redis** >= 7
- **Docker** (for AI code execution sandbox)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SkillProof
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Setup environment variables**
   ```bash
   # Copy example env files
   cp packages/frontend/.env.example packages/frontend/.env.local
   cp packages/backend/.env.example packages/backend/.env
   cp packages/ai-service/.env.example packages/ai-service/.env
   ```

4. **Start development servers**
   ```bash
   npm run dev
   ```
   
   This will start:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:4000
   - AI Service: http://localhost:8000

### Individual Services

```bash
# Frontend only
npm run dev:frontend

# Backend only
npm run dev:backend

# AI Service only
npm run dev:ai
```

## 📦 Packages

### Frontend (`packages/frontend`)
- **Framework:** Next.js 14 (App Router)
- **Styling:** styled-components
- **State:** Zustand/Redux
- **Web3:** Ethers.js
- **Port:** 3000

### Backend (`packages/backend`)
- **Framework:** NestJS
- **Database:** PostgreSQL
- **Cache:** Redis
- **Auth:** Supabase Auth
- **Port:** 4000

### AI Service (`packages/ai-service`)
- **Framework:** FastAPI (Python)
- **LLM:** OpenAI / Open-source models
- **Execution:** Docker sandbox
- **Port:** 8000

## 🛠️ Development

### Building

```bash
# Build all packages
npm run build

# Build individual packages
npm run build:frontend
npm run build:backend
```

### Testing

```bash
# Run all tests
npm run test

# Run tests for specific package
npm run test --workspace=frontend
npm run test --workspace=backend
```

### Linting

```bash
# Lint all packages
npm run lint
```

## 📚 Documentation

- [Project Overview](./OverView.txt)
- [Features](./Features.txt)
- [Task Breakdown](./breakdown.txt)
- [Application Flow](./App_Flow/)

## 🔗 Tech Stack

### Frontend
- Next.js 14 (App Router)
- styled-components
- Zustand / Redux
- Ethers.js

### Backend
- Node.js
- NestJS
- PostgreSQL
- Redis
- Supabase Auth

### AI
- Python
- FastAPI
- LLM APIs (OpenAI / open-source)
- Docker sandbox for code execution

### Blockchain
- Solidity
- Polygon / Base
- ERC-721 NFTs
- IPFS

## 📝 License

[Add your license here]

## 🤝 Contributing

[Add contributing guidelines here]
