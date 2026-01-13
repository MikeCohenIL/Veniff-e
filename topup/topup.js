const userData = localStorage.getItem("user");
const user = JSON.parse(userData);

function initCard() {
  const balanceDisplay = document.getElementById("balanceDisplay");
  const cardNameDisplay = document.getElementById("cardNameDisplay");

  // שליפת היתרה והשם מה-LocalStorage
  const currentBalance = user.balance;
  const fullName = user.name;

    balanceDisplay.innerText = "€ " + user.balance
    cardNameDisplay.innerText = user.name;
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
    let currentBalance = parseFloat(user.balance);
  if(amount>=9999999){
      msg.innerText = "Cannot load a value over 9999999";
      msg.style.color = "red";
      return;
  }
  if(currentBalance+amount>=9999999){
      msg.innerText = "Card Limit,Cannot load more money over 9999999";
      msg.style.color = "red";
      return;
  }

  // שליפת היתרה הנוכחית, הוספה ושמירה

  let newBalance = currentBalance + amount;

    user.balance = newBalance.toString();
    localStorage.setItem("user", JSON.stringify(user));


  // עדכון מיידי של התצוגה
  document.getElementById("balanceDisplay").innerText = "€ " + newBalance;
  amountInput.value = ""; // ניקוי השדה

  msg.innerText = "Successfully loaded €" + amount;
  msg.style.color = "green";
}

document.getElementById("topupBtn").addEventListener("click", handleTopup);
window.onload = initCard;
