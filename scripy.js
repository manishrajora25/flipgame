



const button = document.querySelector("#next_window");
const parentDiv = document.querySelector("#chenge_disply");
const flipFrontImg = document.querySelector("#flip-card-front");
const flipCards = document.querySelectorAll(".flip-card");
const testinput = document.querySelector("#input");

const images = [
  "image/hardik.avif",
  "image/kl rahul.avif",
  "image/ms dhoni.avif",
  "image/rohit image.avif",
  "image/Shubman image.avif",
  "image/virat image.avif",
];

const hello = [...images, ...images]; 


let click = 0;
let firstCard = null;
let secondCard = null;
let preventClick = false;


button.addEventListener("click", () => {
  const value = testinput.value.trim();

  if (value === "") {
    alert("Please enter your name");
    return;
  }

  button.style.display = "none";
  testinput.style.display = "none";
  parentDiv.style.display = "block";

  
  backimageData();
  addCardEvents();
});


function backimageData() {
  flipCards.forEach((card, index) => {
    const backImage = document.createElement("img");
    backImage.src = hello[index];
    backImage.style.width = "140px";
    backImage.style.height = "155px";
    card.dataset.image = hello[index]; 
  });
}


flipFrontImg.addEventListener("click",()=>{


})
