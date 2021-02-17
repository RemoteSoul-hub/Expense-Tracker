let name = document.getElementById('name');
let date = document.getElementById('date');
let amount = document.getElementById('amount');
let add = document.getElementById('submit');
let table = document.getElementById('table');
let reset = document.getElementById('reset');

/// Event listener to Name
//Event Listener to Date
// Event listener to Amount
function addItem(e) {
    e.preventDefault();
    // Get value of input
    let newName = document.getElementById('name').value;
    let newDate = document.getElementById('date').value;
    let newAmount = document.getElementById('amount').value;
    let row = table.insertRow(1);
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    cell0.innerHTML = newName;
    cell1.innerHTML = newDate;
    cell2.innerHTML = newAmount;
}



add.addEventListener('click', addItem);
reset.addEventListener('click', clearAll);
// Clear / Reset function
function clearAll(e) {
    e.preventDefault();
    while (table.rows.length > 1) {
        table.deleteRow(1);
      }
}