const mongoose = require("mongoose")

const dbConnect = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
        console.log(`HOST: ${connect.connection.host}, DATABASE: ${connect.connection.name} 
            Connection Successfully Established!`  
        );
    }
    catch(err){
        console.log(err)
        process.exit(1);
    }
}

module.exports = dbConnect