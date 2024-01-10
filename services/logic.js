//BackEnd logic

//import db.js file
const db = require('../services/db')

//get all the employees details from the database

const getAllEmployees = ()=>{
    return db.employee.find().then((result)=>{//result - details of employee
        if(result){
            return{
                statusCode:200,
                employees:result
            }

        }
        else{
            return{
                statusCode:404,
                message:'cant find employee'
            }
          

        }

    })
}
//add a new employee in the database
const adddata=(id,name,age,designation,salary)=>{
    return db.employee.findOne({id}).then((result)=>{
        if(result){//if employee id already exist
            return{
                statusCode:404,
                message:"employee already exist"
            }
        }
        else{//id is not in the database then it save to the database
            const newData= db.employee({id,name,age,designation,salary})
            newData.save()
            return{
                statusCode:200,
                message:"employee added successfully"
            }
        }
    })
}

const deletedata=(id)=>{
    return db.employee.deleteOne({id}).then((result)=>{
            return{
                statusCode:200,
                message:"delete successfully"
            }
    })
    .catch((error)=>{
        return{
            statusCode:401,
            message:"failed to delete "
        }
    })
}
//get an employee
const viewdata=(id)=>{
    return db.employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                employees:result
            }

        }
        else{
            return{
                statusCode:404,
                message:'cant find employee'
            }
          

        }
    })
}
//edit an employee
const updateemp=(id,name,age,designation,salary)=>{
    return db.employee.findOne({id}).then((result)=>{
        if(result){
            //assigning updated information to the database values
            result.id=id;
            result.name=name;
            result.age=age;
            result.designation=designation;
            result.salary=salary
            //save updated details in db
            result.save()

            return{
                statusCode:200,
                message:'data updated successfully'
            }

        }
        else{
            return{
                statusCode:404,
                message:'cant find employee'
            }
          

        }
    })
}

module.exports = {
    getAllEmployees,
    adddata,
    deletedata,
    viewdata,
    updateemp
}