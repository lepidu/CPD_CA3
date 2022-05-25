//This javascript has the function of putting the total results
const { ipcRenderer } = require ('electron');

    //This function is linked with the main javascript and obtains the results 
    //that it shows in the total.html file in the corresponding IDs.
    ipcRenderer.on('total', (event, amountOutVAT, amountVAT) => {
        document.getElementById('result').style.display = 'table';
        document.getElementById('totalOutVAT').innerHTML = `€ ${amountOutVAT}`;
        document.getElementById('totalVAT').innerHTML = `€ ${amountVAT}`;
        
    })