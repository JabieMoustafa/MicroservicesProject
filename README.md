# Motus : Projet Microservice

Motus est un jeu de mots popularisé par l'émission de télévision "Motus". L'objectif du jeu est de trouver le mot mystère. Le joueur dispose de plusieurs tentatives pour réussir. Après chaque tentative, les lettres en commun mais mal placées avec le mot mystère et les lettres en commun et correctement placées sont affichées.

Notre application permet de jouer à ce jeu. Voici l'architecture du jeu Motus :

## Architecture

- scoring
  - scoring.js
  - scoring.html
- authentication
  - authentification.js
  - authentification.html
  - register.js
  - register.html
- apps
  - apps.js
  - apps.html

## Prérequis

Pour faire fonctionner notre programme, vous devez installer les packages suivants :

```bash
npm install -g npm
sudo apt-get install nodejs
sudo apt install redis-server
```
## Exécution

1. Ouvrez un terminal à la racine du projet.
2. Exécutez `docker-compose up --build`.
3. Ouvrez un navigateur et accédez à :
   - [http://localhost:5000/login](http://localhost:5000/login) pour la page de connexion.
   - [http://localhost:3000/motus](http://localhost:3000/motus) pour jouer au jeu Motus.
   - [http://localhost:4000/score](http://localhost:4000/score) pour voir les scores précédents.

Tout d'abord, inscrivez-vous en entrant un nom d'utilisateur et le même mot de passe deux fois.
Ensuite, connectez-vous en utilisant le mot de passe et le nom d'utilisateur saisis lors de l'inscription.
Le mot mystère est généré aléatoirement.
Pour faire une tentative, saisissez le mot dans la barre de recherche et cliquez sur "Submit".
Pour voir le score des utilisateurs précédents, cliquez sur "Score".

## Licence

Le code est soumis à la licence MIT.

