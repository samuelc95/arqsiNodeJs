const express = require('express');
const encomendaController =require('../controllers/encomendaController');
const router = express.Router();

router.route('/encomenda')

  // create a encomenda (accessed at POST http://localhost:3000/api/encomenda)
  .post(encomendaController.post_encomendas)


  // get all the encomenda (accessed at GET http://localhost:3000/api/encomenda)
  .get(encomendaController.get_encomendas);


// on routes that end in /encomenda/:encomenda_id
// router.route('/encomenda/:encId')

router.use('/api', router);
module.exports = router;