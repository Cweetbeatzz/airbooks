const multer = require("multer");

//#######################################################
//<-------------------IMAGE STORAGE--------------------->

//location
export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../Public/uploadImages");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

//file type fr uploads
export const Acceptfiletype = (req, file, cb) => {
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
};

//########
export const uploadLocation = multer({
  dest: storage,
  limits: { filesize: 1024 * 1024 * 5 },
  fileFilter: Acceptfiletype,
});
