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


const divs = document.querySelector("#ex3");
function createBox(numBox) {
  for (let i = 0; i < numBox; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.classList.add(`color${i%3}`);
    divs.appendChild(div);
  }
}

createBox(2);

añadirBoton();

const div4 = document.querySelector("#ex4")

function addElement(parent,type,clasatr,text){
const newele = document.createElement(type)
newele.classList.add(clasatr)
newele.textContent = text
parent.appendChild(newele);
}
 
addElement(div4,"h1","filmname","Fight club")
addElement(div4,"p","year","1999")
addElement(div4,"p","description","An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.")
addElement(div4,"p","category","Drama")

const ex4img = document.createElement("img");
ex4img.classList.add("filmimg")
ex4img.src = "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg";
div4.appendChild(ex4img)

/*
const ex4h1 = document.createElement("h1");
ex4h1.classList.add("filmname")
ex4h1.textContent = "Fight club"

const ex4p1 = document.createElement("p");
ex4p1.classList.add("year")
ex4p1.textContent = "Year: 1999"ç


const ex4p2 = document.createElement("p");
ex4p2.classList.add("description")
ex4p2.textContent = "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."

const ex4p3 = document.createElement("p");
ex4p3.classList.add("category")
ex4p3.textContent = "Drama"

const ex4img = document.createElement("img");
ex4img.classList.add("filmimg")
ex4img.src = "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg";

div4.appendChild(ex4h1)
div4.appendChild(ex4p1)
div4.appendChild(ex4p2)
div4.appendChild(ex4p3)
div4.appendChild(ex4img)
*/



