const userData=localStorage.getItem("user");
const user=JSON.parse(userData);


function loadOrders(){
    let PurchaseHistory=user.PurchaseHistory;
    if(PurchaseHistory.length==0){
        let spn=document.createElement("span");
        spn.textContent="NO Purchase History";
        document.getElementById("myOrdersBlock").appendChild(spn);
        return;

    }
    else{
        let ul=document.getElementById("ordersList");

        for (let i = 0; i < PurchaseHistory.length; i++) {
            let li = document.createElement("li");
            li.textContent = `Date: ${PurchaseHistory[i].Date} ProductName: ${PurchaseHistory[i].ProductName}`;
            ul.appendChild(li);
        }
    }
}


loadOrders();