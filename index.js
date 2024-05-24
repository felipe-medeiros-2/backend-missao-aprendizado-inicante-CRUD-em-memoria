const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

const lista = ['Java','Kotlin','Android']

// Endpoint Read All [GET] / personagem/

app.get('/personagem', function (req, res) {
    res.send(lista)
  })


// Endpoint Read By ID [GET]/personagem/:id

app.get('/personagem/:id', function (req, res) {
    // Acessamos o o parÂmetro de rota ID
    const id = req.params.id
    // Acessa o item na lista usando o ID - 1
    const item = lista[id]
    res.send(item)
  })

// Sinalizando para o express que estamos usando o JSON no Body

app.use(express.json())

// Endpoint Creat [POST] /personagem
  app.post('/personagem', function (req, res) {

    // Acessamos o Body da requisição

    const body = req.body

    // Acessamos a propriedade 'nome' do boddy

    const novoItem = body.nome

    // Adicionamos a lista

    lista.push(novoItem)

    // Exibimos a mensagem de sucesso

    res.send('Item adicionado com sucesso: ' + novoItem)
    // Afuunção send não permite a separação utilizando a virgula, por isso foi usado o +
  })
app.listen(3000)