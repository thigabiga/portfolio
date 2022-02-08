const router = require("express").Router();

// Import SDK
var AWS = require('aws-sdk');

// Environment variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
var albumBucketName = process.env.BUCKET_NAME;
var region = process.env.REGION;
var identityPoolId = process.env.IDENTITY_POOL_ID;

// Initialize the Amazon Cognito credentials provider
AWS.config.region = region; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: identityPoolId,
});

// Create a new service object
var s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: {Bucket: albumBucketName}
});

router.get("/about", (req, res) => {

    let albumName = 'portfolio-images';
    let albumPhotosKey = encodeURIComponent(albumName) + '/';
    let photoName = 'E37ADF85-0C90-4867-9556-62E32F323FF8.png';

    s3.listObjects({Prefix: albumPhotosKey}, function(err, data) {
        var href = this.request.httpRequest.endpoint.href;
        var bucketUrl = href + albumBucketName + '/' + albumPhotosKey + encodeURIComponent(photoName);

        res.render("about", {
            image: bucketUrl
        });

    });

});

module.exports = router;