const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('hello its working');
})

app.listen(4000,()=>{
    console.log("Listening to port");
});