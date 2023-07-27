
var secondItem = document.querySelector("#items .list-group-item:nth-child(2)");
secondItem.style.backgroundColor = "green";


var thirdItem = document.querySelector("#items .list-group-item:nth-child(3)");
thirdItem.style.display = "none";

var items = document.querySelectorAll("#items .list-group-item");
if (items.length >= 2) {
  items[1].style.color = "green";
}

var oddItems = document.querySelectorAll("#items .list-group-item:nth-child(odd)");
oddItems.forEach(function(item) {
  item.style.backgroundColor = "green";
});
