// document.getElementById("count").innerText = 5

let count = 0 
let counting = document.getElementById("count")
let previousEntries = document.getElementById("previous")
let totalEnt = document.getElementById("total")

function increment() {
    count += 1
    counting.textContent = count;
}

function save() {
    previousEntries.textContent += `${count} - `;
    totalEnt.innerHTML = `Total entries: ${count} `;
    count = 0;
    counting.textContent = 0;
}

