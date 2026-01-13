function handleLogin() {
    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPass").value;
    const msg = document.getElementById("errorMsg");

    // שליפת המשתמש היחיד שקיים
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // בדיקה אם קיים משתמש ואם הפרטים תואמים
    if (storedUser && storedUser.email === email && storedUser.password === pass) {
        window.location.href = "../DashBoard/DashBoard.html";
    } else {
        msg.innerText = "Invalid credentials or no user registered";
    }
}