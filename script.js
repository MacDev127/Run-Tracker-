const goal = 25;

//---------------------Entries Array------------\\
let entries = []
const entriesWrapper = document.querySelector("#entries");
document.querySelector("#target").innerText = goal;

//---------------------Create list item for every new entry--------\\
function addNewEntry(newEntry) {
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
    const listItem = document.createElement('li');
    const listValue = document.createTextNode(newEntry.toFixed(1));
    listItem.appendChild(listValue);

    entriesWrapper.appendChild(listItem);
}

function reducer(total, currentValue) {
    return total + currentValue;
}

// ------------------------Calculate Total------------------------ \\
function calcTotal() {
    const totalValue = entries.reduce(reducer).toFixed(1);
    document.getElementById("total").innerText = totalValue;
    document.getElementById("progressTotal").innerText = totalValue;
}
// ------------------------Calculate Average------------------------ \\
function calcAverage() {
    const average = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById("average").innerText = average;
}

// ------------------------Calculate highest value ------------------------ \\
function weeklyHigh() {
    const high = Math.max(...entries);
    document.getElementById("high").innerText = high;
}

//-----------------------------------Progress Circle------------------------\\
function calcGoal() {
    const totalValue = entries.reduce(reducer).toFixed(1);
    const completedPercent = totalValue / (goal / 100);
    const progressCircle = document.querySelector('.progressCircle');
    if (completedPercent > 100) completedPercent === 100;
    progressCircle.style.background = `conic-gradient(#2A9D8F ${completedPercent}%, #23404D ${completedPercent}% 100% )`;
}
//Stop page from refreshing
function handleSubmit(event) {
    event.preventDefault();
    const entry = Number(document.querySelector("#entry").value);

    //--------------Clear form input after value is entered---------------\\
    if (!entry) return;
    document.querySelector('form').reset();
    entries.push(entry);
    addNewEntry(entry);
    calcTotal();
    calcAverage();
    weeklyHigh();
    calcGoal();
}

const form = document.querySelector('form').addEventListener('submit', handleSubmit);