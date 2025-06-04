
const { readFile } = require('node:fs/promises') 


async function init() {
    console.log('Leyendo el primer archivo')
    const text1= await readFile('./achivo.txt','utf8')
    console.log('primer texto:',text1)

    console.log("Haciendo cosas")
    console.log('Leyendo el segundo archivo')
    const text2= await readFile('./achivo2.txt','utf8')
    console.log('segundo texto:',text2)
}
init()














