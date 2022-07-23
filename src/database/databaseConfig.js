const mongoose = require('mongoose');

const connect = () => {
    
    // const url = "mongodb://localhost:27017/users";
    const url = "mongodb+srv://Neetu:Neetu@cluster0.dr78p.mongodb.net/?retryWrites=true&w=majority"//user:- used after (/?) 
    mongoose.connect(url, {
        useNewUrlParser: true,
        // useFindAndModify: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
    })

    mongoose.connection.on("open", async () => {
        console.log("  MondoDB connected...!!!");
    });
      
    mongoose.connection.on("error", (err) => {
        console.log(err);
    });
}

const disconnect = () => {
    
    if (!mongoose.connection) {
      return;
    }
    
    mongoose.disconnect();

    mongoose.once("close", async () => {
        console.log("Diconnected  to database");
    });

};

module.exports = {
    connect,
    //disconnect
}

