const encomendaRepo = require('../repository/encomendaRepo');

exports.insertEncomenda = function (req, res) {
    return encomendaRepo.post_encomendas(req,res);
};

exports.get_encomendas = function (req, res) {
    return encomendaRepo.get_encomendas(req,res);
};

exports.get_encomendasId = function (req, res) {
    return encomendaRepo.getEncomendaById(req,res);
};

exports.get_ItensEncomenda= function (req, res) {
    return encomendaRepo.getItensEncomenda(req,res);
};

exports.editEncomenda = function(req, res) {
    return encomendaRepo.putEncomenda(req,res);
};

exports.deleteEncomenda = function(req, res) {
    return encomendaRepo.delete_encomenda(req,res);
};

