// פונקציה להצגת הנתונים בטעינת הדף
function initCard() {
  const balanceDisplay = document.getElementById("balanceDisplay");
  const cardNameDisplay = document.getElementById("cardNameDisplay");

  // שליפת היתרה והשם מה-LocalStorage
  const currentBalance = localStorage.getItem("balance") || "0";
  const fullName = localStorage.getItem("fullName") || "Member";

  balanceDisplay.innerText = "₪ " + currentBalance;
  cardNameDisplay.innerText = fullName;
}

function handleTopup() {
  const amountInput = document.getElementById("topupAmount");
  const msg = document.getElementById("topupMsg");
  const amount = parseFloat(amountInput.value);

  // בדיקה שהסכום תקין
  if (isNaN(amount) || amount <= 0) {
    msg.innerText = "Please enter a valid amount";
    msg.style.color = "red";
    return;
  }

  // שליפת היתרה הנוכחית, הוספה ושמירה
  let currentBalance = parseFloat(localStorage.getItem("balance") || "0");
  let newBalance = currentBalance + amount;

  localStorage.setItem("balance", newBalance.toString());

  // עדכון מיידי של התצוגה
  document.getElementById("balanceDisplay").innerText = "₪ " + newBalance;
  amountInput.value = ""; // ניקוי השדה

  msg.innerText = "Successfully loaded ₪" + amount;
  msg.style.color = "green";
}

document.getElementById("topupBtn").addEventListener("click", handleTopup);
window.onload = initCard;
