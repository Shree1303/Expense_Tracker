const expenses = [];

const addExpense = () => {
  const amount = document.getElementById('amount').value;
  const category = document.getElementById('category').value;
  const date = document.getElementById('date').value;

  if (amount && category && date) {
    expenses.push({ amount: +amount, category, date });
    document.getElementById('amount').value = '';
    document.getElementById('category').value = '';
    document.getElementById('date').value = '';
  } else {
    alert("Please fill all fields.");
  }
};

const displaySummary = () => {
  const date = document.getElementById('filterDate').value;
  const filtered = expenses.filter(e => e.date === date);
  const total = filtered.reduce((sum, { amount }) => sum + amount, 0);

  document.getElementById('summary').textContent =
    filtered.length ? `Total: $${total.toFixed(2)}` : "No expenses for this day.";
};
