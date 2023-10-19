
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const productController = require('./controllers/productController');

app.use(express.json());
app.use(cors());

// Find all products with specific search query
app.get('/api/products/search', productController.findProductsByName);

// Get all Products
app.get('/api/products', productController.getAllProducts);

// Get Product by id
app.get('/api/products/:id', productController.getProductById);

// Add new Product
app.post('/api/products', productController.addProduct);

// Update Product by id
app.put('/api/products/:id', productController.updateProduct);

// Delete a product by ID
app.delete('/api/products/:id', productController.deleteProduct);

// Delete all Products
app.delete('/api/products', productController.deleteAllProducts);




mongoose.connect('mongodb+srv://tommyz99:xfiuP9zDlsRWjREp@cluster0.tdlx4x9.mongodb.net/DressStore?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the MongoDB database.');
});

app.get('/', (req, res) => {
  res.send('Welcome to the DressStore application.');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
