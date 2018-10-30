const express = require('express');

const Encomenda = require('../models/encomenda');

const router = express.Router();

router.post('/register', async(req, res) => {
    console.log("Entrou register");
    try{
        let encomenda = new Encomenda({
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
    console.log("saiu try");
});

router.get('/', function (req, res) {
    Encomenda.find(function (err, encomendas) {
        if (err)
            res.send(err);

        res.json(encomendas);
    });
})

module.exports = app => app.use('/encomenda', router);