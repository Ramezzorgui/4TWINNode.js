const Museum = require('../model/Museum'); 


exports.createMuseum = async (req, res) => {
    try {
        const { Name, Location, Description } = req.body;
        const newMuseum = new Museum({ Name, Location, Description });
        await newMuseum.save();
        res.status(201).json({ message: 'Museum créé avec succès', museum: newMuseum });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création du Museum', details: error.message });
    }
};

exports.getMuseums = async (req, res) => {
    try {
        const museums = await Museum.find();
        res.status(200).json(museums);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de Museum', details: error.message });
    }
};

exports.getMuseumById = async (req, res) => {
    try {
        const museum = await Museum.findById(req.params.id);
        if (!museum) {
            return res.status(404).json({ error: 'Musuem non trouvé' });
        }
        res.status(200).json(museum);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de Musuem', details: error.message });
    }
};

exports.updateMuseum = async (req, res) => {
    try {
        const { Name, Location, Description } = req.body;
        const museum = await Museum.findByIdAndUpdate(
            req.params.id,
            { Name, Location, Description},
            { new: true } 
        );
        if (!museum) {
            return res.status(404).json({ error: 'Museum non trouvé' });
        }
        res.status(200).json({ message: 'Museum mis à jour avec succès', user });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour de Museum', details: error.message });
    }
};

exports.deleteMuseum = async (req, res) => {
    try {
        const museum = await Museum.findByIdAndDelete(req.params.id);
        if (!museum) {
            return res.status(404).json({ error: 'Museum non trouvé' });
        }
        res.status(200).json({ message: 'Museum supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression de Museum', details: error.message });
    }
};