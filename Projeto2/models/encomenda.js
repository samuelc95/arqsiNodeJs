const mongoose = require('../database');

const EncomendaSchema = new mongoose.Schema({
    idEnc: {
        type: Number,
        require: true,
    },
    data: {
        type: String,
        require: false,
    },
});

const Encomenda = mongoose.model('Encomenda', EncomendaSchema);
module.exports = Encomenda;