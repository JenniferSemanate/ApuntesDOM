// CREAR UN ELEMENTO NUEVO

const el = document.createElement("p");

el.innerHTML = "Hello Barcelona";

document.body.appendChild(el);

// AGARRAR UN ELEMENTO QUE YA EXISTE

const demo = document.getElementById("demo");

function handleClick(event) {
  console.log(event);
}

// Cada vez que alguien haga click sobre "demo", llama handleClick
demo.addEventListener("click", handleClick);
