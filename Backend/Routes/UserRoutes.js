const Authenticatetoken = require('../middleware/Authenticate.js');

module.exports = function(app) {
    var User = require('../Controllers/UserController.js'); 
    //Public Routes 
    app.post('/login', User.login); 
}