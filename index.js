app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('public'))

db.sequelize.sync({alter: true}).then(()=>{
    console.log('deu certo a criacao do banco (DROP E/OU CREATE)')
})

require('./src/cliente/routes')(app)
require('./src/vaga/routes')(app)

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/views/index.html")
})

var server = app.listen(3000,()=>{
    console.log('Servidor rodando na porta ' + server.address.port + 'no host ' + server.address().address)
})

