# cookies avec express

Gestion sans session des cookies, avec redis et cookie-parser.  

## front-end :  
La page accueil permet d'accepter ou non les cookies. Si les cookies sont acceptés, la page sécurisée est autorisée.  

## back-end :   
Le dossier controller contient les fonctions de rendus des fichiers ejs.  
Le dossier middlewares gère les cookies.  
Le dossier static est pour css et js.  
Le dossier views contient les ejs.   

## installation :  

Redis :
```bash
docker-compose up -d  
```

Serveur :  
```bash
npm install 
``` 

Tests : 
```bash
npm run test  
```  

Démarrage du serveur : 
```bash
node index.js
```  
Voir en console pour le port d'accès.




