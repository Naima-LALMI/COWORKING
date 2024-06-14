const ulElement = document.querySelector("ul");
fetch(
  "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/coworking-france/records?limit=40&refine=ville%3A%22Paris%22"
  // "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/coworking-france/records?limit=20&refine=ville%3A%22Paris%22"
)
  .then((r) => r.json())
  .then((data) => {
    console.log(data);
    const element = data.results;
    for (let i = 0; i < element.length; i++) {
      const liElement = document.createElement("li");
      const title = document.createElement("h2");
      title.innerText = element[i].nom;
      const adress = document.createElement("span");
      adress.innerText = element[i].adresse;
      liElement.appendChild(title);
      liElement.appendChild(adress);
      ulElement.appendChild(liElement);
    }
  });

//MAP INTEGRATION//
//Coordonnée de PARIS //
var map = L.map("map").setView([48.866667, 2.333333], 13);
//Ajout des tuiles à la map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//Ajout Marqueur de Paris 
var marker = L.marker([48.866667, 2.333333]).addTo(map);
marker.bindPopup("PARIS ").openPopup();
