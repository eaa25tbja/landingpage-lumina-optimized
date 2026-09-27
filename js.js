//opretter forbindelse til mit body element i html
const body = document.body;

//henter mine elementer/billeder med klassen "color" og definerer dem som en liste/"slides"
const slides = document.querySelectorAll(".color");

//henter mine knapper (farve ellipser)
const whiteBtn = document.getElementById("white");
const blackBtn = document.getElementById("black");
const silverBtn = document.getElementById("silver");
const brownBtn = document.getElementById("brown");

//opretter en variabel med navnet "activeSlide", og fortæller at der er 4 aktive slides i den (0 til 3)

let activeSlide = 3;

//liste over de fire farveknapper, så vi kan vise hvilken der er valgt
const buttons = [whiteBtn, blackBtn, silverBtn, brownBtn];

//Gør det muligt at skifte til et bestemt billede ved at gøre billedet aktivt/ikke-aktivt
function setActiveSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");

  //Sætter en "selector" (ring) om den knap, der er valgt
  buttons.forEach((btn) => btn.classList.remove("active"));
  buttons[index].classList.add("active");
}

//Knap events, som bestemmer at når en knap bliver klikket på vises et bestemt billede
whiteBtn.addEventListener("click", () => setActiveSlide(0));
blackBtn.addEventListener("click", () => setActiveSlide(1));
silverBtn.addEventListener("click", () => setActiveSlide(2));
brownBtn.addEventListener("click", () => setActiveSlide(3));

//Sætter "Jacks White" som valgt, når siden loader (matcher .color1.active i HTML)
setActiveSlide(0);
