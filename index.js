const express = require('express');

//Create the express app
const app = express();

//Setup the server port
const port = process.env.PORT ||5000;

//define the root routes
app.get('/', (req,res) =>{
   res.send('Hello World');
});


//import employee routes
const employeeRoutes = require('./src/routes/employee.route');

//create employee routes
app.use('/api/v1/employee',employeeRoutes);

//listen to the port
app.listen(port, () =>{
    console.log('server is running at port'+' '+port);
});