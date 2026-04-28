const container = document.getElementById("produkty");

produkty.forEach(p => {
  const div = document.createElement("div");

  div.innerHTML = `
    <strong>${p.nazwa}</strong> - ${p.cena} zł
    <button onclick="dodaj(${p.id})">Dodaj do koszyka</button>
  `;

  container.appendChild(div);
});

function dodaj(id) {
  let koszyk = JSON.parse(localStorage.getItem("koszyk")) || [];

  koszyk.push(id);

  localStorage.setItem("koszyk", JSON.stringify(koszyk));

  alert("Dodano do koszyka!");
}