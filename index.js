// 1 import express
 const express = require('express')

 //2 import cors

 const cors = require('cors')

 //import logic
 const logic = require('./services/logic')

 //3 create a backend application using express
  const emsServer = express()

  //4 connecting the frontend appilication using cors
  emsServer.use(cors({
    origin:'http://localhost:3000'
  }))

  //5 convert the json data to js and js to json using json() function
  emsServer.use(express.json())

  //6 Define the port number
  emsServer.listen(8000,()=>{
    console.log('Ems server listening on port 8000');
  })

  //API call for get all employees details 
  emsServer.get('/get-all-employees',(req,res)=>{
    logic.getAllEmployees().then((response)=>{ //response - all the details
      res.status(response.statusCode).json(response);
    })
  })

  //API call for add an employee
  emsServer.post('/add-an-employee',(req,res)=>{
    logic.adddata(req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
      res.status(response.statusCode).json(response);
    })
  })

//API call for delete employee
emsServer.delete('/delete-an-employee/:id',(req,res)=>{
  logic.deletedata(req.params.id).then((response)=>{
    res.status(response.statusCode).json(response);
  })
})

//API call for view an employee
emsServer.get('/view-an-employee/:id',(req,res)=>{
  logic.viewdata(req.params.id).then((response)=>{
    res.status(response.statusCode).json(response);
  })
})

//API call for edit an employee
emsServer.post('/update-an-employee/:id',(req,res)=>{
  logic.updateemp(req.params.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
    res.status(response.statusCode).json(response);
  })
})