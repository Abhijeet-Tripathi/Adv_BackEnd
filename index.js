const express=require('express');
const port=8000;

const app=express();

//to connect router
app.use('/',require('./routes/index'));


app.listen(port,function(err){
    if(err){
        console.log("Erore in running server");
    }
    console.log(`The server is running at ${port}`);
});
