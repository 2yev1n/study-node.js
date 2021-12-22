const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const path = require("path")
const s3Config = require("../config/s3.json");

const s3 = new aws.S3(s3Config);

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'express-multer',
        acl: 'public-read',
        key: function(req, file, cb) {
            cb(null, Date.now() + '.' + file.originalname.split('.').pop());
        },
        limit: {
            fileSize: 1024 * 1024 * 20
        },
    }),
});

module.exports = upload;