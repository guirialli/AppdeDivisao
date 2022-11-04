const aleatoryNum = (min=0, max=30) => (Math.random()* (max - min) + min).toFixed(0)

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
        if(x==0 || vet.indexOf(num)!=-1)
            grupo1.push(pessoas[num])
        else{
            while (vet.indexOf==-1) {
                num = aleatoryNum(0, (pessoas.length-1))
            }
            grupo1.push(pessoas[num])
        }

        num = aleatoryNum(0, (pessoas.length -1 ))
        if(vet.indexOf(num)!=-1)
            grupo1.push(pessoas[num])
        else{
            while (vet.indexOf==-1) {
                num = aleatoryNum(0, (pessoas.length-1))
            }
            grupo2.push(pessoas[num])
        }
    }

    return [grupo1,grupo2]
}

module.exports = {divisaoPorDois}