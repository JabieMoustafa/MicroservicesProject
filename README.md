# Motus : Projet Microservice

"Motus" est un jeu de mots popularisé par l'émission de télévision "Motus". L'objectif du jeu est de trouver le mot mystère. Le joueur dispose de plusieurs tentatives pour réussir. Après chaque tentative, les lettres en commun mais mal placées avec le mot mystère et les lettres en commun et correctement placées sont affichées.

Notre application permet de jouer à ce jeu. Voici l'architecture du jeu Motus :

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

- npm install -g npm
- sudo apt-get install nodejs
- sudo apt install redis-server

## Exécution

1. Ouvrez un terminal à la racine du projet.
2. Exécutez docker-compose up --build.
3. Ouvrez un navigateur et accédez à :
   - [http://localhost:3000/login](http://localhost:3000/login) pour la page de connexion.
   - [http://localhost:3001/motus](http://localhost:3001/motus) pour jouer au jeu Motus.
   - [http://localhost:3002/score](http://localhost:3002/score) pour voir les scores précédents.

4. Tout d'abord, inscrivez-vous en entrant un nom d'utilisateur et le même mot de passe deux fois.
5. Ensuite, connectez-vous en utilisant le mot de passe et le nom d'utilisateur saisis lors de l'inscription.
6. Le mot mystère est généré aléatoirement. Pour connaître le mot mystère, ouvrez un navigateur à l'adresse [http://localhost:3001/word](http://localhost:3001/word).
7. Pour faire une tentative, saisissez le mot dans la barre de recherche et cliquez sur "Vérifier".
8. Pour voir le score des utilisateurs précédents, cliquez sur "Score".

## Licence

Le code est soumis à la licence MIT.


