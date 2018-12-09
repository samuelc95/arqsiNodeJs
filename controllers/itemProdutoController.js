const axios = require('axios');
const ItemProduto = require('../models/itemProduto');
const ProductDto = require('../dtos/productDto');
const RestrictionDto = require('../dtos/restrictionDto');
const itemService = require('../services/itemProdutoService');


exports.postItemProduto = function (req, res) {
    try {
        subProds = new Array();
        let itemProduto = new ItemProduto();
        itemProduto.produtoPrincipal = req.body.produtoPrincipal;
        itemProduto.material_AcabamentoID = req.body.material_AcabamentoID;

        var item = fillProdutos(itemProduto, subProds, req, res);

        /* getProduto(idProd, function(produto) {
            console.log('produto -> ' + produto.nome); 
            itemProduto.emptyArea = produto.emptyArea;
                getItensProdutos(idProd, function (subProds) { //buscar itens de cada produto
                    console.log('lista produtos -> ' + subProds); 
                   if(subProds.length > 0){
                    for(var key in subProds){   
                       getProduto(key, function (subProduto) { //buscar cada produto
                            let prodAux = new ProductDto();
                            console.log('SUB PRODUTO  -> \n\n'+ subProduto.produtoId);
                            prodAux.produtoId = subProduto.produtoId;
                            prodAux.nome = subProduto.nome;
                            prodAux.descricao = subProduto.descricao;
                            prodAux.materialAcabamentoId = subProduto.materialAcabamentoId;
                            prodAux.emptyArea = subProduto.emptyArea;  
                            getDimension(subProduto.dimensionId, function (subProduto) {
                                prodAux.height = subProduto.height;
                                prodAux.width = subProduto.width;
                                prodAux.depht = subProduto.depth;
                                console.log('Prod aux  -> \n\n'+ prodAux);
                                itemProduto.produtos.push(prodAux);
                                console.log('item -> '+ itemProduto);
                                });
                       });
                    }
                   }
                    
                }); 
        }); */
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            error: 'Erro criar item'
        });
    };
};

exports.getItemId = function (req, res) {
    itemService.getItemId(req, function (err, itemProduto) {
        if (err)
            res.send(err);
        res.json(itemProduto);
    });
};


exports.get_itens = function (req, res) {
    itemService.get_Itens(req, function (err, itens) {
        if (err)
            res.send(err);
        res.json(itens);
    });
};

exports.putItem = function (req, res) {
    ItemProduto.findByIdAndUpdate(req.params.idItem, { $set: req.body }, function (err, itemProduto) {
        if (err)
            res.send(err);
        res.json({ message: 'Item atualizado!' });
    });
};

exports.delete_item = function (req, res) {
    itemService.delete_item(req, function (err, itemProduto) {
        if (err)
            res.send(err);
        res.json({ message: 'Eliminado!' });
    });
};


async function fillProdutos(itemProduto, subProds, req, res) {
    try {
        console.log('Produto id: ' + itemProduto.produtoPrincipal);
        var getProduto = await axios.get('http://arqsi-1151111-1151112.azurewebsites.net/api/produtos/' + itemProduto.produtoPrincipal);
        var sProd = JSON.stringify(getProduto.data);
        var jsonDataProd = JSON.parse(sProd);
        itemProduto.emptyArea = jsonDataProd.emptyArea;
        console.log('Produto id: ' + jsonDataProd.productId);
        //dimensao produto
        var getDimensao = await getDimension(jsonDataProd.dimensionId);
        var sDim = JSON.stringify(getDimensao.data);
        var jsonDataDim = JSON.parse(sDim);
        //restriction produto
        var getRestricao = await getRestrictionProd(jsonDataProd.restrictionId);
        var sRes = JSON.stringify(getRestricao.data);
        var jsonDataRes = JSON.parse(sRes);
        //verificar se medidas fazem parte das restricoes
        if (jsonDataRes.lenghtMax >= req.body.width && jsonDataRes.lenghtMin <= req.body.width &&
            jsonDataRes.heightMax >= req.body.height && jsonDataRes.heightMin <= req.body.height &&
            jsonDataRes.depthMax >= req.body.depth && jsonDataRes.depthMin <= req.body.depth) {
            itemProduto.height = req.body.height;
            itemProduto.width = req.body.width;
            itemProduto.depth = req.body.depth;
            /* console.log('LISTAAA PROD -> ' + req.body.produtos);
            var aux = await verificaArea(itemProduto.emptyArea, req.body.produtos);
            if (!aux) { */
                itemProduto.produtos = req.body.produtos;
                var listaItens = await getItensProdutos(itemProduto.produtoPrincipal, subProds);
                for (var key in listaItens) {
                    console.log('ID -> ' + key + " has value " + subProds[key]);
                    var getSubProd = await axios.get('http://arqsi-1151111-1151112.azurewebsites.net/api/produtos/' + key);
                    var sSubProd = JSON.stringify(getSubProd.data);
                    var jsonDataSubProd = JSON.parse(sSubProd);
                    //Dimensao Sub Produto
                    var getDimensaoSub = await getDimension(jsonDataSubProd.dimensionId);
                    var sSubDimen = JSON.stringify(getDimensaoSub.data);
                    var jsonDataDim = JSON.parse(sSubDimen);
                    //sub produto
                    const prodAux = new ProductDto();
                    prodAux.produtoId = jsonDataSubProd.productId;
                    prodAux.nome = jsonDataSubProd.nome;
                    prodAux.descricao = jsonDataSubProd.descricao;
                    prodAux.materialAcabamentoId = jsonDataSubProd.material_AcabamentoID;
                    console.log('\n\nlargura -> ' + jsonDataDim.lenght);
                    console.log('\n\nComprimento -> ' + jsonDataDim.height);
                    console.log('\n\nProf -> ' + jsonDataDim.depth);
                    prodAux.height = jsonDataDim.height;
                    prodAux.width = jsonDataDim.lenght;
                    prodAux.depht = jsonDataDim.depth;
                    console.log('\n\nPRODUTO PROF -> ' + prodAux.depht);
                    prodAux.restrictionId = jsonDataSubProd.restrictionId;
                    prodAux.dimensionId = jsonDataSubProd.dimensionId;
                    prodAux.emptyArea = jsonDataSubProd.emptyArea;
                    console.log('PROD AUX ' + prodAux);
                    itemProduto.produtos.push(prodAux);
                    console.log('itemProduto ' + itemProduto);
                }
                 itemService.insertItem(req, itemProduto, function (err) {
                    if (err) {
                        return res.status(412).send({
                            success: false
                        });
                    }
                    return res.send({
                        success: true,
                        message: 'Item registado com sucesso!'
                    });
                })  
           /*  } else {
                return res.status(400).send({
                    error: 'Não é possível adicionar mais itens a este produto'
                });
            } */

        } else {
            return res.status(400).send({
                error: 'Medidas produto incompativeis'
            });
        }


    } catch (err) {
        console.log(err);
        return res.status(400).send({
            error: 'Erro preencher Produtos'
        });
    };
}

/* async function verificaArea(emptyArea, lista) {
    var areaTemp = emptyArea;
    for (var j = 0; j < lista.lenght; j++) {
        var largura = lista[i].width;
        var altura = lista[i].height;
        var areaTemp = areaTemp - (largura * altura);
        console.log('AREA VERIFICA -> ' + areaTemp);
        if (areaTemp < 0) {
            return false;
        }
    }
    return true;
} */

async function getDimension(dimensionId) {
    var getDimensao = await axios.get('http://arqsi-1151111-1151112.azurewebsites.net/api/Dimension/' + dimensionId);
    return getDimensao;
}

async function getRestrictionProd(restrictionId) {
    var getRestricao = await axios.get('http://arqsi-1151111-1151112.azurewebsites.net/api/Restriction/' + restrictionId);
    return getRestricao;
}

async function getItensProdutos(prodId, subProds) {
    var getItens = await axios.get('http://arqsi-1151111-1151112.azurewebsites.net/api/item/prod/' + prodId);
    var sItens = JSON.stringify(getItens.data);
    var jsonDataItens = JSON.parse(sItens);
    for (var i = 0; i < jsonDataItens.length; i++) {
        var idProd;
        var op;
        idProd = jsonDataItens[i].productId2;
        op = jsonDataItens[i].optional;
        subProds[idProd] = op;
    }
    return subProds;
}