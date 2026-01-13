function handleRegister() {
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const pass = document.getElementById("regPass").value;
    const msg = document.getElementById("msg");

    // בדיקות תקינות בסיסיות
    if (name.trim() === "" || email === "" || pass === "") {
        msg.innerText = "Please fill in all fields";
        msg.style.color = "red";
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        msg.innerText = "Invalid email format!";
        msg.style.color = "red";
        return;
    }

    if (pass.length < 3) {
        msg.innerText = "Password must be at least 8 characters!";
        msg.style.color = "red";
        return;
    }

    // --- החלק המעודכן: אחסון משתמש בודד ---

    // 1. יצירת אובייקט למשתמש החדש
    const newUser = {
        name: name,
        email: email,
        password: pass,
        balance: 0,
        PurchaseHistory: []
    };

    // 2. שמירה ב-LocalStorage (הפעולה הזו דורסת אוטומטית את מה שהיה תחת המפתח "user")
    localStorage.setItem("user", JSON.stringify(newUser));

    msg.innerText = "Registration successful! Previous user data was replaced.";
    msg.style.color = "green";

    // ניקוי שדות ומעבר לדף התחברות
    setTimeout(() => {
        window.location.href = "../login/login.html";
    }, 1500);
}

document.getElementById("regBtn").addEventListener("click", handleRegister);