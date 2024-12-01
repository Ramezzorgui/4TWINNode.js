const Book = require('../model/book'); 

exports.createBook = async (req, res) => {
    try {
        const { Title,Author,publicationYear,Genre,Available } = req.body;
        const newBook = new Book({ Title,Author,publicationYear,Genre,Available });
        await newBook.save();
        res.status(201).json({ message: 'Book créé avec succès', book: newBook });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création du Book', details: error.message });
    }
};

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des books', details: error.message });
    }
};


exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'Book non trouvé' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de Book', details: error.message });
    }
};


exports.updateBook = async (req, res) => {
    try {
        const { Title,Author,publicationYear,Genre,Available} = req.body;
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            { Title,Author,publicationYear,Genre,Available },
            { new: true } 
        );
        if (!book) {
            return res.status(404).json({ error: 'Book non trouvé' });
        }
        res.status(200).json({ message: 'Book mis à jour avec succès', book });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour de Book', details: error.message });
    }
};


exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'Book non trouvé' });
        }
        res.status(200).json({ message: 'Book supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression de Book', details: error.message });
    }
};



