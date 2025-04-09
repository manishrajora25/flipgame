const button = document.querySelector("#next_window");
const parentDiv = document.querySelector("#chenge_disply");

button.addEventListener("click", () => {
    button.style.display = "none"; 
    parentDiv.style.display = "block"; 
});


