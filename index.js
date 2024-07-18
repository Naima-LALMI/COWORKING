// Fonction pour afficher la carte et masquer le bouton
function showMap(){
  document.getElementById('map').style.display = 'block';
  document.getElementById('showMapButton').style.display = 'none';
}

//MAP INTEGRATION//
var map_Paris = L.map("map").setView([48.866667, 2.333333], 12);

//Ajout des tuiles à la map
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map_Paris);

const ulElement = document.querySelector("ul");

fetch(
  "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/coworking-france/records?limit=15&refine=ville%3A%22Paris%22"
)
  .then((r) => r.json())
  .then((data) => {
    const element = data.results;
    for (let i = 0; i < element.length; i++) {
      const divElement = document.createElement("div");
      divElement.className = "maDiv";
      const title = document.createElement("h2");
      title.innerText = element[i].nom;
      const adress = document.createElement("span");
      adress.innerText = `adresse : ${element[i].adresse} ${element[i].ville} ${element[i].cp}`;
      const lien = document.createElement("a");
      lien.href = "http://" + element[i].web;
      lien.target = "_blank";
      lien.innerHTML = "<strong>Visite le coworking</strong>";

      // Création de l'image
      const img = document.createElement("img");
      img.src = `img/coworking${i + 1}.jpg`;

      //Marqueur Coworking + donnée lat/long
      const longtitude = element[i].coordonnees.lon;
      const latitude = element[i].coordonnees.lat;
      var marker1 = L.marker([latitude, longtitude]).addTo(map_Paris);
      marker1.bindPopup(
        `${element[i].nom}<br><a href="${lien.href}" target="_blank">Visitez ce site</a>`
      );

      ulElement.appendChild(divElement);
      divElement.appendChild(img);
      divElement.appendChild(title);
      divElement.appendChild(adress);
      divElement.appendChild(document.createElement("br")); // Ajoute un saut de ligne
      // divElement.appendChild(cp);
      // liElement.appendChild(ville);
      divElement.appendChild(document.createElement("br")); // Ajoute un saut de ligne
      divElement.appendChild(lien);
    }
  });
