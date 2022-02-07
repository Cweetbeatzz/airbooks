const multer = require("multer");

//#######################################################
//<-------------------IMAGE STORAGE--------------------->

//location
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

//file type fr uploads
function Acceptfiletype(req, file, cb) {
  //accept a file
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    //reject a file
    cb(new Error("Only 'jpeg,png,jpg' images files are surpotted"), false);
  }
}

//########
const uploadLocation = multer({
  dest: "uploads/",
  limits: { filesize: 1024 * 1024 * 5 },
  fileFilter: Acceptfiletype,
});

module.exports = { uploadLocation };
