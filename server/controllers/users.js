import userModel from './../models/users';

const userCtrl = {}

userCtrl.post = (req, res, next) => {
    const { username, password } = req.body
    const user = new userModel({
        username,
        password
    })

// call the built-in save method to save to the database
user.save().then((newUser)=> {
    res.status(200).json({
        success:true,
        data : newUser
    })

}).catch((err) => {
    res.status(500).json({
        message : err
    })
})


}



export default userCtrl;