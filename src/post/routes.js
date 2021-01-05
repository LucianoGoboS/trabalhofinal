module.exports = (app)=>{
    const controller = require('./controller')

    //Criar um novo post
    app.post('/post',controller.create)

    //Busca de todos os posts
    app.get('/post',controller.findAll)

    //Atualiza um post por id
    app.put('/post',controller.update)

    //Remove um post por id
    app.delete('/post',controller.remove)
}