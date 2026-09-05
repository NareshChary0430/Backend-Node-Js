const dotenv = require('dotenv');
dotenv.config();

const app = require("./src/app");

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});