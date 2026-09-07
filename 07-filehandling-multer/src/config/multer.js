const multer = require('multer');
const path = require('path');


// for local storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});


// for server

// const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

module.exports = upload;