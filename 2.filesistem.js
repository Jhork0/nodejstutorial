const fs = require('node:fs')

const stats = fs.statSync('./achivo.txt')

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.size,
    stats.isSymbolicLink(),

)