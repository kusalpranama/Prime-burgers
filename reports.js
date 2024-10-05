// reports.js

// Generate Monthly Sales Report
document.getElementById('generateMonthlySales').addEventListener('click', function() {
    // Simulate total sales
    const totalSales = 150000.00; // Example data, this could be dynamically calculated from orders
    document.getElementById('monthlySales').innerText = `LKR ${totalSales.toFixed(2)}`;
});

// Generate Top Customers Report
document.getElementById('generateTopCustomers').addEventListener('click', function() {
    // Simulate top customers
    const topCustomers = [
        { name: "John Doe", orders: 12 },
        { name: "Jane Smith", orders: 10 },
        { name: "Alice Brown", orders: 8 }
    ];

    const topCustomersList = document.getElementById('topCustomers');
    topCustomersList.innerHTML = ''; // Clear existing list

    topCustomers.forEach(customer => {
        const listItem = document.createElement('li');
        listItem.innerText = `${customer.name} - ${customer.orders} orders`;
        topCustomersList.appendChild(listItem);
    });
});

// Generate Food Item Sales Trends
document.getElementById('generateFoodItemTrends').addEventListener('click', function() {
    // Simulate top-selling food items
    const foodItems = [
        { name: "Classic Burger", sales: 120 },
        { name: "Cheese Burger", sales: 110 },
        { name: "Turkey Burger", sales: 95 }
    ];

    const foodItemList = document.getElementById('foodItemTrends');
    foodItemList.innerHTML = ''; // Clear existing list

    foodItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} - ${item.sales} sold`;
        foodItemList.appendChild(listItem);
    });
});
