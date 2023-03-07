"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFile = exports.saveImageStorage = void 0;
const multer_1 = require("multer");
const uuid_1 = require("uuid");
const fs = require("fs");
const path = require("path");
const validExtensions = ['png', 'jpg', 'jpeg'];
const validMimes = ['image/png', 'image/jpg', 'image/jpeg'];
exports.saveImageStorage = {
    storage: (0, multer_1.diskStorage)({
        destination: './gallery',
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = (0, uuid_1.v4)() + ext;
            cb(null, name);
        }
    }),
    fileFilter: (req, file, cb) => {
        const allowdMimes = validMimes;
        allowdMimes.includes(file.mimetype) ? cb(null, true) : cb(null, false);
    }
};
const removeFile = (fullPath) => {
    try {
        fs.unlinkSync(fullPath);
    }
    catch (error) {
        console.log(error);
    }
};
exports.removeFile = removeFile;
//# sourceMappingURL=image.helper.js.map