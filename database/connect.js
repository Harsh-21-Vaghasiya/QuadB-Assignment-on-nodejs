const mongoose = require('mongoose');


// Menually added uri
// const URI = 'mongodb+srv://admin:admin@harshproductsapi.gv4msbm.mongodb.net/';


const connectdatabase = (URI) => {
    return mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Database Connection Sucessful");
    }).catch((err) => {
        console.log(`Database Connection err ${err}`);
    });
};



module.exports = connectdatabase;