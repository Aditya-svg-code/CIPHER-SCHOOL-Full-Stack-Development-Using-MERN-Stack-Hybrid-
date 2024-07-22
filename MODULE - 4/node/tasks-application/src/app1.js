require("./appMongoose");
const express = require("express");
const Task = require("./models/Task");
const app = express();

app.get("/", (req, res) => {
    res.send("This is some response from your node.js server");
});

app.get("/add", (req, res) => {
    let { a: firstNumber, b: secondNumber } = req.query;
    let sum = parseInt(firstNumber) + parseInt(secondNumber);
    res.send({ sum });
});

app.post("/add-task", async (req, res) => {
    const task = new Task({ title: "Test Task", description: "Test task desc" });
    await task.save();
    return res.status(201).send({ message: "Saved!" })
});

app.listen(3000, () => {
    console.log("Server is running.");
});