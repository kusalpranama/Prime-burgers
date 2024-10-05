// scripts.js

// Check if there are existing orders in localStorage and load them
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// Function to handle form submission (adding items to the current order)
document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page refresh

    // Get input values
    const customerName = document.getElementById('customerName').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const orderItem = document.getElementById('orderItem');
    const itemName = orderItem.options[orderItem.selectedIndex].text.split(' - ')[0];
    const itemPrice = parseFloat(orderItem.options[orderItem.selectedIndex].getAttribute('data-price'));
    const itemQuantity = parseInt(document.getElementById('itemQuantity').value);
    const totalPrice = itemPrice * itemQuantity;

    // Create an order object
    const newOrder = {
        name: customerName,
        phone: customerPhone,
        item: itemName,
        quantity: itemQuantity,
        price: itemPrice,
        total: totalPrice
    };

    // Add new order to the orders array
    orders.push(newOrder);

    // Clear the form
    document.getElementById('orderForm').reset();

    // Re-render the order table
    renderOrderTable();
});

// Function to render the order table
function renderOrderTable() {
    const tableBody = document.getElementById('orderTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing table rows

    orders.forEach((order, index) => {
        const newRow = tableBody.insertRow();

        newRow.insertCell(0).innerText = order.name;
        newRow.insertCell(1).innerText = order.phone;
        newRow.insertCell(2).innerText = order.item;
        newRow.insertCell(3).innerText = order.quantity;
        newRow.insertCell(4).innerText = order.price.toFixed(2);
        newRow.insertCell(5).innerText = order.total.toFixed(2);

        // Action buttons
        const actionCell = newRow.insertCell(6);
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function () {
            deleteOrder(index);
        };

        actionCell.appendChild(deleteButton);
    });
}

// Function to delete an order
function deleteOrder(index) {
    orders.splice(index, 1); // Remove the order from the array
    renderOrderTable(); // Re-render the table
}

// Add event listener for "Place Order" button
document.getElementById('placeOrderButton').addEventListener('click', function () {
    if (orders.length === 0) {
        alert('No orders to place.');
        return;
    }

    // Store orders in localStorage
    localStorage.setItem('orders', JSON.stringify(orders));

    alert('Order placed successfully!');

    // Optionally, you can clear the orders after placing
    // orders = [];
    // renderOrderTable();
});

// Load existing orders on page load
renderOrderTable();
