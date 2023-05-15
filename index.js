const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const resultContainer = document.querySelector(".result-container");
const searchForm = document.querySelector(".search-form");
const pizzaInput = document.querySelector(".input");

let index = localStorage.getItem("pizza") || undefined;
let pizza = pizzas.find(pizza => pizza.id === Number(index));

const saveLocalStorage = () => {
  index = (pizzas.indexOf(pizza) + 1) || undefined;
	localStorage.setItem("pizza", index);
};

const createPizza = (pizza) => {
	return `
          <div class="result-card">
            <img src="${pizza.imagen}">
            <div class="info">
              <h2>${pizza.nombre}</h2>
              <p>$${pizza.precio}</p>
            </div>
          </div>
    `;
};

const createError = () => {
	return `
          <div class="error-card">
            <h2>Error 404:</h2>
            <p>PIZZA NOT FOUND</p>
          </div>
    `;
};

const renderPizza = () => {
  (pizza && pizza !== {})
  ? resultContainer.innerHTML = createPizza(pizza)
  : resultContainer.innerHTML = createError()
};

const searchPizza = (e) => {
	e.preventDefault();
	pizza = pizzas.find(pizza => pizza.id === Number(pizzaInput.value));
  if (pizza) saveLocalStorage();
	searchForm.reset();
	updateUI();
};

const updateUI = () => {
	renderPizza();
	saveLocalStorage();
};

const init = () => {
	if (pizza && pizza !== {}) document.addEventListener("DOMContentLoaded", renderPizza);
	searchForm.addEventListener("submit", searchPizza);
};

init();