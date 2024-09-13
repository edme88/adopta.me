const historias = [
  {
    title: "Historia de como adoptaron a Pancracio",
    description: "Esta historia comienza cuando...",
  },
  {
    title: "Historia de Girgola",
    description: "Esta historia comienza cuando...",
  },
];

function mostrarHistorias() {
  const main = document.querySelector("main");
  let elems = "";

  historias.forEach((historia) => {
    elems += `<div>${historia.title}</div> <div>${historia.description}</div>`;
  });

  console.log(elems);
  main.innerHTML = elems;
}

function agregarIngrediente(ingre) {
  let listIngre = document.getElementById("listaIngrediente");
  listIngre.innerHTML += `<li>${ingre}</li>`;
}
