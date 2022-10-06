const express = require('express')
const { getAllProducts, createProduct, deleteProduct, getProductDetails, updateProduct } = require('../controller/ProductController')
const router = express.Router()

router.route('/product/new').post(createProduct)
router.route('/products').get(getAllProducts)
router.route('/product/:id').delete(deleteProduct).get(getProductDetails).put(updateProduct)

module.exports = router