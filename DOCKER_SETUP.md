# Docker Setup Guide for SkillProof

## Installing Docker

### Windows

1. **Download Docker Desktop**
   - Visit: https://www.docker.com/products/docker-desktop/
   - Download Docker Desktop for Windows
   - Run the installer and follow the setup wizard

2. **Start Docker Desktop**
   - After installation, start Docker Desktop from the Start menu
   - Wait for Docker to start (whale icon in system tray)

3. **Verify Installation**
   ```bash
   docker --version
   docker compose version
   ```

### macOS

1. **Download Docker Desktop**
   - Visit: https://www.docker.com/products/docker-desktop/
   - Download Docker Desktop for Mac
   - Open the .dmg file and drag Docker to Applications

2. **Start Docker Desktop**
   - Open Docker from Applications
   - Wait for Docker to start (whale icon in menu bar)

3. **Verify Installation**
   ```bash
   docker --version
   docker compose version
   ```

### Linux (Ubuntu/Debian)

1. **Install Docker Engine**
   ```bash
   # Update package index
   sudo apt-get update
   
   # Install prerequisites
   sudo apt-get install ca-certificates curl gnupg lsb-release
   
   # Add Docker's official GPG key
   sudo mkdir -p /etc/apt/keyrings
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
   
   # Set up repository
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   
   # Install Docker Engine
   sudo apt-get update
   sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
   ```

2. **Start Docker Service**
   ```bash
   sudo systemctl start docker
   sudo systemctl enable docker
   ```

3. **Add User to Docker Group** (optional, to run without sudo)
   ```bash
   sudo usermod -aG docker $USER
   # Log out and log back in for changes to take effect
   ```

4. **Verify Installation**
   ```bash
   docker --version
   docker compose version
   ```

## Using Docker Compose

### Docker Compose v2 (Recommended - Newer)

Docker Compose v2 is integrated into Docker Desktop and uses the `docker compose` command (with a space):

```bash
# Start services
docker compose up -d

# Stop services
docker compose down

# View logs
docker compose logs

# Check status
docker compose ps
```

### Docker Compose v1 (Legacy)

If you have the standalone docker-compose tool, use `docker-compose` (with a hyphen):

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs

# Check status
docker-compose ps
```

## Starting SkillProof Services

Once Docker is installed:

```bash
# Navigate to project root
cd SkillProof

# Start PostgreSQL and Redis
docker compose up -d
# OR
docker-compose up -d

# Verify services are running
docker compose ps
# OR
docker-compose ps

# You should see:
# - skillproof-postgres (running)
# - skillproof-redis (running)
```

## Troubleshooting

### "docker: command not found"
- Docker is not installed or not in PATH
- Install Docker Desktop (Windows/macOS) or Docker Engine (Linux)
- Restart your terminal after installation

### "docker compose: command not found" but "docker" works
- Try `docker-compose` (with hyphen) instead
- Or install Docker Compose plugin: `sudo apt-get install docker-compose-plugin` (Linux)

### Port Already in Use
If ports 5432 (PostgreSQL) or 6379 (Redis) are already in use:

1. **Stop existing services:**
   ```bash
   # Find what's using the port
   # Windows: netstat -ano | findstr :5432
   # Linux/Mac: lsof -i :5432
   ```

2. **Or change ports in docker-compose.yml:**
   ```yaml
   ports:
     - "5433:5432"  # Use 5433 instead of 5432
   ```

### Docker Desktop Not Starting
- **Windows**: Ensure WSL 2 is installed and updated
- **macOS**: Check system requirements (macOS 10.15+)
- Restart your computer if issues persist

### Permission Denied (Linux)
- Add your user to docker group: `sudo usermod -aG docker $USER`
- Log out and log back in
- Or use `sudo` (not recommended for development)

## Alternative: Without Docker

If you prefer not to use Docker, you can install PostgreSQL and Redis locally. See the main [SETUP.md](./SETUP.md) for local installation instructions.

