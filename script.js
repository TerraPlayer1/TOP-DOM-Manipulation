const container = document.querySelector(".content"); 

const p = document.createElement("p"); // Creating and styling p
container.appendChild(p);
p.style.color = "red";
p.textContent = "Hey I'm red!";


const h3 = document.createElement("h3"); // Creating and styling h3
container.appendChild(h3);
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!"


const div = document.createElement("div"); // Creating and styling div with h1 and p inside 
const h1ForDiv = document.createElement("h1");
const pForDiv = document.createElement("p");
div.appendChild(h1ForDiv);
div.appendChild(pForDiv);
container.appendChild(div);
div.style.cssText = "background: pink; border-style: solid; border-color: black";
h1ForDiv.textContent = "I'm in a div";
pForDiv.textContent = "ME TOO!";
