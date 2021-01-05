const db = require("./../config/sequelize")
const Vaga = require("./model")

exports.create = (req, res) => {
    Vaga.create({
            data_insercao: req.body.data_insercao,
            qualificacao: req.body.qualificacao,
            ramo: req.body.ramo,
            cargo: req.body.cargo,
            descricao: req.body.descricao,
            salario: req.body.salario
    }).then((post) => {
        res.send(post)
    })
}