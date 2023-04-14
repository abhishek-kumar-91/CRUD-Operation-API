const express = require("express");

const app = express();

app.use(express.json());

app.use(myMiddleWare);


function myMiddleWare(req, res, next){
    console.log("Inside the middle ware I created");
    next();  //It will pass on the control to the next step
}

/**
 * Stich the routes to the server
 */


require("./routes/idea.routes")(app);







/*
=====starting server
*/


app.listen(8080, () => {
    console.log("server started");
})