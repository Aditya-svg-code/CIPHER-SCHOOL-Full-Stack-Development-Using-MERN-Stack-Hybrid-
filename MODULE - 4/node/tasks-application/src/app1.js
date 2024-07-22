const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("This is some response from your node.js server");
});

app.get("/add", (req, res) => {
    let { a: firstNumber, b: secondNumber } = req.query;
    let sum = parseInt(firstNumber) + parseInt(secondNumber);
    res.send({ sum });
});

app.listen(3000, () => {
    console.log("Server is running.");
});