// Get the items list
const itemList = document.getElementById("items");

// Add event listener to the items list
itemList.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete")) {
    // Remove the li element when delete button is clicked
    event.target.parentElement.remove();
  }
});

// Add edit button to each list item
const listItems = itemList.getElementsByTagName("li");
for (let i = 0; i < listItems.length; i++) {
  const deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  deleteButton.textContent = "X";
  
  const editButton = document.createElement("button");
  editButton.className = "btn btn-primary btn-sm float-right edit";
  editButton.textContent = "Edit";
  
  listItems[i].appendChild(editButton);
  listItems[i].appendChild(deleteButton);
}
