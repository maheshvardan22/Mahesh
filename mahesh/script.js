const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    const expenseData = {
        title: description,
        amount: amount
    };

    axios.post(`${API_BASE_URL}/expenses`, expenseData)
        .then(() => {
            showExpenses();
            clearForm();
        })
        .catch((err) => {
            console.error(err);
        });
});

function clearForm() {
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}

function showExpenses() {
    axios.get(`${API_BASE_URL}/expenses`)
        .then((response) => {
            const expensesList = response.data;
            const listElement = document.getElementById('list');
            listElement.innerHTML = '';

            expensesList.forEach((expense) => {
                const listItem = document.createElement('li');
                listItem.textContent = `Description: ${expense.title}, Amount: $${expense.amount.toFixed(2)}`;
                listElement.appendChild(listItem);
            });

            const expensesListDiv = document.getElementById('expensesList');
            expensesListDiv.style.display = 'block';
        })
        .catch((err) => {
            console.error(err);
        });
}

showExpenses();
