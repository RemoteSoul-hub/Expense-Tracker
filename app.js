let name = document.getElementById('name');
let date = document.getElementById('date');
let amount = document.getElementById('amount');
let add = document.getElementById('submit');
let table = document.getElementById('table');


/// Event listener to Name
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

//Event Listener to Date



// Event listener to Amount

add.addEventListener('click', addItem);
//Submit Function


// Add new Tr to table