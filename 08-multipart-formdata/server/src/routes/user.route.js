const {create} = require("../controllers/user.controller")
const upload = require("../config/multer.config")

const router = require("express").Router();

router.post("/create", upload.array("files"), create)

module.exports = router