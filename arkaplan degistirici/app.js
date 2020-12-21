const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [
  "black",
  "yellow",
  "green",
  "#c7bf67",
  "#7b55cf",
  "#de4747",
  "#2963ab",
];

button.addEventListener("click", changeBackground);

let sıra = 0;

function changeBackground() {
  // rastgele bir renk

  //   const rastgeleSayi = Math.floor(Math.random() * colors.length);
  //   const secilenRenk = colors[rastgeleSayi];
  //   console.log(rastgeleSayi, secilenRenk);
  //   body.style.backgroundColor = secilenRenk;

  // sırayla arkaplan rengi seç

  if (sıra == 7) sıra = 0;
  const secilenRenk = colors[sıra];
  sıra++;
  body.style.backgroundColor = secilenRenk;
}
