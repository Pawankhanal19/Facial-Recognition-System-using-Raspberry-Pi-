document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.querySelector('input').value.toLowerCase().trim();
    const password = document.querySelector('input[type="password"]').value;

    if (username === "" || password === "") {
        alert("Please enter both a username and password.");
        return;
    }

    if (username.includes("admin")) {
        window.location.href = "admin.html"; 
    } 
    else if (username.includes("lecturer")) {
        window.location.href = "lecturer.html";
    } 
    else if (username.includes("student")) {
        window.location.href = "student.html";
    } 
    else {
        alert("Invalid login! Use a username containing 'admin', 'lecturer', or 'student'.");
    }
});
