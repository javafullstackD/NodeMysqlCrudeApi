const express = require('express');

//Create the express app
const app = express();

//Setup the server port
const port = process.env.PORT ||5000;

//define the root routes
app.get('/', (req,res) =>{
   res.send('Hello World');
});

//listen to the port
app.listen(port, () =>{
    console.log('Express server is running at port'+' '+port);
});