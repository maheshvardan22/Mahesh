


var mainHeader = document.getElementById("header-title");
var helloWorld = document.createElement("span");
helloWorld.textContent = "HEllo ";
mainHeader.parentElement.insertBefore(helloWorld, mainHeader);


var itemsList = document.getElementById("items");
var newItem = document.createElement("li");
newItem.textContent = "HEllo";
itemsList.insertBefore(newItem, itemsList.firstElementChild);


var items = document.querySelectorAll("#items .list-group-item");

var parentElement = items[1].parentElement;
var lastElementChild = parentElement.lastElementChild;
var lastChild = parentElement.lastChild;
var createChild = document.createElement("li");
var firstElementChild = parentElement.firstElementChild;
var firstChild = parentElement.firstChild;
var nextSibling = items[1].nextSibling;
var nextElementSibling = items[1].nextElementSibling;
var previousSibling = items[1].previousSibling;
var previousElementSibling = items[1].previousElementSibling;
var createElement = document.createElement("li");
createElement.setAttribute("class", "list-group-item");
var createTextNode = document.createTextNode("New Item");
createElement.appendChild(createTextNode);

parentElement.appendChild(createElement);

console.log(parentElement);
console.log(lastElementChild);
console.log(lastChild);
console.log(createChild);
console.log(firstElementChild);
console.log(firstChild);
console.log(nextSibling);
console.log(nextElementSibling);
console.log(previousSibling);
console.log(previousElementSibling);
console.log(createElement);

