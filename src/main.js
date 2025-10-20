import "./style.css";

const appholder = document.querySelector("#app");

const ex1div = appholder.querySelector("#ex1");

console.log(ex1div.querySelector("p"));

const e1cl = document.querySelectorAll(".e1cl");

console.log(e1cl);

function añadirBoton() {
  const divs = document.querySelectorAll("#ex2");

  divs.forEach((div) => {
    const parag = document.createElement("p");
    parag.textContent = "Bienvenido a este lorem Ipsum";
    const btn = document.createElement("button");
    btn.textContent = "Continuar";

    div.appendChild(parag);
    div.appendChild(btn);
  });
}


function createBox(numBox) {
  const divs = document.querySelector("#ex3");
  for (let i = 0; i < numBox; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.classList.add(`color${i%3}`);
    divs.appendChild(div);
  }
}

createBox(8);

añadirBoton();
