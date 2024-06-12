# Projet de Localisation des Lieux de Coworking à Paris

Ce projet vise à créer une plateforme web pour rendre accessible et visuelle la localisation des lieux de coworking à Paris. En utilisant l'API open-source et la bibliothèque Leaflet, nous affichons les lieux de coworking sur une carte interactive et fournissons des informations détaillées pour chaque lieu.

## Fonctionnalités
Carte interactive : Utilisation de Leaflet pour afficher les lieux de coworking sur une carte de Paris.
--Informations détaillées : Pour chaque lieu de coworking, les informations suivantes sont disponibles :
- Nom du coworking
- Adresse / cp / ville
- Site web
- Image

## Technologies Utilisées
- HTML5 : Structure de la page web.
- CSS3 : Mise en forme et styles visuels.
- JavaScript : Interactivité et logique de l'application.
- Leaflet : Bibliothèque JavaScript pour les cartes interactives (https://leafletjs.com/)
- API open-source : Pour obtenir les données des lieux de coworking (https://public.opendatasoft.com/)


## URL DU LIEN API : 
/api/explore/v2.1/catalog/datasets/coworking-france/records?limit=20&refine=reg_name%3A%22%C3%8Ele-de-France%22&refine=ville%3A%22Paris%22