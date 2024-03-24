import mongoose from 'mongoose';
const { Schema } = mongoose;
const NotesSchema = new Schema({
    name:{
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

  module.exports= mongoose.model('notes', NotesSchemaSchema);