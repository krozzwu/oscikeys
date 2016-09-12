const electron = require('electron');

const {app, BrowserWindow} = electron;

app.on('ready', () => {
    let win = new BrowserWindow({width: 500, height: 500});
    // win.loadURL('http://google.com');
    win.loadURL(`file://${__dirname}/index.html`);
    // console.log(`file://${__dirname}/index.html`);
})