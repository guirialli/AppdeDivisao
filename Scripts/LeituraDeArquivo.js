function lerNomesEmDiscoCSV(path){
    const fs = require('fs')
    const dados = fs.readFileSync(path,"utf-8")
    return dados
}

module.exports = {lerNomesEmDiscoCSV}