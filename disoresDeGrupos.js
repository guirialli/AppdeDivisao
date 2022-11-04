const aleatoryNum = (min=0, max=30) => (Math.random()* (max - min) + min).toFixed(0)
const verify = (arrayBase=[], element ) => (arrayBase.indexOf(element) != -1)

function resolverExistente(vet = [], atual=0){
    if(verify(vet, atual) == false)
        return atual
    else
        return resolverExistente(vet, (atual+1))
}

function divisaoPorDois(pessoas=[]){
    let vet = []
    let num = 0
    let grupo1=[]
    let grupo2 =[]

    while (pessoas.length%2 !=0) {
        pessoas.push(" ")
    }

    for(let x = 0; x<(pessoas.length/2);x++){

        num = aleatoryNum(0, (pessoas.length -1 ))
        if(verify(vet, num)){
            grupo1.push(pessoas[num])
            vet.push(num)
        }
        else{
            num = resolverExistente(vet)
            grupo1.push(pessoas[num])
            vet.push(num)
        }


        num = aleatoryNum(0, (pessoas.length -1 ))
        if(verify(vet, num)){
            vet.push(num)
            grupo2.push(pessoas[num])
        }
        else{
            num = resolverExistente(vet)
            grupo2.push(pessoas[num])
            vet.push(num)
        }
    }

    return [grupo1,grupo2]
}


module.exports = {divisaoPorDois}