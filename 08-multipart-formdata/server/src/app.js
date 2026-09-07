const express = require("express");
const app = express();

const userRoutes = require("./routes/user.route");
const cors = require('cors')

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());


// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.use("/user",userRoutes);

module.exports = app;