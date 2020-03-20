const express = require("express");
const fs = require("fs");

const app = express();

app.listen(3000, () => {
    console.log("LE SERVEUR DÉMARRE...");
});

app.use(express.static('./public'));

app.get('/api/user', (req, res) => {
    res.send({
        nom: "Padawan",
        verification: "true",
        dateAnniversaire: "17/12/1993",
        copains: (["Fwanck", " Vinsme", "Manaïsme"]),
    });
});