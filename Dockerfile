# Use Node.js 20 for Railway deployment
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

# Expose port 3000 (Railway default)
EXPOSE 3000

# Start the application
CMD ["node", "build/index.js"]
