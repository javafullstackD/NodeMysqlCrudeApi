
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
   const employeeReqData = new EmployeeModel(req.body);
   console.log('employeeData',employeeReqData);

    //Check null

    if(req.body.contructor === Object && Object.keys(req.body).length ===0){
       res.send(400).send({success:false, message:'Please fill all fields'});
    }else{
          EmployeeModel.createEmployee(employeeReqData,(err,employee)=>{
          if(err)
          res.send(err);
          res.json({status:true ,message:'Employee created successfully',data:employee});
             
          

       })
    }
}
// NB TODAY
//Update employee
exports.updateEmployee = (req,res)=>{
   const employeeReqData = new EmployeeModel(req.body);
   console.log('employeeData update',employeeReqData);

    //Check null

    if(req.body.contructor === Object && Object.keys(req.body).length ===0){
       res.send(400).send({success:false, message:'Please fill all fields'});
    }else{
          EmployeeModel.updateEmployee(req.params.id, employeeReqData,(err,employee)=>{
          if(err)
          res.send(err);
          res.json({status:true ,message:'Employee updated successfully',data:employee});
             
          

       })
    }

}
//last today
//delete employee
exports.deleteEmployee = (req,res) =>{
   EmployeeModel.deleteEmployee(req.params.id, (err,employee)=>{
      if(err)
      res.send(err);
      res.json({success:true, message:'Employee deleted successfully'});
   })

   
}