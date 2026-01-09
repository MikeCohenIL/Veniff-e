function handleLogin() {
  // מניח שיש לך ב-HTML של הלוגין IDs כאלה
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPass").value;
  const msg = document.getElementById("errorMsg"); // או שם אחר שנתת להודעה

  // 1. שליפת רשימת המשתמשים
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // 2. חיפוש המשתמש הספציפי
  // הפונקציה find מחזירה את האובייקט אם נמצא, או undefined אם לא
  const validUser = users.find(user => user.email === email && user.password === pass);

  if (validUser) {
    // 3. לוגין מוצלח: שומרים את המשתמש הנוכחי בנפרד ("session")
    // זה יעזור לנו בדשבורד לדעת מי מחובר כרגע
    localStorage.setItem("currentUser", JSON.stringify(validUser));

      window.location.href = "..\\DashBoard\\DashBoard.html";
  } else {
    msg.innerText = "Invalid email or password";
    msg.style.color = "red";
  }
}

// וודאי שהכפתור בלוגין מפעיל את הפונקציה
 document.getElementById("loginBtn").addEventListener("click", handleLogin);
