const app = require("./src/app");
const connectDb = require("./src/config/db.js");

connectDb();




app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});