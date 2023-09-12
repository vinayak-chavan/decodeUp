const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../upload"),
    filename: (req, file, cbFun) => {
        cbFun(null, Date.now() + "_"+ file.originalname);
    }
});

module.exports = multer({
    storage: storage
})