const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
require("dotenv").config();
const { dbConnection } = require("./database/config");

dbConnection();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    mensaje: "Bienvenidos",
    autor: "Ambar Estrada",
    version: "1.0.0",
  });
});


app.use("/api/vuelos", require("./routes/airline.routes.js"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
