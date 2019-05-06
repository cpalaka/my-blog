var fs = require('fs')
let dir = 'markdown'

let md_files = 
    fs.readdirSync(dir) // list files in directory
    .filter(f=>/.md/.test(f)) // filter for markdown only
    .map(f=>f.split('.')[0]) // remove extension

fs.writeFileSync(
    dir + '/index.js', 
    md_files.map(name=>`import ${name} from './${name}.md'\n`).join('') + 'export default [' + md_files.map(f=>f).join(', ') + ']\n'
)