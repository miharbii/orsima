const mongoose = require('mongoose');

const stagiaireSchema = mongoose.Schema({
    nom:{type: String, require: true},
    prenom: {type: String, require: true},
    compagnie: {type: String, require: true},
    nomPrenom: {type:String, require: true},
});

module.exports = mongoose.model('Stagiaire',stagiaireSchema);
