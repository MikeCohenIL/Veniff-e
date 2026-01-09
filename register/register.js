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

  // 1. בדיקות תקינות (רגילות)
  if (name.trim() === "") {
    msg.innerText = "Please enter your full name";
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

  // --- החלק החדש: ניהול מערך משתמשים ---

  // 2. שליפת רשימת המשתמשים הקיימת (אם אין, יוצרים מערך ריק)
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // 3. בדיקה האם המייל כבר קיים במערך
  // הפונקציה some רצה על המערך ובודקת אם קיים משתמש עם אותו מייל
  const userExists = users.some(user => user.email === email);

  if (userExists) {
    msg.innerText = "This email is already registered!";
    msg.style.color = "orange";
    return;
  }

  // 4. יצירת אובייקט למשתמש החדש
  const newUser = {
    name: name,
    email: email,
    password: pass,
    balance: 0 // נאתחל לו גם ארנק ריק
  };

  // 5. הוספה למערך ושמירה מחדש
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  msg.innerText = "Registration successful! You can now login.";
  msg.style.color = "green";

  // אופציונלי: ניקוי השדות
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
}

document.getElementById("regBtn").addEventListener("click", handleRegister);
