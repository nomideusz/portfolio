# Use Node.js 20 for Caprover deployment
FROM node:20-alpine

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package files and lock files
COPY package*.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm build

# Set default port and host (Caprover will override these)
ENV PORT=3000
ENV HOST=0.0.0.0

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["node", "build/index.js"]
