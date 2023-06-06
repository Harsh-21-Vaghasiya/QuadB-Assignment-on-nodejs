const { trace } = require('console');
const express = require('express');
const app = express();
const product_routes = require('./routs/products');
const DatabaseConnection = require('./database/connect');
require('dotenv').config();
const bodyparser = require('body-parser');

app.use(express.static(`${__dirname}/static`))


app.set('view engine', 'ejs');
// app.use(bodyparser());
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(express.json());

// hear env find available port whlie we host website online and 5000 is our local port
const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//     res.send("hi i a live");
// });


// Middle ware or set router

app.use("/", product_routes);




const start = async () => {
    try {

        // Hear process.env.MONGODB_URL is the defined uri in .env file 
        await DatabaseConnection(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} YEs i am connected`);
        })
    } catch (err) {
        console.log(err);
    }
};

start();