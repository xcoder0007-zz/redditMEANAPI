import mongoose from 'mongoose';

const { Schema } = mongoose;
const dateNow = new Date().toString();
const userSchema = new Schema ({
    username : {
        type:String,
        required : true,
        unique: true,
        minlength:[5,'Usernsame must be 5 Char or more .']
    },

        password : {
        type:String,
        required : true,
        minlength:[7,'Password must be 7 Char or more .']
    },
  created_at: {
     type :Date,
     default:  dateNow
  },

    updated_at: {
     type :Date,
     default:  dateNow
  },
})

const userModel = mongoose.model('Users',userSchema)

export default userModel;