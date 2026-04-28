const container = document.getElementById("koszyk");
const sumaElement = document.getElementById("suma");

let koszyk = JSON.parse(localStorage.getItem("koszyk")) || [];

function render() {
  container.innerHTML = "";
  let suma = 0;

  koszyk.forEach((id, index) => {
    const produkt = produkty.find(p => p.id === id);

    suma += produkt.cena;

    const div = document.createElement("div");
    div.innerHTML = `
      ${produkt.nazwa} - ${produkt.cena} zł
      <button onclick="usun(${index})">Usuń</button>
    `;

    container.appendChild(div);
  });

  sumaElement.innerText = suma + " zł";
}

function usun(index) {
  koszyk.splice(index, 1);
  localStorage.setItem("koszyk", JSON.stringify(koszyk));
  render();
}

render();