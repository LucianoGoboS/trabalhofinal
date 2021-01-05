const db = require("./../config/sequelize")
const Cliente = require("./model")

exports.create = (req, res) => {
    Cliente.create({
            nome: req.body.nome,
            CPF: req.body.CPF,
            nascimento: req.body.nascimento,
            telefone: req.body.telefone,
            profissao: req.body.profissao,
            escolaridade: req.body.escolaridade,
            habilidade: req.body.habilidade
    }).then((user) => {
        res.send(user)
    })
}

exports.findAll = (req, res) => {
    Cliente.findAll().then(user => {
        res.send(user)
    }).catch((err)=>{
        console.log("Erro: " + err)
    })
}

exports.update = (req,res)=>{
    Post.update(
        {
            content: req.body.content
        },
        {
            where: {
                CPF: req.body.CPF
            }
        }
    ).then(()=>{
        res.send({'message':'ok'})
    })
}

exports.remove = (req,res)=>{
    Post.destroy({
        where: {
            id: req.body.id
        }

    }).then((affectedRows)=>{
        res.send({'message': 'ok', 'affectedRows': affectedRows})
    })
}
