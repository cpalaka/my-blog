var AWS = require('aws-sdk')
var fs = require('fs')
var path = require('path')
AWS.config.update({ region: 'us-east-1' })

// Create S3 service object
s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// Create JSON for putBucketWebsite parameters
var staticHostParams = {
    Bucket: 'chaisblogsite',
    WebsiteConfiguration: {
        ErrorDocument: {
            Key: 'error.html'
        },
        IndexDocument: {
            Suffix: 'index.html'
        },
    }
};

// set the new website configuration on the selected bucket
// NOTE: already configured
// s3.putBucketWebsite(staticHostParams, function (err, data) {
//     if (err) {
//         // display error message
//         console.log("Error", err);
//     } else {
//         // update the displayed website configuration for the selected bucket
//         console.log("Success", data);
//     }
// });

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

    fileStream.on('error', function (err) {
        console.log('File Error', err)
    })
    uploadParams.Body = fileStream
    uploadParams.Key = file.substring(5).split('.')[0]

    s3.upload(uploadParams, function (err, data) {
        if (err) {
            console.log("Error", err)
        } if (data) {
            console.log("Upload Success", data.Location)
        }
    })
})
