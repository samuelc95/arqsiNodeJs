const express = require('express');
const encomendaController =require('../controllers/encomendaController');
const itemController =require('../controllers/itemProdutoController');
const router = express.Router();

router.route('/encomenda')

  // create a encomenda (accessed at POST http://localhost:3000/api/encomenda)
  .post(encomendaController.post_encomenda)

  // get all the encomenda (accessed at GET http://localhost:3000/api/encomenda)
  .get(encomendaController.get_encomendas);


// on routes that end in /encomenda/:encomenda_id
router.route('/encomenda/:idEnc')
  .get(encomendaController.get_encomendaById)

  // edit a encomenda (accessed at PUT http://localhost:3000/api/encomenda)
  .put(encomendaController.put_encomenda)

  .delete(encomendaController.delete_encomenda);
  
 router.route('/produtos')
  .get(encomendaController.getProdutos); 

  router.route('/encomenda/:idEnc/Itens')
  .get(encomendaController.getItensEncomenda);

  router.route('/encomenda/:idEnc/Itens/:idItem')
  .get(itemController.getItemId)
  ;
  router.route('/ItemDeProduto/')
  .post(itemController.postItemProduto)

  .get(itemController.get_itens)
  ;
  router.route('/ItemDeProduto/:idItem')
  .get(itemController.getItemId)
  .put(itemController.putItem)
  .delete(itemController.delete_item)
  ;

module.exports = router;