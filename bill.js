//This javascript will have the function of calculating to pay with and without VAT
const { ipcRenderer } = require ('electron');

//The elements identified in the HTML file with the assigned ID will be obtained
const billForm = document.getElementById('billForm');
    billForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const numberUnits = document.getElementById('billing_units').value;
        const billingPeriod = document.getElementById('billing_period').value;
        
        //This part of the code was adapted following the logic of Tutorial 11 seen in class.
        let u = 0.20;
        let d = 0.04;
        let vat = 13.5;
        let amountVAT = 0;
        let amountOutVAT = 0;

            //The math round function is used, which gives us the closest integer as a result.
            amountOutVAT = (parseFloat(numberUnits) * u) + (parseFloat(billingPeriod)  * d);
            amountOutVAT= Math.round(amountOutVAT);
            console.log(amountOutVAT);
            amountVAT = (amountOutVAT + (amountOutVAT * vat /100));
            amountVAT = Math.round(amountVAT);
            console.log(amountVAT);
            ipcRenderer.send('submit', amountOutVAT, amountVAT);
    })
