const router = require("express").Router();
const projectJson = require("../data/projects.json");

// Import SDK
var AWS = require('aws-sdk');

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

router.get("/", (req, res) => {

    let projectInfo = [];

    projectJson.projects.forEach(p => {
        let images = p["images"];
        projectInfo = projectInfo.concat({
            id: p["id"],
            image: images[0]["image"],
            alt: images[0]["alt"],
            title: p["title"],
            pkey: "",
            purl: "",
        });
    });

    let projectImages = [];
    let albumName = 'portfolio-images';
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
            projectInfo.forEach((i) => {
                if (e.pkey.split("/")[1] == i.image) {
                    projectImages = projectImages.concat({
                        imageURL: e.purl,
                        altText: i.alt,
                        imageId: i.id,
                        title: i.title
                    });
                };
            });
        });

        res.render("home", {
            images: projectImages
        });

    });

});

module.exports = router;