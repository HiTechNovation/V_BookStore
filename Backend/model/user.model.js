import mongooose from "mongoose"

const userSchema = mongooose.Schema({

    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }, 
     password:{
        type:String,
        required:true
    }
})

const User =mongooose.model("User", userSchema);
export default User;