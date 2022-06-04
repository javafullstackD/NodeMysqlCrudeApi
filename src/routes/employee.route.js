const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');

//get all employee
router.get('/',employeeController.getEmployeeList);

//get employee by ID
router.get('/:1d',employeeController.getEmployeeByID);

//create a new employee
router.post('/',employeeController.createNewEmployee);

//NB TODAY
//Update employee
router.put('/:id',employeeController.updateEmployee);

//last today
//delete employee
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;