
FROM node:18

WORKDIR /app

# installer les dépendances de l'application Angular
COPY package*.json ./
RUN npm install

# Copier les fichiers de l'application Angular dans le conteneur
COPY . .

# Build the Angular app (default build, not production)
RUN npm run build

# installer le serveur de production
RUN npm install -g serve


WORKDIR /app/dist/tp-note-prog-web

# exposer le port 8080 pour le serveur de production
EXPOSE 8080
CMD ["serve", "-s", ".", "-l", "8080"]

