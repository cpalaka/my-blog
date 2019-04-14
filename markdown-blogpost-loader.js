"use strict";

const marked = require("marked");
const loaderUtils = require('loader-utils')
const fs = require('fs')

//returns the substring in 'str' which is in between 'start' and 'end' strings, provided that they exist in 'str'
const between = (str, start, end) => 
    str.includes(start) && str.includes(end) ? str.split(start)[1].split(end)[0] : null


module.exports = function (markdown) {
    const options = loaderUtils.getOptions(this);

    let md_metadata = markdown.split('----')[1]
    let md_content = marked(markdown.split('----')[2])

    let metadata = md_metadata.split('\n').filter(i=>i!=="")
    let tags = metadata.find(el=>el.includes("tags")).split(': ')[1].split(',')
    let title = metadata.find(el=>el.includes("title")).split(': ')[1]
    let date = metadata.find(el=>el.includes("date")).split(': ')[1]
    
    //adds images which are referred to in markdown to webpack dependency graph without having to import in js file
    // NOTE: currently assumes all <img> tags in markdown have an alt attribute and that webpack output path is 'dist'
    let file = between(md_content, "<img src='/","' alt=")
    if(file) {
        let file_content = fs.readFileSync(file)
        this.emitFile(file, file_content)

        if(options.isDevelopment) {
            let str = md_content.split("<img src='/")
            md_content = str[0] + "<img src='/dist/" + str[1]
        }
    }

    let obj = {
        content: md_content,
        title: title,
        tags: tags,
        date: date,
        test: options
    }
    return JSON.stringify(obj);
};