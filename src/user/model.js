const db = require("./../config/sequelize")
const {Model,DataTypes} = db.Sequelize

const sequelize =db.sequelize;

class Cliente extends Model {}

Cliente.init({
    nome:{type: DataTypes.STRING},
    CPF:{type: DataTypes.STRING},
    nascimento:{type: DataTypes.DATE},
    telefone:{type: DataTypes.STRING},
    profissao:{type: DataTypes.STRING},
    escolaridade:{type: DataTypes.STRING},
    habilidades:{type: DataTypes.STRING}
},{sequelize,modelName: 'clientes'})

module.exports = Cliente