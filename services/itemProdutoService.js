const itemProdutoRepo = require('../repository/itemProdutoRepo');

exports.insertItem = function (req, itemProduto , res) {
    return itemProdutoRepo.post_item(req, itemProduto, res);
};

exports.get_Itens = function (req, res) {
    return itemProdutoRepo.get_itens(req,res);
};

exports.getItemId = function (req, res) {
    return itemProdutoRepo.getItemId(req,res);
};

exports.delete_item = function (req, res) {
    return itemProdutoRepo.delete_item(req,res);
};
