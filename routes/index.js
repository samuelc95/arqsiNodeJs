const express = require('express');
const encomendaController =require('../controllers/encomendaController');
const itemController =require('../controllers/itemProdutoController');
const router = express.Router();

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
router.route('/encomenda')

  // create a encomenda (accessed at POST http://localhost:3000/api/encomenda)
  .post(encomendaController.post_encomenda,cors(corsOptionsDelegate))

  // get all the encomenda (accessed at GET http://localhost:3000/api/encomenda)
  .get(encomendaController.get_encomendas,cors(corsOptionsDelegate));


// on routes that end in /encomenda/:encomenda_id
router.route('/encomenda/:idEnc', cors(corsOptionsDelegate))
  .get(encomendaController.get_encomendaById)

  // edit a encomenda (accessed at PUT http://localhost:3000/api/encomenda)
  .put(encomendaController.put_encomenda,cors(corsOptionsDelegate))

  .delete(encomendaController.delete_encomenda,cors(corsOpcorsOptionsDelegatetions));
  
 router.route('/produtos')
  .get(encomendaController.getProdutos,cors(corsOptionsDelegate)); 

  router.route('/encomenda/:idEnc/Itens')
  .get(encomendaController.getItensEncomenda,cors(corsOptionsDelegate));

  router.route('/encomenda/:idEnc/Itens/:idItem',cors(corsOptionsDelegate))
  .get(itemController.getItemId)
  ;
  router.route('/ItemDeProduto/',cors(corsOptionsDelegate))
  .post(itemController.postItemProduto)

  .get(itemController.get_itens)
  ;
  router.route('/ItemDeProduto/:idItem',cors(corsOptionsDelegate))
  .get(itemController.getItemId,cors(corsOptionsDelegate))
  .put(itemController.putItem,cors(corsOptionsDelegate))
  .delete(itemController.delete_item,cors(corsOptionsDelegate))
  ;

module.exports = router;