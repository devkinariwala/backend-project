import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadOnCloudinary = async (localFIlePath) => {
  try {
    if (!localFIlePath) return null;
    const response = await cloudinary.uploader.upload(localFIlePath, {
      resource_type: "auto",
    });
    console.log("File Uploaded on Cloudinary Successfully!");
    fs.unlinkSync(localFIlePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFIlePath); //local system me se file ko nikal dega
  }
};

export { uploadOnCloudinary };
