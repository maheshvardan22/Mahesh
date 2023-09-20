
const nameInput = document.getElementById('name');
const priceInput = document.getElementById('price');
const tableSelect = document.getElementById('table');
const saveButton = document.getElementById('save');
const table1List = document.getElementById('table1');
const table2List = document.getElementById('table2');
const table3List = document.getElementById('table3');

// Function to create a delete button for a list item
function createDeleteButton(listItem) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    // Add a class to the delete button to style it as red
    deleteButton.classList.add('btn', 'btn-danger');

    deleteButton.addEventListener('click', function () {
        listItem.remove(); // Remove the list item when the delete button is clicked
        saveDataToLocalStorage();
    });
    return deleteButton;
}


// Function to save data to local storage
function saveDataToLocalStorage() {
    const table1Items = Array.from(table1List.children).map(item => item.textContent);
    const table2Items = Array.from(table2List.children).map(item => item.textContent);
    const table3Items = Array.from(table3List.children).map(item => item.textContent);

    localStorage.setItem('table1Items', JSON.stringify(table1Items));
    localStorage.setItem('table2Items', JSON.stringify(table2Items));
    localStorage.setItem('table3Items', JSON.stringify(table3Items));
}

// Function to load data from local storage
function loadDataFromLocalStorage() {
    const table1Items = JSON.parse(localStorage.getItem('table1Items')) || [];
    const table2Items = JSON.parse(localStorage.getItem('table2Items')) || [];
    const table3Items = JSON.parse(localStorage.getItem('table3Items')) || [];

    table1Items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        const deleteButton = createDeleteButton(listItem);
        listItem.appendChild(deleteButton);
        table1List.appendChild(listItem);
    });

    table2Items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        const deleteButton = createDeleteButton(listItem);
        listItem.appendChild(deleteButton);
        table2List.appendChild(listItem);
    });

    table3Items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        const deleteButton = createDeleteButton(listItem);
        listItem.appendChild(deleteButton);
        table3List.appendChild(listItem);
    });
}

// Add a click event listener to the Save button
saveButton.addEventListener('click', function () {
    const dishName = nameInput.value.trim(); // Trim to remove leading/trailing spaces
    const dishPrice = priceInput.value.trim();
    const selectedTable = tableSelect.value;

    // Check if dishName or dishPrice is empty, and if so, show an alert and don't save
    if (dishName === '' || dishPrice === '') {
        alert('Please fill in all details before saving.');
        return;
    }

    // Create a new list item to display the dish
    const listItem = document.createElement('li');
    listItem.textContent = `${dishName} - ₹${dishPrice}`;

    // Create a delete button for the list item
    const deleteButton = createDeleteButton(listItem);
    listItem.appendChild(deleteButton);

    // Append the new list item to the selected table's list
    switch (selectedTable) {
        case '1':
            table1List.appendChild(listItem);
            break;
        case '2':
            table2List.appendChild(listItem);
            break;
        case '3':
            table3List.appendChild(listItem);
            break;
        default:
            alert('Please select a table.');
    }

    // Save the data to local storage
    saveDataToLocalStorage();

    // Clear the input fields
    nameInput.value = '';
    priceInput.value = '';
});
