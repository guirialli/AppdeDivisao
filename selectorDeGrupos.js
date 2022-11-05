
const pessoas = ["Louise", "Ruth", "Paulo", "Maria Pacheco", "Maria Eduarda", "Guilherme"
   , "Emanueli", "Joaquin", "Henrique", "Karen", "Gabriel", "Samile", "Thaynara", "Ingrid"
   , "Melissa", "Claun", "Caroline", "Carol Madrado", "Adickson", "Felipe", "Victor", "Roberna",
   "Isnan", "Cleiton", "David", "Rainae", "Roberta", "Alonso", "Joao", "Cristiano", "Cailane"]



function selectorDeGrupos(pessoas = [], div = 2) {
   const divisor = require('./disoresDeGrupos')
   if (div <= 1)
      return pessoas
   else if (div == 2)
      return divisor.divisaoPorDois(pessoas)
   else if (div == 3)
      return divisor.divisaoPorTres(pessoas)
   else if (div == 4)
      return divisor.divisaoPorQuatro(pessoas)
   else if (div == 5)
      return divisor.divisaoPorCinco(pessoas)
   else if (div == 6)
      return divisor.divisaoPorSeis(pessoas)
   else if (div == 7)
      return divisor.divisaoPorSete(pessoas)
   else if (div == 8)
      return divisor.divisaoPorOito(pessoas)
   else if (div == 9)
      return divisor.divisaoPorNove(pessoas)
   else if (div == 10)
      return divisor.divisaoPorDez(pessoas)
   else if (div == 11)
      return divisor.divisaoPorOnze(pessoas)
}

console.log(selectorDeGrupos(pessoas,11))