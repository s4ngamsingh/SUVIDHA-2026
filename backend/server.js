const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* =============================
   Middleware
============================= */
app.use(cors());
app.use(express.json());

/* =============================
   Import Routes
============================= */
const authRoutes = require("./routes/auth.routes");

/* =============================
   Use Routes
============================= */
app.use("/api/auth", authRoutes);

/* =============================
   Test Route
============================= */
app.get("/", (req, res) => {
  res.send("SUVIDHA Backend is running 🚀");
});


/* =============================
   Start Server
============================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
