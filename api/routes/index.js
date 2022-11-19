const bodyParser = require('body-parser')
const imovel = require('./imoveisRoute')
const cors = require('cors')


module.exports = app => {
    app.use(bodyParser.json({limit: '10mb', extended: true}))
    app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
    app.use(cors()) 
    app.use(bodyParser.json())
    app.use(imovel)
    app.get('/', (req, res) => res.send('Olá'))
}