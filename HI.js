
const filterInput = document.getElementById('filter');
const addForm = document.getElementById('addForm');
const itemList = document.getElementById('items');

filterInput.addEventListener('input', filterItems);

addForm.addEventListener('submit', addItem);

function filterItems(e) {

  const searchString = e.target.value.toLowerCase();

  
  const items = itemList.getElementsByTagName('li');

  Array.from(items).forEach(function (item) {
    const itemName = item.firstChild.textContent.toLowerCase();
    const itemDescription = item.lastChild.previousSibling.textContent.toLowerCase();

    if (itemName.includes(searchString) || itemDescription.includes(searchString)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


function addItem(e) {
  e.preventDefault();

  const newItemInput = document.getElementById('item');
  const newItemDescription = newItemInput.value;

  const newItem = document.createElement('li');
  newItem.className = 'list-group-item';

  const itemName = document.createElement('span');
  itemName.textContent = newItemDescription;
  newItem.appendChild(itemName);

  const itemDescription = document.createElement('span');
  itemDescription.textContent = newItemDescription;
  newItem.appendChild(itemDescription);

  
  const editBtn = document.createElement('button');
  editBtn.className = 'btn btn-primary btn-sm float-right edit';
  editBtn.textContent = 'Edit';
  newItem.appendChild(editBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.textContent = 'X';

  newItem.appendChild(deleteBtn);

  itemList.appendChild(newItem);


  newItemInput.value = '';
}

itemList.addEventListener('click', deleteItem);


function deleteItem(e) {
  if (e.target.classList.contains('delete')) {
    const listItem = e.target.parentElement;
    itemList.removeChild(listItem);
  }
}

itemList.addEventListener('click', editItem);

function editItem(e) {
  if (e.target.classList.contains('edit')) {
    const listItem = e.target.parentElement;
    const itemName = listItem.firstChild.textContent;
    const newItemDescription = prompt('Edit item:', itemName);

    if (newItemDescription !== null) {
      listItem.firstChild.textContent = newItemDescription;
      listItem.lastChild.previousSibling.textContent = newItemDescription;
    }
  }
}

const initialItems = ['HONDA', 'TESLA'];

initialItems.forEach(function (item) {
  const listItem = document.createElement('li');
  listItem.className = 'list-group-item';
  listItem.textContent = item;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.textContent = 'X';
  listItem.appendChild(deleteBtn);

  itemList.appendChild(listItem);
});


