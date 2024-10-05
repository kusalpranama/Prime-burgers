// scripts.js

// Initialize an empty array to store customer data
const customers = [];

// Function to handle form submission
document.getElementById('customerForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page refresh

    // Get input values
    const customerName = document.getElementById('customerName').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const customerID = document.getElementById('customerID').value || `CUST${Date.now()}`; // Generate ID if not provided

    // Check if customer with the same phone number already exists (for updating)
    const existingCustomerIndex = customers.findIndex(c => c.phone === customerPhone);
    if (existingCustomerIndex !== -1) {
        customers[existingCustomerIndex] = { name: customerName, phone: customerPhone, email: customerEmail, id: customerID };
    } else {
        // Add new customer
        customers.push({ name: customerName, phone: customerPhone, email: customerEmail, id: customerID });
    }

    // Clear the form
    document.getElementById('customerForm').reset();

    // Re-render the customer table
    renderCustomerTable();
});

// Function to render the customer table
function renderCustomerTable() {
    const tableBody = document.getElementById('customerTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing table rows

    customers.forEach((customer, index) => {
        const newRow = tableBody.insertRow();

        newRow.insertCell(0).innerText = customer.name;
        newRow.insertCell(1).innerText = customer.phone;
        newRow.insertCell(2).innerText = customer.email;
        newRow.insertCell(3).innerText = customer.id;

        // Action buttons
        const actionCell = newRow.insertCell(4);
        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.onclick = function () {
            loadCustomerData(index);
        };
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function () {
            deleteCustomer(index);
        };

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);
    });
}

// Function to load customer data into the form for editing
function loadCustomerData(index) {
    const customer = customers[index];
    document.getElementById('customerName').value = customer.name;
    document.getElementById('customerPhone').value = customer.phone;
    document.getElementById('customerEmail').value = customer.email;
    document.getElementById('customerID').value = customer.id;
}

// Function to delete a customer
function deleteCustomer(index) {
    customers.splice(index, 1); // Remove customer from the array
    renderCustomerTable(); // Re-render the table
}
