const bcrypt=require("bcrypt")
const RegModel= require("../Model/RegModel")
const jwt= require("jsonwebtoken")

//generation token
const generateToken = (id) => {
    let Regid = id.toString()
    let token = jwt.sign(Regid, "vicky")
   
    return token

}
const getUser = async (req, res) => {
   res.send("api is working")
   console.log(req.params)
    let { token } = req.params
    let id =jwt.verify(token, "vicky")
    // console.log(id);
    let RegDetails = await RegModel.findOne({ _id: id }) .select("-password -_id -__v");
    // console.log(studentDetails)
    res.send(RegDetails)
    // res.send(id)
//     let { token } = req.params;
//   let id = jwt.verify(token, "naveen123");
//   let studentDetails = await studentModel
//     .findOne({ _id: id })
//     .select("-password -_id -__v");
//   res.send(studentDetails);
}
const userSignup = async (req, res) => {
    let data = req.body
    let { fname,lname,email,password,confirmPass,mobile,gender,Address } = data
    if (!fname || !lname || !password || !email || !confirmPass || !mobile || !gender || !Address) {
        return res.status(400).send("Provide all required fields")
    }
    let isEmailAvailable = await RegModel.findOne({ email })
    if (isEmailAvailable) {
        return res.status(401).send("user already registerd")
    }
    else {
        let hashespass = await bcrypt.hash(password, 10)
        let user = { ...data, password: hashespass }
        let userUpload = new RegModel(user)
        await userUpload.save()
        return res.status(201).send({ token: generateToken(userUpload._id) })
    }
 
}
const userLogin = async (req, res) => {
    let { password, email } = req.body
    let user = await RegModel.findOne({ email })
    if (user) {
        let matchedPass = await bcrypt.compare(password, user.password)
        if (matchedPass) {
            res.status(200).send({ token: generateToken(user._id) })
        }
        else{
            res.status(400).send("password is not  matched" )
        }

    }
    else {
        res.status(404).send("Student is not registeres")
    }
   
}
module.exports = {getUser,userSignup,userLogin}