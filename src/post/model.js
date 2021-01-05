const db = require("./../config/sequelize")
const {Model,DataTypes} = db.Sequelize

const sequelize =db.sequelize

class Vaga extends Model {}

Vaga.init({
    data_insercao:{type: DataTypes.DATE},
    qualificacao:{type: DataTypes.STRING},
    ramo:{type: DataTypes.STRING},
    cargo:{type: DataTypes.STRING},
    descricao:{type: DataTypes.STRING},
    salario:{type: DataTypes.DOUBLE}
},{sequelize,modelName: 'vagas'})

module.exports = Vaga