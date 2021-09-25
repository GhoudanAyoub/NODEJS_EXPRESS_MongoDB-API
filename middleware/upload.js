const multer = require("multer");
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const { GridFsStorage } = require("multer-gridfs-storage");

const conn = mongoose.connection;
conn.once("open", function () {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("photos");
});

const storage = new GridFsStorage({
    url: process.env.MONGO_URI,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];
        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-any-name-${file.originalname}`;
            return filename;
        }
        return {
            bucketName: "photos",
            filename: `${Date.now()}-any-name-${file.originalname}`,
        };
    },
});

module.exports = multer({ storage });