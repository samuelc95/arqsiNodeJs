const mongoose = require('../database');

const EncomendaSchema = new mongoose.Schema({
    idProdPrincipal: {
        type: Number,
        require: true,
    },
    medidas:  
        [{height:Number, width:Number, depth:Number}],
   
    produtos:
        [{idProduto:Number,height:Number, width:Number, depth:Number}]  
});

const Encomenda = mongoose.model('Encomenda', EncomendaSchema);
module.exports = Encomenda;