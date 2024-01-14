

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



app.use("/codemirror-5.65.16",express.static(path.join(__dirname, "codemirror-5.65.16")))

var request = require('request');


app.post('/compile', async (req, res) => {
  try {
  
    const requestData = ({
     script : req.body.code,
     language : "cpp",
     stdin:req.body.input,
    //const input  req.body.input;
    versionIndex: "3",
    clientId: "e4926193d48467d2de3a4d0ee7eb7e7b",
    clientSecret: "3f5a4da024ef72e941b0cd09a36b2ad095b7ca3db58f91cbba6d5fb0feb68290"
    });

   
    const response = await axios.post('https://api.jdoodle.com/v1/execute', requestData);
    console.log(response)
    
    res.status(200).json(response.data);



  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


