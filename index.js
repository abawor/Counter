const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")
const saveBtn = document.getElementById("save-btn")
const incrementBtn = document.getElementById("increment-btn")
const resetBtn = document.getElementById("reset-btn")

let count = 0

incrementBtn.addEventListener("click", function() {
    count += 1;
    countEl.innerText = count;
});

saveBtn.addEventListener("click", function() {
    entries = count + " - ";
    saveEl.textContent += entries;
    count = 0;
    countEl.innerText = count;
});

resetBtn.addEventListener("dblclick", function() {
    count = 0
    countEl.textContent = 0
    countEl.saveEl = "Previous entries: "
})