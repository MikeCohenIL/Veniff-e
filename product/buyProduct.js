function buyNow(btn) {
    const data = localStorage.getItem("user");
    let user = JSON.parse(data);
    const catId=localStorage.getItem("Id");
    let currentBalance=document.getElementById("currentBalance");



    let card = btn.parentElement;
    let name = card.querySelector('.productName').innerText;
    let priceText = card.querySelector('.productPrice').innerText;

    let price = parseInt(priceText.slice(1));

    if (user.balance >= price) {

        user.balance -= price;
        currentBalance.innerHTML = user.balance+" €";

        const now = new Date();
        let newPurchase = {
            ProductName: name,
            Id: JSON.parse(catId),
            Price: price,
            Date: now.toLocaleDateString()
        };

        user.PurchaseHistory.push(newPurchase);

        localStorage.setItem("user", JSON.stringify(user));

        // 8. Update the UI
        alert(`Purchase Successful! You bought ${name}.`);


    } else {
        alert("Insufficient Funds! You need more money.");
    }
}