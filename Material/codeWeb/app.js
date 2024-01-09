const express = require('express');
const bodyParser = require('body-parser');
const compiler = require('compilex');
const path = require("path");

const app = express();
const option = { stats: true }
compiler.init(option)

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use("/codemirror-5.65.16",express.static(path.join(__dirname, "codemirror-5.65.16")))


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.post("/compile", (req,res) => {
    var code = req.body.code;
    // var input = req.body.input;
    // var lang = req.body.lang;

    var envData = { OS : "windows" , cmd : "g++"};
    compiler.compileCPP(envData , code , function (data) {
        res.send(data);
    });
    
})


app.listen(3000, () => {
    console.log("on 3000");
})

