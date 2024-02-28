class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode= statusCode;
    }
}

const errormiddleware =  (err,req,res,next)=>{

    err.message = err.message || "internal server error"
    err.statusCode= err.statusCode || 500;
    return res.status(404).json({
     success: false,
     message: err.message
    })
 }

module.exports = {errormiddleware}
