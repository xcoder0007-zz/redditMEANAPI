import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema ({
    username : {
        type:String,
        required : true,
        minlength:[5,'Usernsame must be 5 Char or more .']
    },

        password : {
        type:String,
        required : true,
        minlength:[7,'Password must be 7 Char or more .']
    },
})

const userModel = mongoose.model('userModel',userSchema)

export default userModel;