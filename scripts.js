// scripts.js

// Sample data for initial items
const initialItems = [
    { name: "Classic Burger", price: 750, quantity: 50, code: "B1001", image: "assets/order-1.png" },
    { name: "Turkey Burger", price: 800, quantity: 30, code: "B1003", image: "assets/order-2.png" },
    { name: "Cheese Burger", price: 1000, quantity: 20, code: "B1006", image: "assets/order-2.png" },
    { name: "Chicken Burger (Large)", price: 1400, quantity: 25, code: "B1004", image: "assets/order-1.png" },
    { name: "Chicken Burger (Regular)", price: 800, quantity: 30, code: "B1005", image: "assets/order-2.png", discount: "20%" },
    { name: "Cheese Burger (Large)", price: 1000, quantity: 20, code: "B1006", image: "assets/order-3.png" },
    { name: "Cheese Burger (Regular)", price: 600, quantity: 15, code: "B1007", image: "assets/order-3.png" },
    { name: "Bacon Burger", price: 650, quantity: 18, code: "B1008", image: "assets/reservation-bg-2.png", discount: "15%" },
    { name: "Shawarma Burger", price: 800, quantity: 22, code: "B1009", image: "assets/reservation-bg-1.png" },
    { name: "Olive Burger", price: 1800, quantity: 20, code: "B1010", image: "assets/banner-2.png" },
    { name: "Double-Cheese Burger", price: 1250, quantity: 28, code: "B1012", image: "assets/banner-1.png", discount: "20%" },
    { name: "Crispy Chicken Burger (Regular)", price: 1200, quantity: 35, code: "B1013", image: "assets/event.png" },
];

// Function to populate the initial items in the table
function populateInitialItems() {
    const tableBody = document.getElementById('itemTable').getElementsByTagName('tbody')[0];

    initialItems.forEach(item => {
        const newRow = tableBody.insertRow();
        const imageCell = newRow.insertCell(0);
        const img = document.createElement('img');
        img.src = item.image; // Use the image URL
        img.alt = item.name;
        img.style.width = "50px"; // Set a width for the image
        img.style.height = "auto"; // Maintain aspect ratio
        imageCell.appendChild(img);

        newRow.insertCell(1).innerText = item.name;
        newRow.insertCell(2).innerText = item.price;
        newRow.insertCell(3).innerText = item.quantity;
        newRow.insertCell(4).innerText = item.code;

        // Add an action button for deleting the item
        const actionCell = newRow.insertCell(5);
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function () {
            tableBody.deleteRow(newRow.rowIndex - 1); // Remove the row
        };
        actionCell.appendChild(deleteButton);
    });
}

// Function to handle form submission
document.getElementById('itemForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page refresh

    // Get input values
    const itemName = document.getElementById('itemName').value;
    const itemPrice = document.getElementById('itemPrice').value;
    const itemQuantity = document.getElementById('itemQuantity').value;
    const itemCode = document.getElementById('itemCode').value;
    const itemImage = document.getElementById('itemImage').value; // Get image URL

    // Create a new row for the table
    const tableBody = document.getElementById('itemTable').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    // Insert new cells for each item detail
    const imageCell = newRow.insertCell(0);
    const img = document.createElement('img');
    img.src = itemImage; // Use the entered image URL
    img.alt = itemName;
    img.style.width = "50px"; // Set a width for the image
    img.style.height = "auto"; // Maintain aspect ratio
    imageCell.appendChild(img);

    newRow.insertCell(1).innerText = itemName;
    newRow.insertCell(2).innerText = itemPrice;
    newRow.insertCell(3).innerText = itemQuantity;
    newRow.insertCell(4).innerText = itemCode;

    // Add an action button for deleting the item
    const actionCell = newRow.insertCell(5);
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function () {
        tableBody.deleteRow(newRow.rowIndex - 1); // Remove the row
    };
    actionCell.appendChild(deleteButton);

    // Clear the form inputs
    document.getElementById('itemForm').reset();
});

// Call function to populate initial items
populateInitialItems();
