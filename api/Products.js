import express from 'express';
import { Product } from '../models/Product.js';

const router = express.Router();

// Create a new product
router.post('/products', (req, res) => {
  const newProduct = new Product(req.body);
  newProduct
    .save()
    .then((product) => res.json(product))
    .catch((err) => res.status(500).json({ error: err }));
});

// Get all products
router.get('/products', (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(500).json({ error: err }));
});

// Get a single product by id
router.get('/products/:id', (req, res) => {
  Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.status(500).json({ error: err }));
});

// Update a product by id
router.put('/products/:id', (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.status(204).send())
    .catch((err) => res.status(500).json({ error: err }));
});

// Delete a product by id
router.delete('/products/:id', (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).send())
    .catch((err) => res.status(500).json({ error: err }));
});

export default router;