const express = require("express");
const fs = require("fs");

const app = express();

app.listen(3000, () => {
    console.log("LE SERVEUR DÉMARRE...");
});

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.send(cookies.jpg);
});