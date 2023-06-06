const products = require('../models/product');


var Data = {};


const getAllData = async (req, res) => {
  try {


    // fetch data from mongodb
    const MyData = await products.find();
    console.log(MyData);
    // Render document with data
    res.status(200).render('hodlinfo', { Data: MyData });



  } catch (err) {
    console.log(err);
  }
}








module.exports = { getAllData };