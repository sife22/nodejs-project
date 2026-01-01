# Application Express.js simple
Cette application est une démonstration simple d'une API REST créée avec Express.js, le but était de déployer une simple application sur Microsoft Azure via la conteneurisation

## Description
L'application comporte trois endpoints :

1. `GET /` : Renvoie le message "Bonjour Microsoft Azure, im Sif eddine".
2. `GET /profil` : Renvoie le message "Bonjour, this is your profil, mrahba bik khouya".
3. `GET /login` : Renvoie le message "Maendnach login akhouya, smouhatte".

## Configuration requise
- Node.js version 14 ou supérieure

## Installation et exécution
1. Clonez le dépôt Git :
   git clone https://github.com/sife22/nodejs-project.git
2. Accédez au répertoire du projet :
   cd nodejs-project
3. Installez les dépendances :
   npm install
4. Démarrez l'application :
   npm start

L'application sera accessible à l'adresse `http://localhost:3000`.

## Conteneurisation avec Docker
Vous pouvez également exécuter cette application dans un conteneur Docker. Le Dockerfile fourni permet de construire et d'exécuter l'application dans un environnement conteneurisé.

1. Construisez l'image Docker :
   docker build -t nodejs-project .

2. Exécutez le conteneur :
   docker run -p 3000:3000 nodejs-project

L'application sera accessible à l'adresse `http://localhost:3000`