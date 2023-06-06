// To fetch data from apiand store in mongo db
import fetch from 'node-fetch';
import mongoose from 'mongoose';

// mongoose.connect('mongodb+srv://admin:admin@quadb.tovueid.mongodb.net/');


const connectdatabase = () => {
    return mongoose.connect('mongodb+srv://admin:admin@quadb.tovueid.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Database Connection Sucessful");
    }).catch((err) => {
        console.log(`Database Connection err ${err}`);
    });
};

connectdatabase();

const ProductSchema = new mongoose.Schema({
    "name": {
        type: String,

    },
    "value": new mongoose.Schema({
        "base_unit": {
            type: String
        },
        "quote_unit": {
            type: String
        },
        "low": {
            type: Number
        },
        "high": {
            type: Number
        },
        "last": {
            type: Number
        },
        "open": {
            type: Number
        },
        "volume": {
            type: Number
        },
        "sell": {
            type: Number
        },
        "buy": {
            type: Number
        },
        "name": {
            type: String
        },
        "at": {
            type: Number
        }
    })




});

const post = mongoose.model('Posst', ProductSchema);


const start = async () => {


    const mydata = await fetch("https://api.wazirx.com/api/v2/tickers");
    const data = await mydata.json();
    //    console.log(data);

    // data.forEach(element => {
    //     console.log(element);
    // });
    // const arr = [...data];
    let arr = Object.keys(data);
    // console.log(Object.keys(data));
    for (let int = 0; int < 10; int++) {

        try {
            const Post = new post(

                {
                    "name": arr[int],
                    "value": data[arr[int]]
                }
            );

            Post.save();
        } catch (err) {
            console.log(err);
        }
        console.log(data[arr[int]]);

    }
};


start();