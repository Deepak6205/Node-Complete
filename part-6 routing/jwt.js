const { error } = require('console');
const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req,res,next)=>{

    //first check request headers has authorization or not
    const authorization = req.headers.authorization
    if(!authorization) return res.status(401).json({error: 'Token not found'})

    //Extract the jwt token from the request header
    const token = req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).json({error: 'Unauthorized'});

    try{
        //Verify the jwt token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //Attach the user information to the request object
        req.user = decoded;
        next();
    }catch(err){
        console.log(err);
        res.status(401).json({error:'Invalid token!'});
    }
}

//function to generate token
const generateToken = (userData)=>{
    //Generate a new jwt token using user data
    return jwt.sign(userData, process.env.JWT_SECRET);
}
module.exports = {jwtAuthMiddleware,generateToken};