//Para seleccionar un elemento de la página
const first = document.getElementById("first");
//querySelector("#first")

//Para cambiar el contenido de un elemento
first.innerText = "Barcelona";

//Para crear un nuevo elemento a la página
const el = document.createElement("div");

//Para ponerle contenido a la variable anterior creada
el.innerText = "Quart";

//Para añadirlo a la pagina, mismo elemento anterior
document.body.appendChild(el);

//Para añadir una clase css a la variable anterior ó elemento creado
//(previamente tenemos que abrir css, enlazarlo al html y dentro del css crear la clase)
el.className = "groc";

//Para añadir un estilo
el.style.color = "red";

function changeColor() {
  //Para seleccionar varios elementos a la vez
  const divs = document.getElementsByTagName("div");
  // querySelectorAll = versatil, posible utilizar con los sectores css

  //Para modificar varios elementos, hacemos un loop
  for (const div of divs) {
    // div.innerText = "London";
    div.style.color = input.value;
  }
}

//Crear boton, meterle texto y mostralo en página
const btn = document.createElement("button");
btn.innerText = "Click me!";
document.body.appendChild(btn);

//Para añadir un even listener al boton
btn.addEventListener("click", changeColor);

//changeColor es lo mismo que =
// function () {
//   changeColor ();
// });

// ------------------------

//TRUQUILLO!!!

//Para crear un input
const input = document.createElement("input");

//Para inyectarlo en el DOM
document.body.appendChild(input);
