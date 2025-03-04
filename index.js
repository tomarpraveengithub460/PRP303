const express =require('express');
const Student = require('./students');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;
// Requiring db.js file
require('./db')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.status(200).send('Hello Ronit!');
})

// Inserting the data
app.post('/save/student',async (req,res)=>{
    try{
        let stu = new Student();
        stu.name = req.body.name;
        stu.regno = req.body.regno;
        stu.marks = req.body.marks;
        // stu.name = "Praveen Tomar";
        // stu.regno = "RA303";
        // stu.marks = 43;
        let user = await stu.save();
        res.status(200).send({data : user});
    }catch(err){
        console.log(err);   
        res.status(500).send("Data not inserted");
    }
})

//listen method in express
app.listen(port,()=>{
    console.log(`Server is listenig on port ${port}`);
})  