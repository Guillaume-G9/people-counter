// document.getElementById("count").innerText = 5

let count = 0 
let counting = document.getElementById("count")
let previousEntries = document.getElementById("previous")
let totalEnt = document.getElementById("total")
let total = 0

function increment() {
    count += 1
    counting.textContent = count;
}

function save() {
    total += count
    previousEntries.textContent += `${count} - `;
    totalEnt.innerHTML = `Total entries: ${total} `;
    count = 0;
    counting.textContent = 0;
}

