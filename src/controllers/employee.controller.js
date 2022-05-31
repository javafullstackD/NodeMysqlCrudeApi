
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
// get employee by id
exports.getEmployeeByID = (req,res) =>{
   // console.log('get emp by id');
   EmployeeModel.getEmployeeByID(req.params.id,(err,employee)=>{
      if(err)
      res.send(err);
      console.log('single employee data',employee);
      res.send(employee);
      

   })
}
// create new employee
exports.createNewEmployee = (req,res) =>{
    console.log('req data',req.body);
}