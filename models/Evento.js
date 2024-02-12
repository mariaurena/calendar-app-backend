const { Schema, model} = require('mongoose')

const EventoSchema = Schema({

    title: {
        type: String,
        required: true,
    },

    notes: {
        type: String
    },

    start: {
        type: Date,
        required: true
    },

    end: {
        type: Date,
        required: true
    },

    user: {  // id del usuario
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }

})

// a la hora de verlo ponemos id en vez de _id y quitamos la versión
EventoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
})


module.exports = model( 'Evento', EventoSchema )