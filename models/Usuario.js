const { Schema, model} = require('mongoose')

const UsuarioSchema = Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true   // no debe haber correos duplicados
    },

    password: {
        type: String,
        required: true
    }
})


module.exports = model( 'Usuario', UsuarioSchema )