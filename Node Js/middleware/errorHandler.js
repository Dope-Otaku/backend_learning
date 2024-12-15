const {constants} = require("../constants")

const errorHandler = (err, req, res, next) => {

    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title: "Validation Error", message: err.message, stackTrace: err.stack});
            break;
        case constants.NOT_FOUND:
            res.json({title: "Not Found", message: err.message, stackTrace: err.stack});
            break;
        case constants.FORBIDDEN:
            res.json({title: "Forbidden", message: err.message, stackTrace: err.stack});
            break;
        case constants.UNAUTHORIZED_ACCESS:
            res.json({title: "unauthorized access", message: err.message, stackTrace: err.stack});
            break;
        case constants.SERVER_ERROR:
            res.json({title: "server not found | server error", message: err.message, stackTrace: err.stack});
            break;
        default:
            Console.log("No Error, All Good")
            break;
    }

    
    
}



module.exports = errorHandler