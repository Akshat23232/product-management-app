const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();


app.use(cors());
app.use(express.json());

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Product API is running...");
});
const PORT = 3001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});