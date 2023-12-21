const express = require("express");
const app = express();
const { json } = require('body-parser');
app.use(json());
const calculation = (UnitQuantity = 1, UnitPrice = 0, CustomsPercentage = 0) => UnitQuantity * (UnitPrice * (CustomsPercentage/100));

app.post("/calculate", (req,res)=>{
    try{
        res.status(200).json({result: calculation(req.body["UnitQuantity"],req.body["UnitPrice"],req.body["CustomsPercentage"])});
    }
    catch(error){
        res.sendStatus(400);
    }

});

app.listen(3000, ()=>{
    console.log("Server listen on port 3000");
});
