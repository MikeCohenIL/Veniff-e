


    function uploadOrders() {
        const fileInput = document.getElementById('fileOrders');

        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            const reader = new FileReader();

            reader.onload = function(e) {
                // 1. Parse the uploaded JSON (the array of new orders)
                const newOrders = JSON.parse(e.target.result);

                // 2. Get the current user from localStorage
                let userData = JSON.parse(localStorage.getItem("user"));

                // 3. The Loop: Manually pushing each order to the history
                for (let i = 0; i < newOrders.length; i++) {
                    userData.PurchaseHistory.push(newOrders[i]);
                }

                // 4. Save the updated user object back to localStorage
                localStorage.setItem("user", JSON.stringify(userData));

                console.log("Orders successfully pushed to history.");
            };

            reader.readAsText(file);
        }
    }


function uploadMenu(){
    const fileInput = document.getElementById('fileMenu');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const content = e.target.result;
            localStorage.setItem("products_db", content);
            console.log("Menu updated in localStorage");
        };
        reader.readAsText(file);
    }

}