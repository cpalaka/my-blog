var fs = require('fs')
let dir = 'markdown'

let md_files = fs.readdirSync(dir).filter(f=>/.md/.test(f)).map(f=>f.split('.')[0])

fs.writeFileSync(
    dir + '/index.js', 
    md_files.map(name=>`import ${name} from './${name}.md'\n`).join('') + 'export default [' + md_files.map(f=>f).join(', ') + ']\n'
)