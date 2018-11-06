const Encomenda = require('../models/encomenda');
const request = require('request');


// router.post('/register', async(req, res) => {
//     console.log("Entrou register");
//     try{
//         let encomenda = new Encomenda({
//             idEnc: req.body.idEnc,

//         });
//         encomenda.save(function (err, data){
//         if (err) {
//             return res.status(412).send({
//                 success: false
//             });
//         }
//         return res.send({
//             success: true,
//             message: 'Encomenda registada com sucesso!'
//         });
//     })
//     }catch(err){

//         return res.status(400).send({
//             error : 'Erro criar encomenda' 
//         });

//     }
//     console.log("saiu try");
// });

// router.get('/', function (req, res) {
//     Encomenda.find(function (err, encomendas) {
//         if (err)
//             res.send(err);

//         res.json(encomendas);
//     });
// })

    exports.post_encomendas = function (req, res) {

        try {
            var encomenda = new Encomenda({
                idProdPrincipal: req.body.idProdPrincipal,
                medidas: req.body.medidas,
                produtos: req.body.produtos,

            });
            encomenda.save(function (err, data) {
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

        }
    };

    exports.get_encomendas = function (req, res) {
        console.log("entrou get");
        Encomenda.find(function (err, encomenda) {
            if (err)
                res.send(err);

            res.json(encomenda);
        });

    };
    // get the encomenda with that id (accessed at GET http://localhost:3000/api/encomenda/:encomenda_id)

    exports.getEncomendaById = function (req, res) {
            console.log("entrou get id");
            Encomenda.findById(req.params.idEnc, function(err, encomenda) {
                if (err)
                    res.send(err);
        
                res.json(encomenda);
            });
        }; 
//http://localhost:5000/api/produtos
exports.getProdutos = function (req, res) {
    const axios = require('axios');
    axios
  .get('http://arqsi-1151111-1151112.azurewebsites.net/api/produtos')
  .then(response => {
    var s = JSON.stringify(response.data)
    var jsonData = JSON.parse(s);
        for (var i = 0; i < jsonData.length; i++) { 
            console.log(jsonData[i].productId);
        }
  }).catch(error => {
    console.log(error);
  }); 
};   









