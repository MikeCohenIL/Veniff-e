function handleLogin() {
    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPass").value;
    const msg = document.getElementById("errorMsg");

    fetch('../DataBase/Users.json')
        .then(res => res.json())
        .then(users => {

            let validUser = null;

            // Use a LOOP to go through the json and seek for a match
            for (let i = 0; i < users.length; i++) {
                // Updated to match your JSON keys: Email and Password
                if (users[i].Email === email && users[i].Password === pass) {
                    validUser = users[i];
                    break;
                }
            }

            if (validUser) {
                localStorage.setItem("currentUser", JSON.stringify(validUser));
                window.location.href = "../DashBoard/DashBoard.html";
            } else {
                msg.innerText = "Invalid email or password";
                msg.style.color = "red";
            }

        })
        .catch(error => console.log("Error Fetching Users.json", error));
}

document.getElementById("loginBtn").addEventListener("click", handleLogin);