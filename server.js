const express  = require('express')
const app  = express()
const bodyParser = require('body-parser')
const { application } = require('express')

app.use(bodyParser.urlencoded({extended:true}))

app.post('/quantidade', (req, resp) =>{
    const qtd = req.body['Quantidade Grupos']
    const comunicador = require('./Scripts/camadaDeComunicao').comunicador
    resp.send(comunicador(qtd))
})

app.listen(3030)