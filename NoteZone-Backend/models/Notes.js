const mongoose = require('mongoose');
const { Schema } = mongoose;
const NotesSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type: String,
        require: true
    },
    desciption:{
        type:String,
        require:true
    },
    date:{
        type: Date,
        default: Date.now
    },
    
    tag:{
        type:String,
        default: "General"
    }
    
  });

  module.exports= mongoose.model('Notes', NotesSchema);