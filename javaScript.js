const michis = [
  {
    imagen: "imagenes/michi1.png",
    nombre: "Rosendo",
    sexo: "macho",
    edad: 4,
  },
  {
    imagen: "imagenes/michi1.png",
    nombre: "Ruperto",
    sexo: "macho",
    edad: 1,
  },
  {
    imagen: "imagenes/michi1.png",
    nombre: "Alberta",
    sexo: "hembra",
    edad: 8,
  },
];

function visualizarCatalogo(michisVer = michis) {
  const expoSection = document.querySelector(".expo");

  const michisHTML = michisVer
    .map((michi) => {
      let imgType;
      if (michi.sexo === "hembra") {
        imgType = `hembra.png`;
      } else {
        imgType = `macho.png`;
      }
      return `
      <div>
        <img src="${michi.imagen}" alt="${michi.nombre}">
        <p> Nombre: <span>${michi.nombre}</span></p>
        <p> Sexo: <span>${michi.sexo}</span> <img src="imagenes/${imgType}" alt="sexo" width="20px"></p>
        <p> Edad: <span>${michi.edad}</span></p>
      </div>
    `;
    })
    .join(""); // Une los elementos generados en un solo string

  // Inserta el HTML generado en la sección
  expoSection.innerHTML = michisHTML;
}

function alicarFiltro(sexo) {
  const michisFiltrados = michis.filter((michi) => {
    const cumpleSexo = michi.sexo === sexo || sexo === "indistinto";
    return cumpleSexo;
  });

  visualizarCatalogo(michisFiltrados);
}
