const express = require('express')
const app = express();

// app.use(express.json()); //middileware to parse JSON bodies


app.use((req,res,next)=>{
    console.log('This is a middleware');
    next();
}); 

//GET request
app.get('/users',(req,res)=>{

    //code to fetch users
    res.status(200).send(' GET request to the user ')
    console.log(' GET request to the user ')
})

//POST request
app.post('/users',(req,res)=>{
    //code to create a new user
    res.status(201).send(' POST request to the user ')
    console.log(' GET request to the user ')
})

//PATCH request
app.patch('/users/:id',(req,res)=>{
    //code to update a user partially
    res.status(200).send(` PATCH request to the user ${req.params.id} `)
    console.log(` PATCH request to the user ${req.params.id} `)
})

//PUT request
app.put('/users/:id',(req,res)=>{
    //code to update a user entirely
    res.status(200).send(` PUT request to the user ${req.params.id} `)
    console.log(` PUT request to the user ${req.params.id} `)
})

//DELETE request
app.delete('/users/:id',(req,res)=>{
    //code to delete a user
    res.status(204).send(` DELETE request to the user ${req.params.id} `)
    console.log(` DELETE request to the user ${req.params.id} `)
})



const port=3005;

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})




