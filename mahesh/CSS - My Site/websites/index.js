function displayExpenses(expenses) {
  const expenseList = document.getElementById('expenseList');
  expenseList.innerHTML = '';

  expenses.forEach((expense, index) => {
    const { description, amount, category } = expense;
    const expenseItem = document.createElement('div');
    expenseItem.innerHTML = `
      <span>${description}: $${amount.toFixed(2)} (Category: ${category})</span>
      <button onclick="editExpense(${index})">Edit</button>
      <button onclick="deleteExpense(${index})">Delete</button>
    `;
    expenseList.appendChild(expenseItem);
  });
}


function addExpense(description, amount, category) {
  const expenses = getExpenses();
  expenses.push({ description, amount, category });
  localStorage.setItem('expenses', JSON.stringify(expenses));
  displayExpenses(expenses);
}


function editExpense(index) {
  const expenses = getExpenses();
  const expense = expenses[index];
  const newDescription = prompt('Enter the new description:', expense.description);
  const newAmount = parseFloat(prompt('Enter the new amount:', expense.amount));
  const newCategory = prompt('Enter the new category:', expense.category);

  if (newDescription && !isNaN(newAmount) && newAmount > 0 && newCategory) {
    expense.description = newDescription;
    expense.amount = newAmount;
    expense.category = newCategory;
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses(expenses);
  }
}


function deleteExpense(index) {
  const expenses = getExpenses();
  expenses.splice(index, 1);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  displayExpenses(expenses);
}


function getExpenses() {
  const expenses = JSON.parse(localStorage.getItem('expenses'));
  return expenses ? expenses : [];
}


const expenseForm = document.getElementById('expenseForm');
expenseForm.addEventListener('submit', event => {
  event.preventDefault();
  const description = document.getElementById('description').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;
  
  if (description && !isNaN(amount) && amount > 0 && category) {
    addExpense(description, amount, category);
    expenseForm.reset();
  }
});

const initialExpenses = getExpenses();
displayExpenses(initialExpenses);
