

function getPessoas(){
   return (require('./LeituraDeArquivo').lerNomesEmDiscoCSV('nomes.csv')).split(',')
}

module.exports= {getPessoas}