const express = require("express");

const app = express();

const chalk = require("chalk"); 
app.listen(3000, () => {
    console.log("LE SERVEUR DÉMARRE...");
    chalk.green("3000");
});

app.use(express.static("./public"));  

app.get("/api/user", (req, res) => {
    res.send({
        nom: "Padawan",
        verification: "true",
        dateAnniversaire: new Date(2020, 3, 23),
        copains: (["Fwanck", " Vinsme", "Manaïsme"]),
    });
});