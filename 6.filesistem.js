const fs = require('node:fs/promises')

// el objeto process es un objeto global que proporciona informacion y control sobre el proceso alcual de ejecucion

fs.readdir('.')
  .then(files => {
    files.forEach(file => {
      console.log(file)
    })
  }).catch(err => {
    if (err) {
      console.error('Error al leer el directorio: ', err)
    }
  })
