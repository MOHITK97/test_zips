const jwt = require('jsonwebtoken');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization']

  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) 
  	{
  		return res.status(403).send('Unauthorized')
  	}
  	jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).send('Unauthorized')
    req.user = user
    next()
  })
	
};




