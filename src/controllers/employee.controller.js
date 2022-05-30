
const EmployeeModel = require('../models/employee.model');

//get all employee list

exports.getEmployeeList = (req,res)=>{
   // console.log('Here are all employee List');
   EmployeeModel.getAllEmployees((err,employees)  =>{
      console.log('We are here');
      
      if(err)
      res.send(err);
      console.log('Employees',employees);
      res.send(employees)
   })
}