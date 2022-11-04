
const pessoas= ["Louise", "Ruth", "Paulo", "Maria Pacheco", "Maria Eduarda", "Guilherme"
, "Emanueli", "Joaquin", "Henrique", "Karen", "Gabriel", "Samile", "Thaynara", "Ingrid"
, "Melissa", "Claun", "Caroline", "Carol Madrado", "Adickson", "Felipe", "Victor", "Roberna",
"Isnan", "Cleiton", "David", "Rainae", "Roberta", "Alonso", "Joao", "Cristiano", "Cailane"]



function app(pessoas=[], div=2){
    const divisor = require('./disoresDeGrupos')
    if(div <= 1)
       return pessoas
    else if(div == 2)
       return divisor.divisaoPorDois(pessoas)
}

console.log(app(pessoas))