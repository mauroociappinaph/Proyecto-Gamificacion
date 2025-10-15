FROM node:20-slim
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy files needed for installation
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/backend/package.json ./apps/backend/
COPY apps/frontend/package.json ./apps/frontend/
COPY packages/config/package.json ./packages/config/

# Install all monorepo dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Set working directory to backend application
WORKDIR /app/apps/backend

# Build the backend application
RUN pnpm --filter backend build

EXPOSE 3001
CMD ["pnpm", "run", "start:prod"]
