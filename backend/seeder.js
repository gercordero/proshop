import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Destroy all data inside Collection for clean Insertion
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // Insert users seed file into User collection
    const createdUsers = await User.insertMany(users);

    // Filter first user (admin)
    const adminUser = createdUsers[0]._id;

    // For each product add admin user as ref
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    // Insert products seed file into Products collection
    await Product.insertMany(sampleProducts);

    console.log("Data Imported");
    process.exit();
  } catch (error) {
    console.log(`Error ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed");
    process.exit();
  } catch (error) {
    console.log(`Error ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
