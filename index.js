const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("LE SERVEUR DÉMARRE...");
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