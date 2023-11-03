let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let saveBtn = document.getElementById("save-btn")
let incrementBtn = document.getElementById("increment-btn")


let count = 0

incrementBtn.addEventListener("click", function() {
    count += 1;
    countEl.innerText = count;
    if ((count % 2) != 0) {
        incrementBtn.style.backgroundColor = "darkblue";
    } else {
        incrementBtn.style.backgroundColor = "darkred";
}});


saveBtn.addEventListener("click", function(){
    entries = count + " - ";
    saveEl.textContent += entries;
    count = 0;
    countEl.innerText = count;
    incrementBtn.style.backgroundColor = "darkred";
});