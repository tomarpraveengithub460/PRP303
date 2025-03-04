const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const timeStamps = require('mongoose-timestamps');
const StudentSchema = new Schema({
    name : {
        type : String, default:""
    },
    regno  : {
        type : String, default:""
    },
    marks : {
        type : Number, default:0
    },
});
StudentSchema.pre('save',(next)=>{
    this.updated_at = Date.now();
    next();
})
StudentSchema.plugin(timeStamps,{index : true});
module.exports = mongoose.model('Student',StudentSchema);