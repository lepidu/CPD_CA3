'use strict';
const electron = require ('electron');
const {app, BrowserWindow, Menu, ipcMain} = electron;

//Variables main window and results window.
let win;     
let total;

//Main window creation method.
const window = () => {
    win = new BrowserWindow({
        webPreferences:{
            nodeIntegration:true,
            enableRemoteModule: true,
        },
        title: "2020303 & 2020324",
        width: 500,
        height:760
    });
    win.loadFile('index.html');
    win.on("closed", () => {
        app.quit();
        win=null;
    });
    //Menu creation.
    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
}
//Show window method when the app start
app.whenReady().then(() => {
    window();
})
    
//Listen to the submit event and get the variables that will be used in the other javascript
ipcMain.on('submit', (event, amountOutVAT, amountVAT) => {
    total = new BrowserWindow({
        webPreferences:{
            nodeIntegration:true,
            contextIsolation: false,
        },
        title: "2020303 & 2020324",
        width: 500,
        height:760
    });
    total.setMenu(null);
    total.loadFile('total.html');
    total.on('closed', () => (total = null));
    total.webContents.send('total', amountOutVAT, amountVAT);
})

//Menu specifications.
const menuTemplate = [
    {
    label: "Electricity Bill",
    submenu:    
        {
            label: "Quit",
            accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+Q",
            click() {
                app.quit();
            }
        }
    
    },
    {
        label: "View",
        submenu: [{ role: "reload" }, {role: "toggledevtools" }]

            }
        
];