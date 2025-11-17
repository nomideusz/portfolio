# Use nginx to serve static files
FROM nginx:alpine

# Copy built static files to nginx html directory
COPY build/ /usr/share/nginx/html/

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80
