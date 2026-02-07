# Docker Deployment Guide

This project includes Docker support for easy deployment and containerization.

## Files

- `Dockerfile` - Multi-stage Docker build configuration
- `docker-compose.yml` - Docker Compose service definition
- `.dockerignore` - Files to exclude from Docker build context

## Quick Start

### Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

The application will be available at `http://localhost:3000`

### Using Docker CLI

```bash
# Build the image
docker build -t chattoweb .

# Run the container
docker run -p 3000:3000 --name chattoweb chattoweb

# Stop the container
docker stop chattoweb

# Remove the container
docker rm chattoweb
```

## Docker Image Details

### Multi-Stage Build

The Dockerfile uses a 3-stage build process:

1. **deps** - Installs Node.js dependencies
2. **builder** - Builds the Next.js application
3. **runner** - Creates minimal production image

### Image Size

- Expected size: ~150-200MB (Alpine-based)
- Node.js version: 20 (LTS)
- Non-root user: `nextjs` (UID 1001)

### Environment Variables

The following environment variables are set in the container:

- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`
- `PORT=3000`
- `HOSTNAME=0.0.0.0`

## Health Check

The container includes a health check that runs every 30 seconds:

```bash
# Check container health
docker inspect --format='{{.State.Health.Status}}' chattoweb
```

## Troubleshooting

### Port already in use

If port 3000 is already in use, modify the `docker-compose.yml` port mapping:

```yaml
ports:
  - "3001:3000"  # Use port 3001 on host
```

### Build fails

Ensure you have the latest Docker version installed and that you're in the project root directory.

### Container exits immediately

Check logs:

```bash
docker-compose logs web
```

## Production Deployment

For production deployment:

1. Update environment variables in `docker-compose.yml`
2. Use a reverse proxy (nginx/Caddy) for SSL termination
3. Consider using Docker Swarm or Kubernetes for orchestration
4. Set up volume mounts for persistent data if needed

## Development

For development, it's recommended to use `npm run dev` directly instead of Docker for faster hot-reload times.
