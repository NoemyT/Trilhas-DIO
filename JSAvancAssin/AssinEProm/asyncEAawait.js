const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'rotina.csv') 

async function buscar() {
    try {
        const arquivo = await fs.promises.readFile(filePath)
        const texto = arquivo.toString('utf-8')
        console.log(texto)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('finalizado!')
    }
}

buscar()