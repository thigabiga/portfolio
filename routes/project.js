const router = require("express").Router();
const projects = require("../data/projects.json")["projects"];

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

router.get("/project/:id", (req, res) => {
    
    let projectId = req.params.id;
    let project = null;
    let projectImages = [];

    // Retrieve project info for the ID provided
    projects.forEach((e) => {
        if (e["id"] === parseInt(projectId, 10)) {
            project = e;
        };
    });

    let albumName = 'portfolio-images'
    let albumPhotosKey = encodeURIComponent(albumName) + '/';

    s3.listObjects({Prefix: albumPhotosKey}, function(err, data) {
        var href = this.request.httpRequest.endpoint.href;
        var bucketUrl = href + albumBucketName + '/';

        var photos = data.Contents.map(function(photo) {
            return {
                pkey: photo.Key,
                purl: bucketUrl + encodeURIComponent(photo.Key)
            }
        });

        // Filter images files for the project ID provided
        photos.forEach((e) => {
            project.images.forEach((i) => {
                if (e.pkey.split("/")[1] == i.image) {
                    projectImages = projectImages.concat({
                        imageURL: e.purl,
                        altText: i.alt
                    });
                };
            });
        });

        res.render("project", {
            project: project,
            images: projectImages
        });

    });

});

module.exports = router;