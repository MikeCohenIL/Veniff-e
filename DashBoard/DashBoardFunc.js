const userData=localStorage.getItem("currentUser");
const user=JSON.parse(userData);

let HelloUser=document.getElementById("HelloUser");
HelloUser.innerText=`Hello ${user.Username}!`;

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
balance.innerText=`Balance: ${user.Balance}€`;

function loadRecentOrders(){
    let PurchaseHistory=user.PurchaseHistory;
    if(PurchaseHistory.length==0){
       let spn=document.createElement("span");
           spn.textContent="NO Purchase History";
        document.getElementById("myOrdersBlock").appendChild(spn);
        return;

    }
    else{
         let ul=document.getElementById("ordersList");
        let stopAt = Math.max(0, PurchaseHistory.length - 5);

// Start at the very end, and go down until we hit the stop point
        for (let i = PurchaseHistory.length - 1; i >= stopAt; i--) {
            let li = document.createElement("li");
            li.textContent = `Date: ${PurchaseHistory[i].Date} ProductName: ${PurchaseHistory[i].ProductName}`;
            ul.appendChild(li);
        }
    }
}
loadRecentOrders();



// 1. Prepare the data for the Chart
let PurchaseHistory = user.PurchaseHistory;
const counts = {};

// Loop through history to count how many of each Category exists
for (let i = 0; i < PurchaseHistory.length; i++) {
    const cat = PurchaseHistory[i].Category;
    // This creates a tally: { "Drinks": 3, "Toasts": 1, etc }
    counts[cat] = (counts[cat] || 0) + 1;
}

// Create the arrays Chart.js needs
const labels = Object.keys(counts);    // Example: ["Drinks", "Toasts", "Salads"]
const dataValues = Object.values(counts); // Example: [3, 1, 1]

// 2. Now initialize the Chart
const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Orders',
            data: dataValues,
            backgroundColor: '#DAC0A3',
            borderColor: '#102C57',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#102C57',
                    stepSize: 1
                }
            },
            x: {
                ticks: {
                    color: '#102C57'
                }
            }
        }
    }
});
