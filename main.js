'use strict';
const {app, BrowserWindow, ipcMain}= require('electron');

let win;

function createWindow(){
    win = new BrowserWindow({
        width: 500,
        height:760
    })
    win.loadFile('index.html');
    ipcMain.on('submit', (event, amountOutVAT, amountVAT) => {
        win.webContents.send('total_payable', amountOutVAT, amountVAT);
    })
}
app.whenReady().then(() => {
    
    createWindow();
})
    
app.on('window-all-closed',()=>{
    if (process.platform !== 'darwin')app.quit();
})



            
