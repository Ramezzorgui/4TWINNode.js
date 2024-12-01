const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController');


router.post('/productcreate', ProductController.createProduct);

router.get('/produits', ProductController.getProducts);

router.get('/produits/:id', ProductController.getProductById);

router.put('/produits/:id', ProductController.updateProduct);

router.delete('/produits/:id', ProductController.deleteProduct);




module.exports = router;