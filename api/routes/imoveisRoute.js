const { Router } = require('express')
const AddEvento = require('../modules/addEvento')
const Cadastro = require('../modules/cadastro')
const GetEvento = require('../modules/getEvento')
const GetEventos = require('../modules/getEventos')
const GetEventosUser = require('../modules/getEventosUser')
const Login = require('../modules/login')

const router = Router()

router.get('/eventos', GetEventos.getEventos)
router.get('/evento', GetEvento.getEvento)
router.get('/eventosUser', GetEventosUser.getEventosUser)
router.post('/cadastro', Cadastro.cadastro)
router.post('/addEvento', AddEvento.addEvento)
router.post('/login', Login.login)

module.exports = router