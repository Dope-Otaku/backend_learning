const mongoose = require("mongoose")

const dbConnect = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
        console.log(`Database connection successfully established!`,
            connect.connection.host,
            connect.connection.name
        );
    }
    catch(err){
        console.log(err)
        process.exit(1);
    }
}

module.exports = dbConnect