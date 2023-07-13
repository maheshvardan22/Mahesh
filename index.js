

var itemsContainer = document.getElementById('items');
var newItem = document.createElement('li');
newItem.textContent = 'New Item';
itemsContainer.appendChild(newItem);

var items = document.getElementsByClassName('list-group-item');
if (items.length > 0) {
  items[items.length - 1].style.backgroundColor = 'blue';
}

var listItems = itemsContainer.getElementsByTagName('li');
if (listItems.length > 0) {
  listItems[listItems.length - 1].style.fontWeight = 'italic';
}


