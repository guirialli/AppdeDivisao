const aleatoryNum = (min = 0, max = 30) => (Math.random() * (max - min) + min).toFixed(0)
const verify = (arrayBase = [], element) => (arrayBase.indexOf(element) != -1)

function resolverExistente(vet = [], atual = 0) {
    if (verify(vet, atual) == false)
        return atual
    else
        return resolverExistente(vet, (atual + 1))
}

function ateSerDivisivel(array = [], div = 2) {
    if (array.length % div == 0)
        return array
    else {
        array.push("")
        return ateSerDivisivel(array, div)
    }

}

function adcionarAGrupoSemRepeticao(grupo = [], elementos = [], num = 0, vetorJaEscolhidos = []) {
    if (verify(vetorJaEscolhidos, num)) {
        grupo.push(elementos[num])
        vetorJaEscolhidos.push(num)
    }
    else {
        num = resolverExistente(vetorJaEscolhidos)
        grupo.push(elementos[num])
        vetorJaEscolhidos.push(num)
    }
    return [grupo, vetorJaEscolhidos]
}

function divisaoPorDois(pessoas = []) {
    let vet = []
    let num = 0
    let vetAux = []
    let grupo1 = []
    let grupo2 = []

    pessoas = ateSerDivisivel(pessoas, 2)

    for (let x = 0; x < (pessoas.length / 2); x++) {

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo1, pessoas, num, vet)
        grupo1 = vetAux[0]
        vet = vetAux[1]
        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo2, pessoas, num, vet)
        grupo2 = vetAux[0]
        vet = vetAux[1]
    }

    return [grupo1, grupo2]
}

function divisaoPorTres(pessoas = []) {
    let vet = []
    let num = 0
    let grupo1 = []
    let grupo2 = []
    let grupo3 = []

    pessoas = ateSerDivisivel(pessoas, 3)

    for (let x = 0; x < (pessoas.length / 3); x++) {

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo1, pessoas, num, vet)
        grupo1 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo2, pessoas, num, vet)
        grupo2 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo3, pessoas, num, vet)
        grupo3 = vetAux[0]
        vet = vetAux[1]
    }

    return [grupo1, grupo2, grupo3]
}

function divisaoPorQuatro(pessoas = []) {
    let vet = []
    let num = 0
    let grupo1 = []
    let grupo2 = []
    let grupo3 = []
    let grupo4 = []

    pessoas = ateSerDivisivel(pessoas, 4)

    for (let x = 0; x < (pessoas.length / 4); x++) {

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo1, pessoas, num, vet)
        grupo1 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo2, pessoas, num, vet)
        grupo2 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo3, pessoas, num, vet)
        grupo3 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo4, pessoas, num, vet)
        grupo4 = vetAux[0]
        vet = vetAux[1]
    }

    return [grupo1, grupo2, grupo3, grupo4]
}

function divisaoPorCinco(pessoas = []) {
    let vet = []
    let num = 0
    let grupo1 = []
    let grupo2 = []
    let grupo3 = []
    let grupo4 = []
    let grupo5 = []
    pessoas = ateSerDivisivel(pessoas, 5)

    for (let x = 0; x < (pessoas.length / 5); x++) {

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo1, pessoas, num, vet)
        grupo1 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo2, pessoas, num, vet)
        grupo2 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo3, pessoas, num, vet)
        grupo3 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo4, pessoas, num, vet)
        grupo4 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo5, pessoas, num, vet)
        grupo5 = vetAux[0]
        vet = vetAux[1]
    }

    return [grupo1, grupo2, grupo3, grupo4, grupo5]
}

function divisaoPorSeis(pessoas = []) {
    let vet = []
    let num = 0
    let grupo1 = []
    let grupo2 = []
    let grupo3 = []
    let grupo4 = []
    let grupo5 = []
    let grupo6 = []
    pessoas = ateSerDivisivel(pessoas, 6)

    for (let x = 0; x < (pessoas.length / 6); x++) {

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo1, pessoas, num, vet)
        grupo1 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo2, pessoas, num, vet)
        grupo2 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo3, pessoas, num, vet)
        grupo3 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo4, pessoas, num, vet)
        grupo4 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo5, pessoas, num, vet)
        grupo5 = vetAux[0]
        vet = vetAux[1]

        
        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo6, pessoas, num, vet)
        grupo6 = vetAux[0]
        vet = vetAux[1]
    }

    return [grupo1, grupo2, grupo3, grupo4, grupo5, grupo6]
}

function divisaoPorSete(pessoas = []) {
    let vet = []
    let num = 0
    let grupo1 = []
    let grupo2 = []
    let grupo3 = []
    let grupo4 = []
    let grupo5 = []
    let grupo6 = []
    let grupo7 = []
    pessoas = ateSerDivisivel(pessoas, 7)

    for (let x = 0; x < (pessoas.length / 7); x++) {

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo1, pessoas, num, vet)
        grupo1 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo2, pessoas, num, vet)
        grupo2 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo3, pessoas, num, vet)
        grupo3 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo4, pessoas, num, vet)
        grupo4 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo5, pessoas, num, vet)
        grupo5 = vetAux[0]
        vet = vetAux[1]

        
        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo6, pessoas, num, vet)
        grupo6 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo7, pessoas, num, vet)
        grupo7 = vetAux[0]
        vet = vetAux[1]
    }

    return [grupo1, grupo2, grupo3, grupo4, grupo5, grupo6, grupo7]
}

function divisaoPorOito(pessoas = []) {
    let vet = []
    let num = 0
    let grupo1 = []
    let grupo2 = []
    let grupo3 = []
    let grupo4 = []
    let grupo5 = []
    let grupo6 = []
    let grupo7 = []
    let grupo8 = []
    pessoas = ateSerDivisivel(pessoas, 8)

    for (let x = 0; x < (pessoas.length / 8); x++) {

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo1, pessoas, num, vet)
        grupo1 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo2, pessoas, num, vet)
        grupo2 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo3, pessoas, num, vet)
        grupo3 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo4, pessoas, num, vet)
        grupo4 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo5, pessoas, num, vet)
        grupo5 = vetAux[0]
        vet = vetAux[1]

        
        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo6, pessoas, num, vet)
        grupo6 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo7, pessoas, num, vet)
        grupo7 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo8, pessoas, num, vet)
        grupo8 = vetAux[0]
        vet = vetAux[1]
    }

    return [grupo1, grupo2, grupo3, grupo4, grupo5, grupo6, grupo7, grupo8]
}

function divisaoPorNove(pessoas = []) {
    let vet = []
    let num = 0
    let grupo1 = []
    let grupo2 = []
    let grupo3 = []
    let grupo4 = []
    let grupo5 = []
    let grupo6 = []
    let grupo7 = []
    let grupo8 = []
    let grupo9 = []
    pessoas = ateSerDivisivel(pessoas, 9)

    for (let x = 0; x < (pessoas.length / 9); x++) {

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo1, pessoas, num, vet)
        grupo1 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo2, pessoas, num, vet)
        grupo2 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo3, pessoas, num, vet)
        grupo3 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo4, pessoas, num, vet)
        grupo4 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo5, pessoas, num, vet)
        grupo5 = vetAux[0]
        vet = vetAux[1]

        
        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo6, pessoas, num, vet)
        grupo6 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo7, pessoas, num, vet)
        grupo7 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo8, pessoas, num, vet)
        grupo8 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo9, pessoas, num, vet)
        grupo9 = vetAux[0]
        vet = vetAux[1]
    }

    return [grupo1, grupo2, grupo3, grupo4, grupo5, grupo6, grupo7, grupo8,grupo9]
}


function divisaoPorDez(pessoas = []) {
    let vet = []
    let num = 0
    let grupo1 = []
    let grupo2 = []
    let grupo3 = []
    let grupo4 = []
    let grupo5 = []
    let grupo6 = []
    let grupo7 = []
    let grupo8 = []
    let grupo9 = []
    let grupo10 = []
    pessoas = ateSerDivisivel(pessoas, 10)

    for (let x = 0; x < (pessoas.length / 10); x++) {

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo1, pessoas, num, vet)
        grupo1 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo2, pessoas, num, vet)
        grupo2 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo3, pessoas, num, vet)
        grupo3 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo4, pessoas, num, vet)
        grupo4 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo5, pessoas, num, vet)
        grupo5 = vetAux[0]
        vet = vetAux[1]

        
        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo6, pessoas, num, vet)
        grupo6 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo7, pessoas, num, vet)
        grupo7 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo8, pessoas, num, vet)
        grupo8 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo9, pessoas, num, vet)
        grupo9 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo10, pessoas, num, vet)
        grupo10 = vetAux[0]
        vet = vetAux[1]
    }

    return [grupo1, grupo2, grupo3, grupo4, grupo5, grupo6, grupo7, grupo8,grupo9,grupo10]
}

function divisaoPorOnze(pessoas = []) {
    let vet = []
    let num = 0
    let grupo1 = []
    let grupo2 = []
    let grupo3 = []
    let grupo4 = []
    let grupo5 = []
    let grupo6 = []
    let grupo7 = []
    let grupo8 = []
    let grupo9 = []
    let grupo10 = []
    let grupo11 = []
    pessoas = ateSerDivisivel(pessoas, 11)

    for (let x = 0; x < (pessoas.length / 11); x++) {

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo1, pessoas, num, vet)
        grupo1 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo2, pessoas, num, vet)
        grupo2 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo3, pessoas, num, vet)
        grupo3 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo4, pessoas, num, vet)
        grupo4 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo5, pessoas, num, vet)
        grupo5 = vetAux[0]
        vet = vetAux[1]

        
        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo6, pessoas, num, vet)
        grupo6 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo7, pessoas, num, vet)
        grupo7 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo8, pessoas, num, vet)
        grupo8 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo9, pessoas, num, vet)
        grupo9 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo10, pessoas, num, vet)
        grupo10 = vetAux[0]
        vet = vetAux[1]

        num = aleatoryNum(0, (pessoas.length - 1))
        vetAux = adcionarAGrupoSemRepeticao(grupo11, pessoas, num, vet)
        grupo11 = vetAux[0]
        vet = vetAux[1]
    }

    return [grupo1, grupo2, grupo3, grupo4, grupo5, grupo6, grupo7, grupo8,grupo9,grupo10, grupo11]
}

module.exports = { divisaoPorDois, divisaoPorTres, divisaoPorQuatro, divisaoPorCinco,divisaoPorSeis, divisaoPorSete,divisaoPorOito
, divisaoPorNove, divisaoPorDez, divisaoPorOnze}