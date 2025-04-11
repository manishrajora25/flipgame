const button = document.querySelector("#next_window");
const parentDiv = document.querySelector("#chenge_disply");
const flipCards = document.querySelectorAll(".flip-card");
const testinput = document.querySelector("#input");
const gameOver = document.querySelector("#gameOver");

const time = document.querySelector("#time");
const counter = document.querySelector("#counter");
const gamescore = document.querySelector("#gamescore");

const images = [
  "image/hardik.avif",
  "image/kl rahul.avif",
  "image/ms dhoni.avif",
  "image/rohit image.avif",
  "image/Shubman image.avif",
  "image/virat image.avif",
];

const hello = [...images, ...images].sort(() => Math.random() - 0.5); 

let firstCard = null;
let secondCard = null;
let preventClick = false;
let clickCount = 0;
let score = 0;
let times = 60;

time.innerText = times;
counter.innerText = 0;
gamescore.innerText = 0;


button.addEventListener("click", () => {
  const value = testinput.value.trim();

  if (value === "") {
    alert("Please enter your name");
    return;
  }

  button.style.display = "none";
  testinput.style.display = "none";
  parentDiv.style.display = "block";
  timerCounting()
  


  backimageData();
  addCardEvents();
});


function backimageData() {
  flipCards.forEach((card, index) => {
    const backImage = document.createElement("img");
    backImage.src = hello[index];
    backImage.style.width = "100%";
    backImage.style.height = "100%";
    card.querySelector(".flip-card-back").appendChild(backImage);
    card.dataset.image = hello[index];
  });
}


function addCardEvents() {
  flipCards.forEach((card) => {
    card.addEventListener("click", () => {
      const flipInner = card.querySelector(".flip-card-inner");

      if (preventClick || card === firstCard || flipInner.style.transform === "rotateY(180deg)") return;

      flipInner.style.transform = "rotateY(180deg)"; 

      if (!firstCard) {
        firstCard = card;
      } else {
        secondCard = card;
        checkMatch();
      }

      clickCount++;
      counter.innerText = clickCount;
    });
  });
}


function checkMatch() {
  preventClick = true;

  const isMatch = firstCard.dataset.image === secondCard.dataset.image;

  if (isMatch) {
    firstCard = null;
    secondCard = null;
    preventClick = false;
    score++;
    gamescore.innerText = score;

    // if (score === images.length) {
    //   setTimeout(() => alert("You found all pairs!"), 500);
    // }
  } else {
    setTimeout(() => {
      firstCard.querySelector(".flip-card-inner").style.transform = "rotateY(0deg)";
      secondCard.querySelector(".flip-card-inner").style.transform = "rotateY(0deg)";
      firstCard = null;
      secondCard = null;
      preventClick = false;
    }, 1000);
  }
}


function timerCounting(){
  let timer=setInterval(() => {
    times--;
    time.innerText = times;
    if(times==0 || score==6 ){
      parentDiv.style.display = "none";
      gameOver.style.display = "block";
      gameOver.innerText=`  Congrates!!! Clicked: ${clickCount} , Times: ${times} and your Scores is :${score}`

      clearInterval(timer)
    }
   
  }, 1000);
}