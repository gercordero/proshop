import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

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
