const Product = require('../server/models/product.js');

// Get all Products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Fetching products failed' });
  }
};

// Get a Product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Fetching product failed' });
  }
};

// Add a Product
exports.addProduct = async (req, res) => {
    try {
      const product = new Product(req.body);
      const savedProduct = await product.save();
      res.status(200).json(savedProduct);
    } catch (error) {
      res.status(400).json({ error: 'Product creation failed' });
    }
  };

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Updating product failed' });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndRemove(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Deleting product failed' });
  }
};

// Delete all Products
exports.deleteAllProducts = async (req, res) => {
    try {
        await Product.deleteMany({});
        res.json({ message: 'All products deleted'});
    } catch (error) {
        res.status(500).json({ error: 'Deleting all products failed'});
    }
};
// Find all Products which name contains search query
exports.findProductsByName = async (req, res) => {
    const searchQuery = req.query.name; 
    try {
      const products = await Product.find({
        name: { $regex: new RegExp(searchQuery, 'i') },
      });
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Finding products by name failed' });
    }
  };
  
