Motus : Microservice Project
"Motus" is a word game popularized by the television show "Motus." The objective of the game is to find the mystery word. The player has several attempts to succeed. After each attempt, the letters in common but misplaced with the mystery word and the letters in common and correctly placed are displayed.

Our application allows playing this game. Here is the architecture of the Motus game:

motus_final
scoring
scoring.js
scoring.html
authentication
authentification.js
authentification.html
register.js
register.html
apps
apps.js
apps.html


Prerequisites
To make our program work, you need to install the following packages:

npm install -g npm
sudo apt-get install nodejs
sudo apt install redis-server


Exécution
Open a command prompt at the project root.

Execute docker-compose up --build.

Open a browser and navigate to [http://localhost:3000](http://localhost/login).

First, sign up by entering a username and the same password twice.

Then, log in using the password and username entered during sign-up.

The mystery word is generated randomly. To know the mystery word, open a browser at [http://localhost:3000/word](http://localhost/login).

To make an attempt, type the word in the search bar and click on "Vérifier."

To see the score of previous users, click on "Score."


License
The code is subject to the MIT License.


