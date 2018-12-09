const Encomenda = require('../models/encomenda');

 
exports.get_encomendas = function (req, res) {
    // Encomenda.find(function (err, encomendas)
    return Encomenda.find(res);
};
 
exports.get_encomendaById = function (req, res) {
    // Encomenda.findById(req.params.encomenda_id, function (err, encomenda)
    return Encomenda.findById(req.params.idEnc, res);
};
 
exports.delete_encomenda = function (req, res) {
    // Encomenda.remove({_id: req.params.encomenda_id}, function (err, encomenda)
    return Encomenda.remove({ _id: req.params.idEnc }, res);
};
 
exports.post_encomenda = function (req, res) {
    var encomenda = new Encomenda();
        
    encomenda.itens =  req.body.itens;
 
    return encomenda.save(res);
};
 
// exports.put_encomenda = function (req, res) {
//     // Encomenda.findByIdAndUpdate(req.params.encomenda_id, { $set: req.body }, function (err, encomenda) {
//     return Encomenda.findByIdAndUpdate(req.params.encomenda_id, { $set: req.body });
// };