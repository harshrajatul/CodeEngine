// const express = require('express');
// const bodyParser = require('body-parser');
// const compiler = require('compilex');
// const path = require("path");

// const app = express();
// const option = { stats: true }
// compiler.init(option)

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json())
// app.use("/codemirror-5.65.16",express.static(path.join(__dirname, "codemirror-5.65.16")))


// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"));
// })

// app.post("/compile", (req,res) => {
//     var code = req.body.code;
//     // var input = req.body.input;
//     // var lang = req.body.lang;

//     var envData = { OS : "windows" , cmd : "g++"};
//     compiler.compileCPP(envData , code , function (data) {
//         res.send(data);
//     });
    
// })


// app.listen(3000, () => {
//     console.log("on 3000");
// })



const express = require('express');
const axios = require('axios');
const qs = require('qs');
const path = require("path");
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("http://localhost:5173/codemirror-5.65.16",express.static(path.join(__dirname, "codemirror-5.65.16")))




app.post('/compile', async (req, res) => {
  try {
    // const { code, language, input } = req.body;

    const code = req.body.code;
    const language = "cpp";
    const input = req.body.input;

    const requestData = qs.stringify({
      code,
      language,
      input,
    });

    const config = {
      method: 'post',
      url: 'https://api.codex.jaagrav.in',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: requestData,
    };
    
    const response = await axios(config);
    res.json(response.data);

    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data.output));
    })
    .catch(function (error) {
        console.log(error);
    });


  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


