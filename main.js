'use strict';
const {app, BrowserWindow}= require("electron");

function createWindow(){
    const win = new BrowserWindow({
        width: 500,
        height:760
    })
    win.loadFile('index.html')
}
app.whenReady().then(() => {
    
    createWindow()
    payable()
})
    
function payable(){

    const eletricity_bill_Form = document.getElementById('bill_form')
    eletricity_bill_Form.addEventListener('submit', totalAmount)
}
    
    function getValues(){
        const numberUnits = document.getElementById('billing_units').value;
        const billingPeriod = document.getElementById('billing_period').value;
        return{numberUnits, billingPeriod}
    }
    
    function totalAmount(e){
        e.preventDefault();
        const {numberUnits,billingPeriod}= getValues();
        var totalPayable = 0,
            amountOfBillWithoutVAT = 0;
            amountOfBillWithoutVAT = ((parseFloat(numberUnits) * 0.20) + (parseFloat(BillingPeriod)  * 0.04));
            totalPayable = (parseFloat(amountOfBillWithoutVAT) + (parseFloat(amountOfBillWithoutVAT)* 13.5)/100);
            UI(amountOfBillWithoutVAT, totalPayable)
    }

    function UI(amountOfBillWithoutVAT, totalPayable){
        const result = document.getElementById('result').style.display = 'table';
        var amountVAT= document.getElementById('amount_bill').textContent = parseFloat(amountOfBillWithoutVAT).toLocaleString("en-US")
        var total = document.getElementById('total_payable').textContent = parseFloat(totalPayable).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 }) + "%";
        const dataPrint = document.createElement('div')

        dataPrint.innerHTML= `
        <div class="container-data row">
            <div class="col s4">
                <h6>${amountVAT}</h6>
            </div>
            <div class="col s4">
                <h6>${total}</h6>
            </div>
        </div>    
        `
        result.appendChild(dataPrint)

        reset();
    }

    function reset(){
        document.getElementById('form_bill').reset();
    }
