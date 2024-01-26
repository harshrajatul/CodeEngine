const express=require("express");
const path=require("path");
const db =require("./database.cjs");
const app=express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname , "src")))
app.use(express.static(path.join(__dirname , "public")))

app.post("/login", async (req,res)=>{
    
    const Username=req.body.username;
   // console.log(Username);
    const [rec]=await db.execute("SELECT * FROM new_schema.user WHERE Username=?",[Username]);
    if (rec[0]==undefined) {
        console.log("Non existent account")
    }
    else{
    console.log(rec[0].Username);
    }
    const response="Hello"+Username;
    res.status(200).json(response);
})




app.listen(3000);