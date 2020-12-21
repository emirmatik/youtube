const startBtn = document.getElementById("start");
const scoreText = document.getElementById("score");
const köstebekler = document.querySelectorAll(".köstebek");

let öncekiKöstebek;
let süreDoldu = false;
let skor = 0;

// fonksiyonlar

function rastgeleKöstebek() {
  const sıra = Math.floor(Math.random() * köstebekler.length);
  const secilenKöstebek = köstebekler[sıra];
  if (öncekiKöstebek === secilenKöstebek) {
    return rastgeleKöstebek();
  } else {
    öncekiKöstebek = secilenKöstebek;
  }
  return secilenKöstebek;
}

function rastgeleSüre(min, max) {
  const süre = Math.round(Math.random() * (max - min)) + min;
  return süre;
}

function yukarı() {
  const köstebek = rastgeleKöstebek();
  const süre = rastgeleSüre(1000, 1500);
  console.log(süre);
  köstebek.classList.add("secilen");
  setTimeout(() => {
    köstebek.classList.remove("secilen");
    if (!süreDoldu) {
      yukarı();
    }
  }, süre);
}

function startGame() {
  yukarı();
  setTimeout(() => {
    süreDoldu = true;
  }, 15000);
}

function peep(e) {
  if (e.target.classList.contains("secilen")) {
    skor++;
    e.target.classList.remove("secilen");
  }
  scoreText.textContent = skor;
}

// event listeners

startBtn.addEventListener("click", () => {
  startGame();
});

köstebekler.forEach((köstebek) => {
  köstebek.addEventListener("click", peep);
});
