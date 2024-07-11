
//MAP INTEGRATION//
//var map = L.map("map").setView([46.227638,2.213749],13);
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
      const liElement = document.createElement("div");
      const title = document.createElement("h2");
      title.innerText = element[i].nom;
      const adress = document.createElement("span");
      adress.innerText =  `${element[i].adresse} ${element[i].ville} ${element[i].cp}`;
      // const cp = document.createElement("span");
      // cp.innerText = element[i].cp;
      // const ville = document.createElement("span");
      // ville.innerText = ` ${element[i].ville}`;
      const lien = document.createElement("a");
      lien.href = "http://" + element[i].web;
      lien.innerHTML = "<strong>Visite le coworking</strong>";
    
      // Création de l'image
      const img = document.createElement("img");
      img.src = `img/coworking${i+1}.jpg`; 
  
      //Marqueur Coworking + donnée lat/long
      const longtitude = element[i].coordonnees.lon;
      const latitude = element[i].coordonnees.lat;
      var marker1 = L.marker([latitude, longtitude]).addTo(map_Paris);
      marker1.bindPopup(`${ element[i].nom}<br><a href="${lien.href}">Visitez ce site</a>`);
 
      ulElement.appendChild(liElement);
      liElement.appendChild(img);
      liElement.appendChild(title);
      liElement.appendChild(adress);
      liElement.appendChild(document.createElement("br")); // Ajoute un saut de ligne
      // liElement.appendChild(cp);
      // liElement.appendChild(ville);
      liElement.appendChild(document.createElement("br")); // Ajoute un saut de ligne
      liElement.appendChild(lien);
    }
  });
