const express = require('express');
const encomendaController =require('../controllers/encomendaController');
const itemController =require('../controllers/itemProdutoController');
const router = express.Router();
var cors= require('cors');

var whitelist = ['http://localhost:4200']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}
router.route('/encomenda',cors(corsOptionsDelegate))

  // create a encomenda (accessed at POST http://localhost:3000/api/encomenda)
  .post(encomendaController.post_encomenda)

  // get all the encomenda (accessed at GET http://localhost:3000/api/encomenda)
  .get(encomendaController.get_encomendas);


// on routes that end in /encomenda/:encomenda_id
router.route('/encomenda/:idEnc', cors(corsOptionsDelegate))
  .get(encomendaController.get_encomendaById)

  // edit a encomenda (accessed at PUT http://localhost:3000/api/encomenda)
  .put(encomendaController.put_encomenda)

  .delete(encomendaController.delete_encomenda);
  
 router.route('/produtos',cors(corsOptionsDelegate))
  .get(encomendaController.getProdutos); 

  router.route('/encomenda/:idEnc/Itens',cors(corsOptionsDelegate))
  .get(encomendaController.getItensEncomenda);

  router.route('/encomenda/:idEnc/Itens/:idItem',cors(corsOptionsDelegate))
  .get(itemController.getItemId)
  ;
  router.route('/ItemDeProduto/',cors(corsOptionsDelegate))
  .post(itemController.postItemProduto)

  .get(itemController.get_itens)
  ;
  router.route('/ItemDeProduto/:idItem',cors(corsOptionsDelegate))
  .get(itemController.getItemId)
  .put(itemController.putItem)
  .delete(itemController.delete_item)
  ;

module.exports = router;