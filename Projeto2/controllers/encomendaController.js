const Encomenda = require('../models/encomenda');


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
        
        try{
            var encomenda = new Encomenda({
                idEnc: req.body.idEnc,
                
            });
            encomenda.save(function (err, data){
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
        }catch(err){
            
            return res.status(400).send({
                error : 'Erro criar encomenda' 
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


    // get the bear with that id (accessed at GET http://localhost:3000/api/encomenda/:encomenda_id)

/* exports.get_encomendaId = function (req, res) {
        console.log("entrou get id");
        Encomenda.findById(req.params.idEnc, function(err, encomenda) {
            if (err)
                res.send(err);
    
            res.json(encomenda);
        });
    }; */

    };

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    exports.getEncomendaById = function(req, res) {
        Encomenda.findById(req.params.idEnc, function(err, encomenda) {
            if (err)
                res.send(err);
            res.json(encomenda);
        });
    };


