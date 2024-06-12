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
      liElement.appendChild(title)
      liElement.appendChild(adress)
      ulElement.appendChild(liElement);
    }
  });
