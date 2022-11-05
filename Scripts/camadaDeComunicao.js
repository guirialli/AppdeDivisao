function comapatibilidadeComSeletor(quantidade) {
    const seletor = require('./selectorDeGrupos').selectorDeGrupos
    let vetTotal = seletor(require('./getListPessoas').getPessoas(), quantidade)
    let vetAux = []
    let str = ""
    for (let elemento = 0; elemento < vetTotal.length; elemento++) {
        str += `<div class="grupos">Grupo ${elemento + 1}: `
        vetAux = vetTotal[elemento]
        for (let pos = 0; pos < vetAux.length; pos++) {

            if (vetAux[pos] == "") {
                str += ""
            }
            else if ((pos + 1) < vetAux.length)
                str += `${vetAux[pos]}, `
            else
                str += `${vetAux[pos]}.`

        }
        str += `</div>`
    }
    return str
}

function comunicador(quantidade) {

    const grupos = comapatibilidadeComSeletor(quantidade)
    return `<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <style></style>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Formador de Grupos</title>
        <style> 
                .grupos{
                    margin: 10px;
                    font-size: 20px;
                }

                header{
                    text-align: center;
                    font-size: 25px;
                    text-decoration:  underline;    
                }
                #buttonArea{
                    text-align: center;
                    margin: 20px;
                    font-size: 21px;
                }
                #displayArea{
                    margin:20px
                }
        </style>
        <link rel="shortcut icon" href=".images/grupo-de-usuarios.png" type="image/x-icon" />
    </head>
    <body>
        <div><header>  <h1> Show de Talentos com Tempo </h1> </header></div>
        <form id="buttonArea" action="http://localhost:3030/quantidade" method="POST">
            Quantidade Grupos   
            <select name="Quantidade Grupos" id="quantidade">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
            </select>
            <button>Gerar</button>
        </form>
        <article id="displayArea">
              ${grupos}
        </article>
    </body>
    </html>`
}

module.exports = { comunicador }