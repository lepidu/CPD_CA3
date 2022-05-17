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

    const eletricity_bill_Form = document.getElementById('calculate-eletricity_bill-form')
    eletricity_bill_Form.addEventListener('submit', function(e) {
        e.preventDefault()
        start_loader();
        const numberUnits = document.getElementById('number-of-Units').value;
        const BillingPeriod = document.getElementById('billing-period').value;        
        const PayableYears = document.getElementById('vat').value;
        var monthly = 0,
            totalPayable = 0,
            total = 0,
            totalInterest = 0,
          amountOfBillWithoutVAT = 0;
        amountOfBillWithoutVAT = ((parseFloat(numberUnits) * 0.20) + (parseFloat(BillingPeriod)  * 0.04));
        totalPayable = (parseFloat(amountOfBillWithoutVAT) + (parseFloat(amountOfBillWithoutVAT)* 13.5)/100);
        
        setTimeout(() => {
            document.getElementById('number-of-units').textContent = parseFloat(numberUnits).toLocaleString("en-US")
            document.getElementById('annual-interest').textContent = parseFloat(interest).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 }) + "%";
            
            document.getElementById('result').style.display = 'table';
            document.getElementById('reset-btn').style.display = 'block';
            end_loader()
        }, 500)

    })
    eletricity_bill_Form.addEventListener('reset', function(e) {
        start_loader();
        setTimeout(() => {
           
            end_loader()
        }, 500)
    })
}
