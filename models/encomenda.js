const mongoose = require('../database');

const EncomendaSchema = new mongoose.Schema({
    
    itens:
        [{itemProduto:String}]  
});

const Encomenda = mongoose.model('Encomenda', EncomendaSchema);
module.exports = Encomenda;