function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if fields are empty
    if (username === "" || password === "") {
        alert("Please fill in both fields.");
    } 
    // Check if username and password are correct
    else if (username === "kusal" && password === "12345") {
        // Redirect to the main page if credentials are correct
        window.location.href = "main.html";
    } 
    // If credentials are incorrect
    else {
        alert("Incorrect username or password.");
    }
}
