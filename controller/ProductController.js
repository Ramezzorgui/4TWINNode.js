const Product = require('../model/Product'); 

exports.createProduct = async (req, res) => {
    try {
        const { Name, Price, Category } = req.body;
        const newProduct = new Product({ Name, Price, Category });
        await newProduct.save();
        res.status(201).json({ message: 'Produit créé avec succès', product: newProduct });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création de produit', details: error.message });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des produits', details: error.message });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Produit non trouvé' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de produit', details: error.message });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { Name, Price, Category} = req.body;
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { Name, Price, Category },
            { new: true } 
        );
        if (!product) {
            return res.status(404).json({ error: 'Produit non trouvé' });
        }
        res.status(200).json({ message: 'Produit mis à jour avec succès', user });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour de Produit', details: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Produit non trouvé' });
        }
        res.status(200).json({ message: 'Produit supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression de Produit', details: error.message });
    }
};