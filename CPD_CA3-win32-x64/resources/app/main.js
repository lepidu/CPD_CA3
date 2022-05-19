'use strict';
const electron = require("electron");

const window = electron;

window.start_loader = function() {
    const loader = document.getElementById('loader-holder')
    loader.style.display = 'flex';
}
window.end_loader = function() {
    const loader = document.getElementById('loader-holder')
    loader.style.display = 'none';
}

window.onload = function() {
    setTimeout(() => {
        end_loader()
    }, 500)

    const eletricity_bill_Form = document.getElementById('bill_form')
    eletricity_bill_Form.addEventListener('submit', function(e) {
        e.preventDefault()
        start_loader();
        const numberUnits = document.getElementById('billing_units').value;
        const BillingPeriod = document.getElementById('billing_period').value;
        var totalPayable = 0,
            amountOfBillWithoutVAT = 0;
            amountOfBillWithoutVAT = ((parseFloat(numberUnits) * 0.20) + (parseFloat(BillingPeriod)  * 0.04));
            totalPayable = (parseFloat(amountOfBillWithoutVAT) + (parseFloat(amountOfBillWithoutVAT)* 13.5)/100);
        
        setTimeout(() => {
            document.getElementById('amount_bill').textContent = parseFloat(amountOfBillWithoutVAT).toLocaleString("en-US")
            document.getElementById('total_payable').textContent = parseFloat(totalPayable).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 }) + "%";
            
            document.getElementById('result').style.display = 'table';
            document.getElementById('reset-btn').style.display = 'block';
            end_loader()
        }, 500)

    })
    eletricity_bill_Form.addEventListener('reset', function(e) {
        start_loader();
        setTimeout(() => {

            document.getElementById('amount_bill').textContent = ""
            document.getElementById('total_payable').textContent = ""
            document.getElementById('result').style.display = 'none';
            document.getElementById('reset-btn').style.display = 'none';
           
            end_loader()
        }, 500)
    })
}
