# SkillProof Setup Guide

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** >= 18.0.0 ([Download](https://nodejs.org/))
- **npm** >= 9.0.0 (comes with Node.js)
- **Python** >= 3.10 ([Download](https://www.python.org/downloads/))
- **PostgreSQL** >= 14 ([Download](https://www.postgresql.org/download/))
- **Redis** >= 7 ([Download](https://redis.io/download))
- **Docker** ([Download](https://www.docker.com/get-started)) - For AI code execution sandbox

## Step-by-Step Setup

### 1. Clone and Install Dependencies

```bash
# Install root dependencies
npm install

# Install all workspace dependencies
npm run install:all
```

### 2. Setup Environment Variables

Create environment files for each service:

#### Frontend
```bash
cd packages/frontend
cp .env.example .env.local
# Edit .env.local with your configuration
```

#### Backend
```bash
cd packages/backend
cp .env.example .env
# Edit .env with your configuration
```

#### AI Service
```bash
cd packages/ai-service
cp .env.example .env
# Edit .env with your configuration
```

### 3. Setup Database and Redis

#### Option A: Using Docker Compose (Recommended)

**First, install Docker:**
- **Windows**: Download [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/)
- **macOS**: Download [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop/)
- **Linux**: Install Docker Engine and Docker Compose plugin

**Then start services:**

```bash
# Try Docker Compose v2 (newer versions)
docker compose up -d

# OR try Docker Compose v1 (older versions)
docker-compose up -d

# Verify services are running
docker compose ps
# OR
docker-compose ps
```

**Note**: If you get "command not found", Docker is not installed. See Option B or C below.

#### Option B: Local Installation

Install and run PostgreSQL and Redis locally:

**PostgreSQL:**
- **Windows**: Download from [postgresql.org](https://www.postgresql.org/download/windows/)
- **macOS**: `brew install postgresql@14 && brew services start postgresql@14`
- **Linux**: `sudo apt-get install postgresql-14` (Ubuntu/Debian)

**Redis:**
- **Windows**: Download from [redis.io](https://redis.io/download) or use WSL
- **macOS**: `brew install redis && brew services start redis`
- **Linux**: `sudo apt-get install redis-server`

Then update your `.env` files with local connection details.

#### Option C: Skip Database for Now (Development Only)

You can start development without the database. The frontend and AI service can run independently. You'll need to set up the database before implementing backend features that require it.

### 4. Initialize Database

```bash
cd packages/backend

# Run migrations (once migrations are created)
npm run migration:run
```

### 5. Start Development Servers

#### Option A: Start All Services Together

```bash
# From root directory
npm run dev
```

This will start:
- Frontend: http://localhost:3000
- Backend API: http://localhost:4000
- AI Service: http://localhost:8000

#### Option B: Start Services Individually

```bash
# Frontend only
npm run dev:frontend

# Backend only
npm run dev:backend

# AI Service only
npm run dev:ai
```

## Verification

### Check Services

1. **Frontend**: Visit http://localhost:3000
2. **Backend API**: Visit http://localhost:4000/api/health
3. **AI Service**: Visit http://localhost:8000/health

### Expected Responses

- **Backend Health**: `{"status":"ok","timestamp":"...","service":"skillproof-backend"}`
- **AI Service Health**: `{"status":"ok","service":"skillproof-ai-service"}`

## Project Structure

```
skillproof/
├── packages/
│   ├── frontend/              # Next.js 14 frontend
│   │   ├── src/
│   │   │   ├── app/          # Next.js App Router pages
│   │   │   ├── components/   # React components
│   │   │   ├── lib/          # Utilities and API client
│   │   │   ├── store/        # Zustand stores
│   │   │   └── types/        # TypeScript types
│   │   └── package.json
│   │
│   ├── backend/              # NestJS backend
│   │   ├── src/
│   │   │   ├── auth/         # Authentication module
│   │   │   ├── users/        # User management
│   │   │   ├── interviews/  # Interview management
│   │   │   └── verifications/ # Skill verification
│   │   └── package.json
│   │
│   └── ai-service/           # Python/FastAPI AI service
│       ├── main.py           # FastAPI app
│       ├── requirements.txt  # Python dependencies
│       └── .env.example
│
├── contracts/                # Solidity smart contracts (to be added)
├── docker-compose.yml        # Docker services (PostgreSQL, Redis)
└── package.json             # Root monorepo config
```

## Next Steps

After setup is complete, you can:

1. **Start building features**:
   - Authentication system
   - Database models
   - API endpoints
   - Frontend components

2. **Setup smart contracts**:
   - Deploy SkillProof NFT contract
   - Configure blockchain integration

3. **Configure AI service**:
   - Setup OpenAI API key
   - Configure Docker for code execution

## Troubleshooting

### Port Already in Use

If a port is already in use, either:
- Stop the service using that port
- Change the port in the respective `.env` file

### Database Connection Issues

- Verify PostgreSQL is running: `pg_isready`
- Check connection credentials in `packages/backend/.env`
- Ensure database exists: `createdb skillproof`

### Python Virtual Environment

For AI service, create and activate virtual environment:

```bash
cd packages/ai-service
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### Docker Issues

- Ensure Docker is running: `docker ps`
- Check Docker Compose: `docker-compose ps`
- View logs: `docker-compose logs`

## Development Tips

1. **Hot Reload**: All services support hot reload during development
2. **TypeScript**: Frontend and backend use TypeScript for type safety
3. **Linting**: Run `npm run lint` to check code quality
4. **Formatting**: Code is auto-formatted with Prettier

## Need Help?

- Check the main [README.md](./README.md)
- Review [Application Flow documentation](./App_Flow/)
- Check service-specific READMEs in each package

