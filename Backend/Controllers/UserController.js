const nodemailer = require('nodemailer');
var User = require('../Models/UserModel'); 
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }) 
const jwt = require('jsonwebtoken');
 
exports.login = async (req, res) => {
        var user = await User.findOne({email:req.body.email});
        if(user ){ 
            var token = generateAccessToken({ userid: user._id })
            return res.send({status:1, token:token,type: UserData,data:user,message: 'Login Successfully'})
        }else{
            console.log({username: req.body.data.name, email: req.body.data.email})
            var user = await new User({username: req.body.data.name, email: req.body.data.email});
            user.save(function(err, data){ 
                if(err){
                    return res.send({status: 0 , message: 'Something went wrong'})
                }else{
                    var token = generateAccessToken({ userid: user._id })
                    return res.send({status:1, token:token, data:data,message:"User Saved Successfully"})
                }
            })
        }
}
 
function generateAccessToken(userid) {
  return jwt.sign(userid, process.env.TOKEN_SECRET, { expiresIn: '7d' });
}
