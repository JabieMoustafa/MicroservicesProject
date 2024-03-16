# Utilisation de l'image officielle Node.js version 14 comme base
FROM node:14

# Définition du répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copie des fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie de tous les fichiers de votre application dans le conteneur
COPY . .

# Commande à exécuter lorsque le conteneur démarre
CMD [ "node", "index.js"]


