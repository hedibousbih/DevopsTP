# Étape 1 : Build de l'app
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --configuration production

# Étape 2 : Serveur NGINX pour servir les fichiers compilés
FROM nginx:alpine

COPY --from=build /app/dist/nom-de-ton-app /usr/share/nginx/html

# Copie optionnelle d'une config NGINX custom
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
