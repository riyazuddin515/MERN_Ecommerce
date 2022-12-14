const Product = require('../models/productModel')

// Create Product -- Admin
exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        product
    })
}

// Delete Product -- Admin
exports.deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found."
        })
    }
    await product.remove()
    return res.status(200).json({
        success: true,
        message: "Product deleted successfully"
    })
}

exports.getAllProducts = async (req, res, next) => {
    const products = await Product.find()
    res.status(200).json({
        success: true,
        products
    })
}

exports.getProductDetails = async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found."
        })
    }
    return res.status(200).json({
        success: true,
        product
    })
}

exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id)
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found."
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidator: true,
        useFindAndModify: false
    })
    return res.status(200).json({
        success: true,
        product
    })
}