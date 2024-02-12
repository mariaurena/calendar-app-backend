//* Configuración básica de express

const express = require('express')

// para usar las variables de entorno
require('dotenv').config()

const cors = require('cors')

const { dbConnection } = require('./database/config')

// crear el servidor de express
const app = express()

// base de datos
dbConnection()

// CORS
app.use(cors())

// directorio publico
app.use( express.static('public') )

// lectura y parseo del body
app.use( express.json() ) 

// *rutas
app.use('/api/auth'  , require('./routes/auth'))
app.use('/api/events', require('./routes/events'))
app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/index.html')
})

// TODO: CRUD: Eventos

// escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
} )
