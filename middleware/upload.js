
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");


var storage = new GridFsStorage({
    url: process.env.MONGO_URI,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg", "video/mp4"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-Ghoudan-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-Ghoudan-${file.originalname}`
        };
    }
});
module.exports = multer({ storage });