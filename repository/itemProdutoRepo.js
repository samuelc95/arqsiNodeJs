const ItemProduto = require('../models/itemProduto');

exports.post_item = function (req, itemProduto2, res) {
    var itemProduto = new ItemProduto(/* {
        produtoPrincipal: req.body.produtoPrincipal,
        height: req.body.height, 
        width: req.body.width, 
        depth: req.body.depth,
        produtos: req.body.produtos
        
    }*/); 
    itemProduto = itemProduto2;
    return itemProduto.save(res);
};

exports.get_itens= function (req, res) {
    return ItemProduto.find(res);
};

exports.getItemId= function (req, res) {
    return ItemProduto.findById(req.params.idItem, res);
};

exports.delete_item = function (req, res) {
    // Encomenda.remove({_id: req.params.encomenda_id}, function (err, encomenda)
    return ItemProduto.remove({ _id: req.params.idItem }, res);
};