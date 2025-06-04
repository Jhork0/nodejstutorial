const fs = require('node:fs')


console.log('Leyendo el primer archivo')
fs.readFile('./achivo.txt','utf8', (err,text1)=>{
console.log('primer texto:',text1)

})


console.log("Haciendo cosas")

console.log('Leyendo el segundo archivo')
fs.readFile('./achivo2.txt','utf8', (err,text2)=>{
console.log('segundo texto:',text2)

})
