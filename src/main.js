
import "./style.css";
/*
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



let numeros= [2,4,6,8,10,12,14,16,18,20]
let numerosalcuadrado = numeros.map(numero => numero * numero);
console.log(numerosalcuadrado);

let texto = "Bienvenidos"
let textoplus = texto.split("").map((letter,idx) =>letter.repeat(idx+1)).join();
console.log(textoplus);

let newtext = texto.split("").map((letter,idx )=> letter+ numeros[idx].repeat(idx))

console.log(newtext);

*/

//FUNCIONES PARA CREAR UNAS CARDS DE LA VARIABLE MOVIES

/*
const movies = [
  {
    title: "Fight Club",
    director: "David Fincher",
    actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
    year: 1999,
    description:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    category: "Drama",
    rating: 8.8,
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
    year: 2008,
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    category: "Action",
    rating: 9,
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    actors: "Samuel L. Jackson, Uma Thurman, Bruce Willis",
    year: 1994,
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    category: "Crime",
    rating: 8.9,
  },
  {
    title: "Schindler's List",
    director: "Steven Spielberg",
    actors: "Liam Neeson, Ralph Fiennes, Ben Kingsley",
    year: 1993,
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    category: "Biography",
    rating: 8.9,
  },
  {
    title: "The Lord of theRing: The Return of the King",
    director: "Peter Jackson",
    actors: "Elijah Wood, Viggo Mortensen, Ian McKellen",
    year: 2003,
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    category: "Adventure",
    rating: 8.9,
  },
  {
    title: "The Social Network",
    director: "David Fincher",
    actors: "Jesse Eisenberg, Andrew Garfield, Justin Timberlake",
    year: 2010,
    description:
      "Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, but is later sued by two brothers who claimed he stole their idea, and the co-founder who was later squeezed out of the business.",
    category: "Biography",
    rating: 7.7,
  },
  {
    title: "Goodfellas",
    director: "Martin Scorsese",
    actors: "Robert De Niro, Ray Liotta, Joe Pesci",
    year: 1990,
    description:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    category: "Biography",
    rating: 8.7,
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
    year: 2010,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    category: "Action",
    rating: 8.8,
  },
  {
    title: "The Lord of theRing: The Fellowship of the Ring",
    director: "Peter Jackson",
    actors: "Elijah Wood, Ian McKellen, Orlando Bloom",
    year: 2001,
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    category: "Adventure",
    rating: 8.8,
  },
  {
    title: "Se7en",
    director: "David Fincher",
    actors: "Morgan Freeman, Brad Pitt, Kevin Spacey",
    year: 1995,
    description:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    category: "Crime",
    rating: 8.6,
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    actors: "Tom Hanks, Robin Wright, Gary Sinise",
    year: 1994,
    description:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
    category: "Drama",
    rating: 8.8,
  },
  {
    title: "Django Unchained",
    director: "Quentin Tarantino",
    actors: "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio",
    year: 2012,
    description:
      "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
    category: "Drama",
    rating: 8.4,
  },
  {
    title: "The Dark Knight Rises",
    director: "Christopher Nolan",
    actors: "Christian Bale, Tom Hardy, Anne Hathaway",
    year: 2012,
    description:
      "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
    category: "Action",
    rating: 8.4,
  },
  {
    title: "Saving Private Ryan",
    director: "Steven Spielberg",
    actors: "Tom Hanks, Matt Damon, Tom Sizemore",
    year: 1998,
    description:
      "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    category: "Action",
    rating: 8.6,
  },
  {
    title: "The Lord of theRing: The Two Towers",
    director: "Peter Jackson",
    actors: "Elijah Wood, Ian McKellen, Viggo Mortensen",
    year: 2002,
    description:
      "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    category: "Adventure",
    rating: 8.7,
  },
  {
    title: "Gone Girl",
    director: "David Fincher",
    actors: "Ben Affleck, Rosamund Pike, Neil Patrick Harris",
    year: 2014,
    description:
      "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
    category: "Drama",
    rating: 8.1,
  },
  {
    title: "Casino",
    director: "Martin Scorsese",
    actors: "Robert De Niro, Joe Pesci, Sharon Stone",
    year: 1995,
    description:
      "A tale of greed, deception, money, power, and murder occur between two bestfriend: a mafia enforcer and a casino executive compete against each other over a gambling empire, and over a fast-living and fast-loving socialite.",
    category: "Crime",
    rating: 8.2,
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    actors: "Leonardo DiCaprio, Ken Watanabe, Joseph Gordon-Levitt",
    year: 2010,
    description:
      "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets, is offered a chance to regain his old life as payment for a task considered to beimpossibl: inception.",
    category: "Action",
    rating: 8.8,
  },
  {
    title: "Once Upon a Time... in Hollywood",
    director: "Quentin Tarantino",
    actors: "Leonardo DiCaprio, Brad Pitt, Margot Robbie",
    year: 2019,
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    category: "Comedy",
    rating: 7.6,
  },
  {
    title: "Zodiac",
    director: "David Fincher",
    actors: "Jake Gyllenhaal, Robert Downey Jr., Mark Ruffalo",
    year: 2007,
    description:
      "In the late 1960s/early 1970s, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer, an unidentified individual who terrorizes Northern California with a killing spree.",
    category: "Crime",
    rating: 7.7,
  },
  {
    title: "The Wolf of Wall Street",
    director: "Martin Scorsese",
    actors: "Leonardo DiCaprio, Jonah Hill, Margot Robbie",
    year: 2013,
    description:
      "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption, and the federal government.",
    category: "Biography",
    rating: 8.2,
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    actors: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
    year: 2014,
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    category: "Adventure",
    rating: 8.6,
  },
  {
    title: "The Hateful Eight",
    director: "Quentin Tarantino",
    actors: "Samuel L. Jackson, Kurt Russell, Jennifer Jason Leigh",
    year: 2015,
    description:
      "In post-Civil War Wyoming, bounty hunters try to find shelter during a blizzard but get involved in a plot of betrayal and deception. Will they survive?",
    category: "Drama",
    rating: 7.8,
  }
];

const moviediv = document.createElement("div")
moviediv.classList.add("moviegrid")


function createtitle(movies){
  const movietitle = document.createElement("h1")
  movietitle.classList.add("movietitle")
  movietitle.textContent = movies.title;
  return movietitle
}

function createdescription(movies){
  const moviedesc = document.createElement("p")
  moviedesc.classList.add("moviedescription")
  moviedesc.textContent = movies.description;
  return moviedesc
}

function createrating(movies){
  const movierating = document.createElement("p")
  movierating.classList.add("movierating")
  movierating.textContent = movies.rating;
  return movierating
}

movies.forEach((element,idx) => {
  const singlemoviediv = document.createElement("div");
  singlemoviediv.classList.add(`movie`);
  
  document.body.appendChild(moviediv);

  singlemoviediv.appendChild(createtitle(element));
  singlemoviediv.appendChild(createdescription(element));
  singlemoviediv.appendChild(createrating(element));
  moviediv.appendChild(singlemoviediv)
});

console.log(performance.now());
*/

console.log("(5)=====================================================(5)");

const shadowdiv = document.createElement("div");
shadowdiv.classList.add("div5");

document.querySelector("#app").appendChild(shadowdiv);

let shadowHost = shadowdiv;
let shadowRoot = shadowHost.attachShadow({ mode: "open" });

shadowRoot.innerHTML = `
<style>
p{
  color:red;
  }
  </style>
  <p>Hola desde el shadow DOM</p> 
`;
console.log("(6)=====================================================(6)");

const div6 = document.createElement("div");
div6.classList.add("container-mouse-move");

document.body.appendChild(div6);

div6.addEventListener("mousemove", (event) => {
  let x = event.clientX;
  let y = event.clientY;
  console.log(x, y);
});

console.log("(7)=====================================================(7)");

const input7 = document.createElement("input");
input7.setAttribute("id", "input-test");
document.body.appendChild(input7);

input7.addEventListener("input", () => {
  console.log(input7.value);
});

console.log("(8)=====================================================(8)");

const btn8 = document.createElement("button");
btn8.textContent = "Número de clicks: 0";
const resetbtn8 = document.createElement("button");
resetbtn8.textContent = "Resetea el contador";

document.body.appendChild(btn8);
document.body.appendChild(resetbtn8);

let total = 0;
btn8.addEventListener("click", () => {
  sumarclick();
});

function sumarclick() {
  total += 1;
  btn8.textContent = `Número de clicks: ${total}`;
}

function resetCounter() {
  total = 0;
  btn8.textContent = `Número de clicks: ${total}`;
}

resetbtn8.addEventListener("click", () => {
  console.log("hola");
  resetCounter();
});

console.log("(9)=====================================================(9)");

document.addEventListener("keydown", (key) => {
  console.log(key);
});
console.log("(10)=====================================================(10)");

const elemento10 = document.createElement("div");
elemento10.classList.add("elemento10");
document.body.appendChild(elemento10);

const btn10 = document.createElement("button");
btn10.textContent = "Mueve el cubo";
document.body.appendChild(btn10);

function animarElemento(elemento, tiempoInicio) {
  let tiempoactual = performance.now();
  let progreso = (tiempoactual - tiempoInicio) / 100;

  if (progreso < 4) {
    elemento.style.transform = `translateX(${progreso * 100}px)`;
    requestAnimationFrame(() => animarElemento(elemento, tiempoInicio));
  } else {
    elemento.style.transform = `translateX(100px)`;
  }
}

btn10.addEventListener("click", () => {
  requestAnimationFrame((tiempoInicio) =>
    animarElemento(elemento10, tiempoInicio)
  );
});

console.log("(11)=====================================================(11)");

const div11 = document.createElement("div");
div11.classList.add("div11");
document.body.appendChild(div11);

let ncolor = 0;

div11.addEventListener("click", () => {
  changeColor(div11);
});

function changeColor(element) {
  ncolor += 1;
  if (ncolor == 1) {
    element.style.backgroundColor = "Blue";
    console.log(ncolor);
  } else {
    element.style.backgroundColor = "Red";
    ncolor = 0;
  }
}


console.log("(12)=====================================================(12)");
/*

const div12 = document.createElement("div");
div12.classList.add("div11");
document.body.appendChild(div12);

div12.addEventListener("click",()=>{
rotateElement(div12,45,2)
})

function rotateElement(elemento,rotacion,tiempo){
elemento.style.transition = `transform ${tiempo}s ease`
elemento.style.transform = `rotate(${rotacion}deg)`
}
*/

const elemento12 = document.createElement("div");
elemento12.classList.add("elemento12");
document.body.appendChild(elemento12);

const btn12 = document.createElement("button");
btn12.textContent = "Mueve el cubo";
document.body.appendChild(btn12);

function animarElemento12(elemento, tiempoInicio) {
  let tiempoactual = performance.now();
  let progreso = (tiempoactual - tiempoInicio) / 720;

  if (progreso < 1) {
    elemento.style.transform = `rotate(${progreso*360}deg)`;
    requestAnimationFrame(() => animarElemento12(elemento, tiempoInicio));
  } else {
    elemento.style.transform = `rotate(360)deg`;
  }
}

btn12.addEventListener("click", () => {
  requestAnimationFrame((tiempoInicio) =>
    animarElemento12(elemento12, tiempoInicio)
  );
});


function createElement2(parent,type,clase="",id="",content="",photolink="") {
const element = document.createElement(type)
element.classList.add(clase)
element.id = id;

if (type !== "img") element.textContent = content;

if (type =="img" && photolink !==null) {
  element.src = photolink;
}

parent.appendChild(btn12);
    
}

createElement2("body","div","HOLA","SOYID","BIENVENIDO")