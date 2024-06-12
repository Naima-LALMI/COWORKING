// const h3 = document.getElementById("nom_coworking");
// const div1 = document.getElementById("adresse");
// const div2 = document.getElementById("ville");
// const div3 = document.getElementById("cp");
// const div4 = document.getElementById("web_coworking");
const ulElement = document.querySelector("ul");
fetch(
  "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/coworking-france/records?limit=20&refine=ville%3A%22Paris%22"
)
  .then((r) => r.json())
  .then((data) => {
    console.log(data);
    const element = data.results;
    for (let i = 0; i < element.length; i++) {
      const liElement = document.createElement("li");
      const title = document.createElement("h3")
      title.innerText = element[i].nom;
      const adress = document.createElement('div')
      adress.innerText = element[i].adresse;
      //liElement.innerText = element[i].adresse;
      console.log(element.nom);
      liElement.appendChild(title)
      liElement.appendChild(adress)
      ulElement.appendChild(liElement);
      // h3.innerHTML += element[i].nom;
      // div1.innerHTML = element[i].adresse;
      // div2.innerHTML = element[i].cp;
      // div3.innerHTML = element[i].ville;
      // div4.innerHTML = element[i].web;
      //console.log(element[i].nom);
      //console.log(element[0]);
    }
  });
