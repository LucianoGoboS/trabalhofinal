module.exports = (app)=>{
    const controller = require('./controller')

    //Criar um novo usuario

    app.post('/usuarios',controller.create)

    //Busca de todos os uruarios

    app.get('/usuarios',controller.findAll)
}