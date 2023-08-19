let liquido = 0;
let deducao = 0;

function calculete(bruto) {
  if (bruto < 1903.98) {
  } else if (bruto < 2826.65) {
    deducao = bruto * 0.075;
    liquido = bruto - deducao;
  } else if (bruto < 3751.05) {
    deducao = bruto * 0.15;
    liquido = bruto - deducao;
  } else if (bruto < 4664.68) {
    deducao = bruto * 0.225;
    liquido = bruto - deducao;
  } else {
    deducao = bruto * 0.275;
    liquido = bruto - deducao;
  }
}

document.querySelector("form").addEventListener("submit", (ev) => {
  ev.preventDefault();

  const bruto = document.getElementById("wage").value;
  calculete(bruto);
  const tr = document.querySelectorAll("#row td");
  tr[0].innerText = `R$${bruto},00`;
  tr[1].innerText = `- R$${deducao},00`;
  tr[2].innerText = `R$${liquido},00`;
});
