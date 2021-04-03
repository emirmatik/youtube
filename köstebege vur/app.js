const köstebekler = document.querySelectorAll(".köstebek");
const baslatButon = document.getElementById("baslat");
const skorText = document.querySelector("#skor");
const süreText = document.querySelector("#süre");

let öncekiKöstebek;
let süreDoldu = false;
let skor = 0;
let süre = 15;

baslatButon.addEventListener("click", startGame);
köstebekler.forEach((köstebek) => köstebek.addEventListener("click", vur));

function rastgeleKostebek() {
  const sıra = Math.floor(Math.random() * köstebekler.length);
  const secilen = köstebekler[sıra];
  if (öncekiKöstebek === secilen) {
    return rastgeleKostebek();
  } else {
    öncekiKöstebek = secilen;
  }
  return secilen;
}

function rastgeleSüre(min, max) {
  const time = Math.round(Math.random() * (max - min)) + min;
  return time;
}

function yukarı() {
  const köstebek = rastgeleKostebek();
  const köstebekSüresi = rastgeleSüre(750, 1250);
  köstebek.classList.add("secilen");
  setTimeout(() => {
    köstebek.classList.remove("secilen");
    if (!süreDoldu) yukarı();
  }, köstebekSüresi);
}

function süreyiBaslat() {
  if (!süreDoldu) {
    süre--;
    süreText.textContent = süre;
  } else {
    süreText.textContent = "süre doldu";
  }
}

function startGame() {
  süre = 15;
  skor = 0;
  süreDoldu = false;
  const interval = setInterval(() => {
    süreyiBaslat();
    if (süreDoldu) clearInterval(interval);
  }, 1000);
  yukarı();
  setTimeout(() => {
    süreDoldu = true;
  }, süre * 1000);
}

function vur(e) {
  if (e.target.classList.contains("secilen")) {
    skor++;
    e.target.classList.remove("secilen");
  }
  skorText.textContent = skor;
}
