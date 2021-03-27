require("dotenv").config();
const Product = require("./models/Product");
const productData = require("./data/products");
const connectDB = require("./config/db");

connectDB();

const importData=async ()=> {
    try{
        await Product.deleteMany({});

        await Product.insertMany(productData);

        console.log(`Data inserted successfully`);
        process.exit();
    }catch(error){
        console.error(`Error import data`);
        process.exit(1)
    }
}

importData();