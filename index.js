const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const argv = process.argv[2];

axios.get("https://codequiz.azurewebsites.net/", {withCredentials: true, headers: {
    cookie: 'hasCookie=true'
}}).then((res) => {
    const doc = new JSDOM(res.data);
    const tableSelector = doc.window.document.querySelector("table");
    const trLength = tableSelector.rows.length;
    for (let i = 0; i < trLength; i++) {
        if(tableSelector.rows[i].cells[0].textContent.trim() == argv) {
            console.log(tableSelector.rows[i].cells[1].textContent);
        }
    }
});