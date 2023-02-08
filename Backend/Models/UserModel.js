var mongoose = require('mongoose')
 
var UserScheme = mongoose.Schema({
    username: {
        required : true,
        type : String
    },
    email : { 
        required : true,
        type : String
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('user', UserScheme)
