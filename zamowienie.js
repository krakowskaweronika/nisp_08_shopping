const container = document.getElementById("podsumowanie");
const sumaElement = document.getElementById("suma");
const form = document.getElementById("formularz");

let koszyk = JSON.parse(localStorage.getItem("koszyk")) || [];

let suma = 0;

koszyk.forEach(id => {
  const produkt = produkty.find(p => p.id === id);

  suma += produkt.cena;

  const div = document.createElement("div");
  div.innerText = `${produkt.nazwa} - ${produkt.cena} zł`;

  container.appendChild(div);
});

sumaElement.innerText = suma + " zł";

form.addEventListener("submit", function(e) {
  e.preventDefault();

  localStorage.removeItem("koszyk");

  alert("Zamówienie złożone!");

  window.location.href = "lista.html";
});