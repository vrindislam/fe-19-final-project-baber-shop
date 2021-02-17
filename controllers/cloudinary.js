const cloudinary = require("cloudinary").v2;
const getConfigs = require("../config/getConfigs");

// config

(async () => {
  const configs = await getConfigs();
  console.log('bla-bla', Object.keys(configs.development))


  // cloudinary.config({
  //   cloud_name:
  //     process.env.NODE_ENV === "production"
  //     ? configs?.production?.cloudinary?.cloud_name
  //     : configs?.development?.cloudinary?.cloud_name,
  //   api_key:
  //     process.env.NODE_ENV === "production"
  //       ? configs.production.cloudinary.api_key
  //       : configs.development.cloudinary.api_key,
  //   api_secret:
  //     process.env.NODE_ENV === "production"
  //       ? configs.production.cloudinary.api_secret
  //       : configs.development.cloudinary.api_secret,
  // });

})();


// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// req.files.file.path
exports.cloudinaryUpload = async (req, res) => {
  const result = await cloudinary.uploader.upload(req.body.image, {
    public_id: `${Date.now()}`,
    resource_type: "auto", // jpeg, png
    folder: req.body.folder
  });
  res.json({
    public_id: result.public_id,
    url: result.secure_url,
  });
};

exports.cloudinaryRemove = (req, res) => {
  const image_id = req.body.public_id;
  cloudinary.uploader.destroy(image_id, (err, result) => {
    if (err) return res.json({ success: false, err });
    res.send("ok, image removed");
  });
};