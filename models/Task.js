const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'must providename'],
        trim:true,
        maxlength:[20, 'no longer than 20 characters']
    },
     completed:{
         type:Boolean,
         default:false
     }
})

module.exports = mongoose.model('Task', TaskSchema)