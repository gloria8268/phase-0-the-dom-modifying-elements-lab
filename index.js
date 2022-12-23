// Write your code here!

const mainEl = document.querySelector('main')
mainEl.remove()

const newHeader = document.createElement("h1");

newHeader.setAttribute("id", "victory")

document.body.appendChild(newHeader);

newHeader.innerHTML = "is the champion"
