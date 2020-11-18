import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// Configure dotenv
dotenv.config();

// Connect to MongoDB
connectDB();

//Initializations
const app = express();

//Port settings
app.set("port", process.env.PORT || 4000);

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//Routes
import products from "./routes/api/products.js";

//Use Routes
app.use("/api/products", products);

//Start server
app.listen(app.get("port"), () => {
  console.log("Server running on port", app.get("port"));
});
