const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const Product = require('../Models/productModel');

// Create a new product
exports.createProduct = catchAsyncErrors(async (req, res ,next) => {
 
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, data: product });
  });

// Get all products
exports.getProducts = catchAsyncErrors(async (req, res,next) => {
 
    const products = await Product.find();
    res.status(200).json({ success: true, data: products });
  } )


// Get a single product by ID
exports.getProductById =catchAsyncErrors( async (req, res,next) => {
  
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }
    res.status(200).json({ success: true, data: product });
  })

// Update a product by ID
exports.updateProduct = catchAsyncErrors(async (req, res,next) => {
 
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }
    res.status(200).json({ success: true, data: product });
  } )

// Delete a product by ID
exports.deleteProduct = catchAsyncErrors(async (req, res,next) => {
 
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } )
module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
