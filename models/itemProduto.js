const mongoose = require('../database');

const ItemProdutoSchema = new mongoose.Schema({
    
    produtoPrincipal: Number,
    materialAcabamentoId : Number,
    height: Number, 
    width: Number, 
    depth: Number,
    emptyArea: Number,
    produtos: [{
        produtoId: Number,
        nome: String,
        descricao:String,
        materialAcabamentoId:Number,
        height: Number,
        width: Number,
        depth: Number,
        emptyArea: Number   
    }]  
});

const ItemProduto = mongoose.model('ItemProduto', ItemProdutoSchema);
module.exports = ItemProduto;