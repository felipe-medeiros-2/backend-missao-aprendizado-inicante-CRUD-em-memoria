const express = require('express')
const app = express()

app.get('/', function (req, res) {

  res.send('Hello World')

})

const lista = ['Java','Kotlin','Android']

// Endpoint Read All [GET] / personagem/

app.get('/personagem', function (req, res) {

    res.send(lista.filter(Boolean))
    // A função filter(Boolean) serve para corrigir as situações onde um item da lista é removido, para que ao inves de aparecer null, não apareça nada e o length apareça correto

  })


// Endpoint Read By ID [GET]/personagem/:id

app.get('/personagem/:id', function (req, res) {

    // Acessamos o o parÂmetro de rota ID

    const id = req.params.id

    // Acessa o item na lista usando o ID - 1

    const item = lista[id - 1]

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

  // Afunção send não permite a separação utilizando a virgula, por isso foi usado o +
})

// Endpoint Update [PUT] / personagem/:id

app.put('/personagem/:id', function(req, res){

  // Acessamos o ID dos parametros de rota

  const id = req.params.id

  // Acessamos o body da requisição

  const body = req.body

  // Acessamos a propriedade 'nome' do body

  const novoItem = body.nome

  // Atualizamos na lista o novoItem pelo ID - 1

  lista[id - 1] = novoItem
  // a estrutura const item = lista[id - 1] acessa a informação, enquanto a lista[id - 1] = novo item serve pra definir o valor dele

  // Enviamos uma mensagem de sucesso

  res.send('Item atualizado com sucesso: ' + id + ' - ' + novoItem)
})

// Endpoint Delete [DELETE] /personagem/:id
app.delete('/personagem/:id', function(req, res){

  // Acessamos o parametro de rota

  const id = req.params.id

  // Remover o item da lista usando o ID -1

  delete lista[id - 1]

  // Enviamos uma mensagem de sucesso

  res.send('Item removido com sucesso: ' + id)

})
app.listen(3000)