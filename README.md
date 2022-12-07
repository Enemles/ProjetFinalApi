<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Api" />

  &#xa0;

</div>

<h1 align="center">Projet final API</h1>

<!-- Status -->

<h2 align="center">YourOwnCinematicReview API</h2>

<p align="center">
  <a href="#dart-equipe">Equipe</a> &#xa0; | &#xa0; 
  <a href="#sparkles-projet">Projet</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Techno</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Start</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Requêtes</a> &#xa0; | &#xa0;
</p>

<br>

## 🎯 Equipe ##

<ul>
  <li>Jules Bloux</li>
  <li>Thomas Fourties</li>
  <li>Selmène Farhi</li>
</ul>

## ✨ Projet ##

:heavy_check_mark: Publier un avis sur un film avec une note et un commentaire;\
:heavy_check_mark: Pouvoir like ou dislike les avis d'autres utilisateurs;

## 🚀 Techno ##

Les techno suivantes ont été utilisé pour cette api :

- [Node.js](https://nodejs.org/en/)
- [Express](https://pt-br.reactjs.org/)
- [Sequelize](https://reactnative.dev/)
- [OpenApi](https://www.typescriptlang.org/)

## 🏁 Start ##

```bash

# Install dependencies
$ npm install

# Run the project
$ npm run start

# The server will initialize in the <http://localhost:3000>
```

&#xa0;

## 🚀Requêtes

### Créer un user

`GET /login/register`


    "username" : "jean",
    "email" : "jean.dupont@gmail.com",
    "firstname" : "jean",
    "lastname" : "dupont",
    "password": "pass4jean"

#### Réponse : 

    {
        "success": true,
        "message": {
            "data": "User added successfully",
            "username": "jean",
            "email": "jean.dupont@gmail.com",
            "firstname": "jean",
            "lastname": "dupont"
      }
    }

### Se connecter

`GET /login`

    "username" : "jean",
    "password": "pass4jean"

##### Réponse :

    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNlbG1lbmUiLCJpYXQiOjE2NzA0NTA4NTgsImV4cCI6MTY3MDQ1ODA1OH0.eq5PG8hxYNWjNKOTaTbhN0oFpEokSeW_HM4P-7bOq5k"

### Modifier les informations d'un user

`PUT /user`

    "email" : "jean.dupont2022@gmail.com",
    "firstname" : "jeanD",
    "password" : "newpass4jean"

##### Réponse :

    {
        "success": true,
        "data": {
            "firstname": "jeanD",
            "email": "jean.dupont2022@gmail.com",
            "password": "$2b$10$eSPTPJQJwKp9BoWS/Z9G.eIf8pp7VQBQYz0x4BZT0C7DuETfUaV9K"
     }
    }
    
### Récuperer ses infos (avec son token)

`GET /user`

    "username" : "Jean",
    "email" : "jean.dupont@gmail.com",
    "firstname" : "jean",
    "lastname" : "dupont",
    "password": "pass4jean"

### Récuperer tout les users (avec son token)

`GET /user/all`

##### Réponse :

    "success": true,
    "data": [
        {
            "username": "admin",
            "email": "admin@gmail.com",
            "firstname": "admin",
            "lastname": "admin",
            "roleId": 1
        },
        {
            "username": "selmene",
            "email": "selmene@gmail.com",
            "firstname": "selmene",
            "lastname": "farhi",
            "roleId": 2
        },
        {
            "username": "thomas",
            "email": "thomas@gmail.com",
            "firstname": "thomas",
            "lastname": "fourties",
            "roleId": 2
        },
        {
            "username": "user",
            "email": "user@gmail.com",
            "firstname": "user",
            "lastname": "user",
            "roleId": 2
        },
        {
            "username": "user2",
            "email": "user2@gmail.com",
            "firstname": "user2",
            "lastname": "user2",
            "roleId": 2
        },
        {
            "username": "visitor",
            "email": "visitor@gmail.com",
            "firstname": "visitor",
            "lastname": "visitor",
            "roleId": 3
        },
        {
            "username" : "Jean",
            "email" : "jean.dupont@gmail.com",
            "firstname" : "jean",
            "lastname" : "dupont",
            "password": "pass4jean"
        }
    ]
}

### Récuperer un user avec son username (avec son token)

`GET /user/jean`

##### Réponse :


    "username": "jean",
    "email": "jean.dupont@gmail.com",
    "firstname": "jean",
    "lastname": "dupont",
    "roleId": 1

### Supprimer un user (avec le token de l'admin)

`DELETE /user/jean`

##### Réponse :
 
    "success": true,
    "data": "User has been deleted"

### Supprimer un user (sans le token de l'admin)

`DELETE /user/jean`

##### Réponse :

    "success": false,
    "message": "User has no permissions"

### Récuperer les films les mieux notés (avec son token)

`GET /movies/toprated`


##### Réponse :

    affiche la liste des films les mieux notés ( liste très longue ) 


### Récuperer toutes les reviews (avec son token)

`GET /reviews`

##### Réponse :

    affiche la liste de toutes les reviews
    
### Ecrire une review (avec son token)

`POST /reviews`


    "reviewtitle": "Un film bof bof",
    "moviename": "Star wars",
    "rating": 0,
    "comment": "Vraiment j'ai pas du tout aimé"

### Ajouter un like à une review (avec son token)

`POST /reviews/5/like`

### Ajouter un dislike à une review (avec son token)

`POST /reviews/5/dislike`

### Supprimer une review avec son id (avec le token admin)

`GET /reviews/5`

### Récuperer une review avec son id (avec le token admin)

`GET /reviews/5`

<a href="#top">Back to top</a>
