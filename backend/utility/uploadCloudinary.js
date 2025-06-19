const cloudinary = require("cloudinary").v2;
const fs = require("fs");
cloudinary.config({
    cloud_name: "dknm0xjjo",
    api_key: "167298175311659",
    api_secret: "_rWsdy6zTr86hBGhg-AyHhsJ5eQ",
});
async function uploadToCloudinary(locaFilePath, localFileName,folderName) {

    return cloudinary.uploader
        .upload(locaFilePath, { public_id: localFileName, folder: folderName})
        .then((result) => {
            fs.unlinkSync(locaFilePath);
            console.log("response successfull  " +JSON.stringify(result))
            return {
                url: result.url,
                filename :result.display_name
            };
        })
        .catch((error) => {          
            // Remove file from local uploads folder
            fs.unlinkSync(locaFilePath);
            return { message: "Fail" };
        });
}
module.exports = uploadToCloudinary; 
