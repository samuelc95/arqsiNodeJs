const Encomenda = require('../models/encomenda');
const axios = require('axios');
const ItemProduto = require('../models/itemProduto');
const encomendaService = require('../services/encomendaService');
const ProductDto = require('../dtos/productDto');
const RestrictionDto = require('../dtos/restrictionDto');



const encomendaRepository = require('../repository/encomendaRepo');

exports.get_encomendas = function (req, res) {
    encomendaRepository.get_encomendas(req, function (err, encomendas) {
        if (err)
            res.send(err);
        res.json(encomendas);
    });
};

exports.post_encomenda = function (req, res) {
    try {
        encomendaRepository.post_encomenda(req, function (err) {
            if (err) {
                return res.status(412).send({
                    success: false
                });
            }
            return res.send({
                success: true,
                message: 'Encomenda registada com sucesso!'
            });
        })
    } catch (err) {

        return res.status(400).send({
            error: 'Erro criar encomenda'
        });
    };
};

    exports.get_encomendaById = function (req, res) {
        encomendaRepository.get_encomendaById(req, function (err, encomenda) {
            if (err)
                res.send(err);
            res.json(encomenda);
        });
    };

    exports.put_encomenda = function (req, res) {
        Encomenda.findByIdAndUpdate(req.params.encomenda_id, { $set: req.body }, function (err, encomenda) {
            if (err)
                res.send(err);
            res.json({ message: 'Encomenda atualizada!' });
        });
    };

    exports.delete_encomenda = function (req, res) {
        encomendaRepository.delete_encomenda(req, function (err, encomenda) {
            if (err)
                res.send(err);
            res.json({ message: 'Eliminada!' });
        });
    };

    //http://localhost:5000/api/produtos
    exports.getProdutos = function (req, res) {
      getProduto(1);
    };

    function getProduto(id){
        axios
            .get('http://arqsi-1151111-1151112.azurewebsites.net/api/produtos/'+id)
            .then(response => {
                    let produto = new ProductDto();
                    produto.produtoId = response.data.productId;
                    produto.nome =  response.data.nome;
                    produto.descricao = response.data.descricao;
                    produto.material_AcabamentoID = response.data.material_AcabamentoID;
                    produto.restrictionId = response.data.restrictionId;
                        /* let restriction = new RestrictionDto();
                        restriction = getRestriction(jsonData[i].restrictionId); */
                    console.log('produto -->' + produto.nome);
              
            }).catch(error => {
                console.log(error);
            });
    }

    function getRestriction(id){
        axios
            .get('http://arqsi-1151111-1151112.azurewebsites.net/api/Restriction/'+id)
            .then(response => {
                let restriction = new RestrictionDto();
                restrictionId = response.data.restrictionId;
                lenghtMax = response.data.lenghtMax;
                heightMax = response.data.heightMax;
                depthMax = response.data.depthMax;
                lenghtMin = response.data.lenghtMin;
                heightMin = response.data.heightMin;
                depthMin =  response.data.depthMin;
                return restriction;
            }).catch(error => {
                console.log(error);
            });
    }

    exports.getItensEncomenda = function (req, res) {
        encomendaRepository.get_encomendaById(req, function (err, encomenda) {
            if (err)
                res.send(err);
            res.json(encomenda.itens);
        });
    };


    /* exports.getProdutos = function (req, res) {
        var id = 1;
        var url = 'http://arqsi-1151111-1151112.azurewebsites.net/api/produtos/'+id;
        console.log('url' +url);
        axios
            .get("http://arqsi-1151111-1151112.azurewebsites.net/api/produtos/")
            .then(response => {
                var s = JSON.stringify(response.data)
                var jsonData = JSON.parse(s);
                lista = new Array();
                for (var i = 0; i < jsonData.length; i++) {
                    let produto = new ProductDto();
                    produto.produtoId = jsonData[i].productId;
                    produto.nome =  jsonData[i].nome;
                    produto.descricao = jsonData[i].descricao;
                    produto.material_AcabamentoID = jsonData[i].material_AcabamentoID;
                    produto.restrictionId = jsonData[i].restrictionId;
                        let restriction = new RestrictionDto();
                        restriction = getRestriction(jsonData[i].restrictionId); 
                    lista.push(produto);

                }
                for (var i = 0; i < jsonData.length; i++) {
                    console.log('produto -->' + lista[i].nome);
                }
            }).catch(error => {
                console.log(error);
            });
    }; */