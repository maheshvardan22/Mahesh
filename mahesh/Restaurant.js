// Sample menu items data
const menuItems = [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 15 },
    { name: "Item 3", price: 12 },
    // Add more menu items here
];

// Array to store saved orders
const savedOrders = [];

// Function to display the menu items
function displayMenu() {
    const menuList = document.getElementById("menu-list");
    menuList.innerHTML = '';

    menuItems.forEach((item) => {
        const menuItem = document.createElement("li");
        menuItem.innerHTML = `<input type="checkbox" id="${item.name}"><label for="${item.name}">${item.name} - $${item.price}</label>`;
        menuList.appendChild(menuItem);
    });
}

// Function to place an order
function placeOrder() {
    const table = document.getElementById("table").value;
    const orderList = document.getElementById("order-list");
    const selectedItems = menuItems.filter(item => document.getElementById(item.name).checked);

    if (selectedItems.length === 0) {
        alert("Please select at least one item.");
        return;
    }

    const total = selectedItems.reduce((sum, item) => sum + item.price, 0);
    const order = {
        table,
        items: selectedItems,
        total,
    };

    savedOrders.push(order);
    updateSavedOrders();

    // Reset the selected checkboxes
    menuItems.forEach(item => document.getElementById(item.name).checked = false);
}

// Function to update the saved orders list
function updateSavedOrders() {
    const orderList = document.getElementById("order-list");
    orderList.innerHTML = '';

    savedOrders.forEach((order, index) => {
        const orderItem = document.createElement("li");
        orderItem.innerHTML = `<b>Table:</b> ${order.table} - <b>Items:</b> ${order.items.map(item => item.name).join(", ")} - <b>Total:</b> $${order.total}`;
        orderList.appendChild(orderItem);
    });
}

// Call displayMenu function when the page loads
displayMenu();
