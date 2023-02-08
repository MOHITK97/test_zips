var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.use(cors());

// Database Config
var dbConfig = require('./Config/databaseConfig.js');
var mongoose = require('mongoose');
 
mongoose.connect(dbConfig.url);
mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})
//end Database config     
   
require('./Routes/UserRoutes.js')(app);
   
app.listen(3001, function(){
    console.log("Server is listening on port 3001");
}); 