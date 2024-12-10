const mongoose = require("mongoose");

const ContactoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    comentario: {
        type: String,
    }
});

module.exports = mongoose.model('Contacto', ContactoSchema);