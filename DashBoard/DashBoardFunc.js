const userData = localStorage.getItem("user");
const user = JSON.parse(userData);

let HelloUser=document.getElementById("HelloUser");
HelloUser.innerText=`Hello ${user.name}!`;

function GreetingByTime(){
    let now = new Date();
    let hour = now.getHours(); // Returns 0-23
    let greeting=document.getElementById("greetingByTime");
    if(hour<12 && hour > 6)
        greeting.innerText="Good Morning!";
    else if(hour<18 && hour > 12)
        greeting.innerText="Good Afternoon!";
    else if(hour<23 && hour > 18)
        greeting.innerText="Good Evening!";
    else
        greeting.innerText="Good Night!";

}
GreetingByTime();

let balance=document.getElementById("userBalance");
balance.innerText=`Balance: ${user.balance}€`;





///**load max 5 recent order procsses start here***//
function loadRecentOrders(){
    let PurchaseHistory=user.PurchaseHistory;
    if(PurchaseHistory.length==0){
       let spn=document.createElement("span");
           spn.textContent="No Purchase History";
        document.getElementById("myOrdersBlock").appendChild(spn);
        return;

    }
    else{
         let ul=document.getElementById("ordersList");
        let stopAt = Math.max(0, PurchaseHistory.length - 5);

        for (let i = PurchaseHistory.length - 1; i >= stopAt; i--) {
            let li = document.createElement("li");
            li.textContent = `Date: ${PurchaseHistory[i].Date} ProductName: ${PurchaseHistory[i].ProductName}`;
            ul.appendChild(li);
        }
        let lastOrder = PurchaseHistory[PurchaseHistory.length - 1];

        if (lastOrder) {
            document.getElementById("lastOrderDetails").innerText =
                `${lastOrder.ProductName} on ${lastOrder.Date} `;
        }
    }
}
loadRecentOrders();


//**load Member Status**//
function Status(){
    const now = new Date();
    const monthIndex = now.getMonth();
    const currentYear = now.getFullYear();
    const currentMonth = monthIndex + 1;
    const statusSpan=document.getElementById("status");
    let orderArr=user.PurchaseHistory;
    let parts
    let countOrders=0;
    if(orderArr.length==0){
        statusSpan.innerText="No Status";
        return;
    }
    for(let i=0;i<orderArr.length;i++){
        parts=orderArr[i].Date.split(".");

        if(currentMonth == parseInt(parts[1]) && currentYear == parseInt(parts[2])){
            countOrders++;
        }
    }

    if(countOrders>=10){
        statusSpan.innerText="GOLD"
    }
    else if(countOrders>=5){
        statusSpan.innerText="SILVER"

    }
    else
        statusSpan.innerText="No Status";

}
Status();

//**load recent orders ends here**//








///***histograma code starts here****///

function loadChart() {
    const data = localStorage.getItem("user");
    if (!data) return;

    const user = JSON.parse(data);
    const history = user.PurchaseHistory || [];

    // 1. Define the Map (ID to Name)
    const idToName = {
        "1": "Toasts",
        "2": "Pastries",
        "3": "Breakfasts",
        "4": "Desserts",
        "5": "Drinks",
        "6": "Sandwiches"
    };

    const counts = {};

    // 2. Loop through history and count by the NAME instead of the ID
    history.forEach(order => {
        // Convert the ID to the English name using our map
        const categoryName = idToName[order.Id] || "Other";

        counts[categoryName] = (counts[categoryName] || 0) + 1;
    });

    const labels = Object.keys(counts);
    const dataValues = Object.values(counts);
    const ctx = document.getElementById('myChart').getContext('2d');

    if (labels.length > 0) {
        let chartStatus = Chart.getChart("myChart");
        if (chartStatus !== undefined) {
            chartStatus.destroy();
        }

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels, // These will now be "Toasts", "Drinks", etc.
                datasets: [{
                    label: 'Items Ordered',
                    data: dataValues,
                    backgroundColor: '#DAC0A3',
                    borderColor: '#102C57',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { stepSize: 1 }
                    }
                }
            }
        });
    }
}
loadChart();