const mongoose = require('mongoose');

mainFunc()
.then((data)=>{
    console.log("Database Connection Successful");
})
.catch((err)=>{
    console.log("Connection Failed "+err);
})

async function mainFunc(){
    await mongoose.connect('mongodb://0.0.0.0:27017/sectione303',{});
}

