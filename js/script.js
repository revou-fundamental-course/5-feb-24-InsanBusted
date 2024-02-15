let isReversed = false;

document.getElementById("konversi").addEventListener("click", konversi);
document.getElementById("reset").addEventListener("click", reset);

function konversi() {
  if (isReversed) {
    fahtoCel();
  } else {
    celtoFah();
  }
}

function celtoFah() {
  let celcius = document.getElementById("celcius");
  let rumus = celcius.value * (9 / 5) + 32;
  document.getElementById("rumusFah").innerHTML = rumus.toFixed(2);
  document.getElementById(
    "kalkulasi"
  ).innerHTML = `${celcius.value}°C * (9 / 5) + 32 = ${rumus}°F`;
}

function fahtoCel() {
  let fahrenheit = document.getElementById("rumusFah");
  let rumus = ((fahrenheit.value - 32) * 5) / 9;

  document.getElementById("celcius2").innerHTML = rumus.toFixed(2);
  document.getElementById(
    "kalkulasi"
  ).innerHTML = `(${fahrenheit.value}°C - 32) * 5/9 = ${rumus}°F`;
}

function reset() {
  document.getElementById("celcius").value = "";
  document.getElementById("rumusFah").value = "";
  document.getElementById("celcius2").value = "";
  document.getElementById("rumusFah2").value = "";
  document.getElementById("kalkulasi").value = "";
}

const reverseButton = document.getElementById("reverse");
const celcius2 = document.getElementById("celcius2");
const rumusFah2 = document.getElementById("rumusFah2");
const labelCelcius2 = document.getElementById("labelCelcius2");
const labelRumusFah2 = document.getElementById("labelRumusFah2");
const celcius = document.getElementById("celcius");
const rumusFah = document.getElementById("rumusFah");
const labelCelcius = document.getElementById("labelCelcius");
const labelRumusFah = document.getElementById("labelRumusFah");

reverseButton.addEventListener("click", function () {
  isReversed = !isReversed;

  if (isReversed) {
    celcius2.style.display = "block";
    rumusFah2.style.display = "block";
    labelCelcius2.style.display = "inline";
    labelRumusFah2.style.display = "inline";
    labelCelcius.style.display = "none";
    celcius.style.display = "none";
    labelRumusFah.style.display = "none";
    rumusFah.style.display = "none";
  } else {
    celcius2.style.display = "none";
    rumusFah2.style.display = "none";
    labelCelcius2.style.display = "none";
    labelRumusFah2.style.display = "none";
    celcius.style.display = "block";
    rumusFah.style.display = "block";
    labelCelcius.style.display = "inline";
    labelRumusFah.style.display = "inline";
  }
});
