var AWS = require('aws-sdk')
var fs = require('fs')
var path = require('path')
AWS.config.update({ region: 'us-east-1' })

// Create S3 service object
s3 = new AWS.S3({ apiVersion: '2006-03-01' });

let folderToUpload = 'dist'
let files = []

// recursively iterate through /dist folder and collect files in list
const recurseDir = (dir) =>
    fs.readdirSync(dir).forEach((file) => fs.statSync(dir + '/' + file).isDirectory() ? recurseDir(dir + '/' + file) : files.push(dir + '/' + file))

recurseDir(folderToUpload)

// upload each file in files list, keeping intact the subfolder structure
files.forEach((file) => {
    var fileStream = fs.createReadStream(file)
    var uploadParams = { Bucket: 'chaisblogsite', Key: '', Body: '' }
    const fileName = file.substring(5)

    fileStream.on('error', function (err) {
        console.log('File Error', err)
    })
    uploadParams.Body = fileStream
    uploadParams.Key = fileName

    //TODO: set content type for all files based on extension
    if(fileName === 'index.html') {
        uploadParams.ContentType = "text/html"
    }

    if(fileName === 'bundle.js') {
        uploadParams.ContentType = "text/javascript"
    }

    s3.upload(uploadParams, function (err, data) {
        if (err) {
            console.log("Error", err)
        } if (data) {
            console.log("Upload Success", data.Location)
        }
    })
})

var site_params = {
    Bucket: "chaisblogsite",
    ContentMD5: "",
    WebsiteConfiguration: {
        ErrorDocument: {
            Key: "index.html"
        },
        IndexDocument: {
            Suffix: "index.html"
        }
    }
};

s3.putBucketWebsite(site_params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log('site setup success',data);           // successful response
  });