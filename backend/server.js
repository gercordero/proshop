import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import { errorsHandler, notFound } from "./middleware/errors.js";

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
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// Config Routes
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

//Routes
import products from "./routes/api/products.js";
import users from "./routes/api/users.js";
import orders from "./routes/api/orders.js";

//Use Routes
app.use("/api/products", products);
app.use("/api/users", users);
app.use("/api/orders", orders);

// Errors Handlers
app.use(notFound);
app.use(errorsHandler);

//Start server
app.listen(app.get("port"), () => {
  console.log("Server running on port", app.get("port"));
});
