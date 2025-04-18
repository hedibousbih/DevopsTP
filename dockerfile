
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Build the Angular app (default build, not production)
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Move to the build output directory
WORKDIR /app/dist/tp-note-prog-web

# Expose port and start server
EXPOSE 8080
CMD ["serve", "-s", ".", "-l", "8080"]

