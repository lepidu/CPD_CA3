'use strict';
const electron = require('electron');
const {ipcRenderer} = electron;

const billForm = document.getElementById('bill_form');
    billForm.addEventListener('submit', totalAmount);

    
    function getValues(){
        const numberUnits = document.getElementById('billing_units').value;
        const billingPeriod = document.getElementById('billing_period').value;
        return{numberUnits, billingPeriod}
    }
    
    function totalAmount(e){
        e.preventDefault();
        const {numberUnits,billingPeriod}= getValues();
        var amountVAT = 0,
            amountOutVAT = 0;
            amountOutVAT = ((parseFloat(numberUnits) * 0.20) + (parseFloat(billingPeriod)  * 0.04));
            amountVAT = (parseFloat(amountOutVAT) + ((parseFloat(amountOutVAT)* 13.5)/100));
            console.log(amountOutVAT);
            console.log(amountVAT);
            ipcRenderer.send('submit', amountOutVAT, amountVAT);
    }
    ipcRenderer.on('total_payable', (event, amountOutVAT, amountVAT) => {
        const result = document.getElementById('result').style.display = 'div';
        var amountOutVAT= document.getElementById('amount_bill').textContent = parseFloat(amountOutVAT).toLocaleString("en-US");
        var amountVAT = document.getElementById('total_payable').textContent = parseFloat(amountVAT).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 }) + "%";
        const dataPrint = document.createElement('div');

        dataPrint.innerHTML= `
        <div class="container-data row">
            <div class="col s4">
                <h6>${amountOutVAT}</h6>
            </div>
            <div class="col s4">
                <h6>${amountVAT}</h6>
            </div>
        </div>    
        `
        result.appendChild(dataPrint);
    })
    