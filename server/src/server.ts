import express from 'express';

const app = express();

app.use(express.json())

// Rota: Endereço  completo da requisição
// Recurso: qual entidade estamos acessando do sistema

// GET: Busca uma ou mais informaçòes
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = buscar dados do usuário com id 5

// Request Praram: Prarâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
// Request Body: Parâmetros para criação/atualização de informações 

// Select * FROM users WHERE name = 'Diego'
// knex('users').where('name', 'Diego').select('*')


const users = [
    'Diego', // 0
    'Cleiton', // 1
    'Robson', // 2
    'Daniel' // 3
]

app.get('/users', (req, res) => {
    const search = String(req.query.search)

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users

    return res.json(filteredUsers)
})

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)

    const user = users[id]

    return res.json(user)
})

app.post('/users', (req, res) => {
    const data = req.body

    console.log('data :>> ', data);

    const user = {
        nome: data.nome,
        email: data.email
    }

    return res.json(user)
})

app.listen(3333)