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

- **Node.js** >= 18.0.0 ([Download](https://nodejs.org/))
- **npm** >= 9.0.0 (comes with Node.js)
- **Docker Desktop** ([Download](https://www.docker.com/products/docker-desktop/)) - For PostgreSQL and Redis
- **Python** >= 3.10 (Optional - only needed for AI service) ([Download](https://www.python.org/downloads/))

### Step-by-Step Installation

#### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone <repository-url>
cd SkillProof

# Install all dependencies
npm run install:all
```

#### 2. Setup Environment Variables

```bash
# Frontend
cd packages/frontend
cp .env.example .env.local
# Edit .env.local if needed

# Backend
cd ../backend
cp .env.example .env
# Edit .env if needed

# AI Service (optional)
cd ../ai-service
cp .env.example .env
# Edit .env if needed

# Return to root
cd ../..
```

**Note**: The default `.env` files are pre-configured. You may need to adjust:
- Database credentials if different from defaults
- API keys (OpenAI for AI service)
- Port numbers if conflicts occur

#### 3. Start Database Services (Docker)

```bash
# Start PostgreSQL and Redis using Docker Compose
docker compose up -d

# Verify containers are running
docker compose ps
```

**Important**: 
- PostgreSQL runs on port **5433** (to avoid conflicts with local PostgreSQL on 5432)
- Redis runs on port **6379**
- If you have a local PostgreSQL on port 5432, the Docker container uses 5433 automatically

#### 4. Initialize Database

```bash
cd packages/backend

# Run database migrations
npm run migration:run

# Expected output: "Migration InitialSchema has been executed successfully."
```

#### 5. Start Development Servers

**Option A: Start All Services (Recommended)**

```bash
# From root directory
npm run dev:no-ai  # Without AI service (if Python not installed)
# OR
npm run dev        # With all services (requires Python)
```

This will start:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:4000
- **AI Service**: http://localhost:8000 (only if Python installed)

**Option B: Start Services Individually**

```bash
# Terminal 1 - Frontend
npm run dev:frontend

# Terminal 2 - Backend
npm run dev:backend

# Terminal 3 - AI Service (requires Python)
npm run dev:ai
```

### Verify Installation

1. **Frontend**: Visit http://localhost:3000
   - You should see "SkillProof - The Trust Layer for Remote Hiring"

2. **Backend**: Visit http://localhost:4000/api/health
   - You should see: `{"status":"ok","timestamp":"...","service":"skillproof-backend"}`

3. **AI Service** (if running): Visit http://localhost:8000/health
   - You should see: `{"status":"ok","service":"skillproof-ai-service"}`

### Common Issues & Solutions

#### Port Already in Use

If you get `EADDRINUSE` errors:

**Windows:**
```bash
# Find process using port
netstat -ano | findstr :4000

# Kill process (replace PID)
taskkill /F /PID <PID>
```

**macOS/Linux:**
```bash
# Find and kill process
lsof -ti:4000 | xargs kill -9
```

#### Database Connection Failed

1. **Check Docker containers are running:**
   ```bash
   docker compose ps
   ```

2. **Verify database port in `.env`:**
   ```env
   DATABASE_PORT=5433  # Should be 5433, not 5432
   ```

3. **Restart containers:**
   ```bash
   docker compose restart
   ```

#### Python Not Found (AI Service)

- **Option 1**: Install Python 3.10+ from [python.org](https://www.python.org/downloads/)
  - Make sure to check "Add Python to PATH" during installation
- **Option 2**: Run without AI service: `npm run dev:no-ai`
  - You can set up AI service later when needed

#### Workspace Not Found Error

If you see workspace errors, make sure you're in the root directory and run:
```bash
npm install
npm run install:all
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

### Database Management

```bash
cd packages/backend

# Generate a new migration
npm run migration:generate -- src/migrations/MigrationName

# Run pending migrations
npm run migration:run

# Revert last migration
npm run migration:revert
```

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
cd packages/frontend && npm run test
cd packages/backend && npm run test
```

### Linting

```bash
# Lint all packages
npm run lint

# Lint specific package
cd packages/frontend && npm run lint
cd packages/backend && npm run lint
```

### Docker Commands

```bash
# Start services
docker compose up -d

# Stop services
docker compose down

# View logs
docker compose logs

# Restart services
docker compose restart

# Check status
docker compose ps
```

## 📚 Documentation

- [Project Overview](./OverView.txt) - Complete product overview and vision
- [Features](./Features.txt) - Detailed feature list and improvements
- [Task Breakdown](./breakdown.txt) - MVP task breakdown and epics
- [Application Flow](./App_Flow/) - Complete application workflow documentation
  - [Part 1](./App_Flow/APP_FLOW_PART1.md) - Landing, Auth, Candidate, AI Interview
  - [Part 2](./App_Flow/APP_FLOW_PART2.md) - Blockchain, Public Profiles, Employer
  - [Part 3](./App_Flow/APP_FLOW_PART3.md) - Error Handling, User Journeys, Data Flow

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

## 🗂️ Project Structure

```
SkillProof/
├── packages/
│   ├── frontend/              # Next.js 14 frontend
│   │   ├── src/
│   │   │   ├── app/          # Next.js App Router pages
│   │   │   ├── components/   # React components
│   │   │   ├── lib/          # Utilities and API client
│   │   │   ├── store/        # Zustand state management
│   │   │   └── types/        # TypeScript types
│   │   └── package.json
│   │
│   ├── backend/              # NestJS backend API
│   │   ├── src/
│   │   │   ├── database/     # Database configuration
│   │   │   ├── users/        # User entities and modules
│   │   │   ├── migrations/   # Database migrations
│   │   │   └── data-source.ts
│   │   └── package.json
│   │
│   └── ai-service/           # Python/FastAPI AI service
│       ├── main.py           # FastAPI application
│       ├── requirements.txt  # Python dependencies
│       └── .env.example
│
├── contracts/                # Solidity smart contracts (to be added)
├── docker-compose.yml        # PostgreSQL and Redis services
├── package.json              # Root monorepo configuration
└── README.md                 # This file
```

## 🔧 Environment Variables

### Frontend (`packages/frontend/.env.local`)
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_AI_SERVICE_URL=http://localhost:8000
NEXT_PUBLIC_BLOCKCHAIN_NETWORK=polygon
NEXT_PUBLIC_CONTRACT_ADDRESS=
```

### Backend (`packages/backend/.env`)
```env
PORT=4000
DATABASE_HOST=localhost
DATABASE_PORT=5433
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=skillproof
REDIS_HOST=localhost
REDIS_PORT=6379
JWT_SECRET=your-secret-key
```

### AI Service (`packages/ai-service/.env`)
```env
PORT=8000
OPENAI_API_KEY=your-openai-api-key
CORS_ORIGINS=http://localhost:3000,http://localhost:4000
```

## 🚦 Development Workflow

1. **Start Docker services**: `docker compose up -d`
2. **Run migrations**: `cd packages/backend && npm run migration:run`
3. **Start dev servers**: `npm run dev:no-ai` (or `npm run dev` with Python)
4. **Make changes** - Hot reload is enabled
5. **Test endpoints** - Use http://localhost:4000/api/health for backend

## 📝 License

[Add your license here]

## 🤝 Contributing

[Add contributing guidelines here]

## 🆘 Need Help?

- Check the [Application Flow documentation](./App_Flow/) for detailed workflows
- Review [Project Overview](./OverView.txt) for product vision
- Ensure Docker containers are running: `docker compose ps`
- Verify environment variables are set correctly
- Check service logs for detailed error messages
