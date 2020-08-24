const mongoose = require('mongoose');

const formateurSchema = mongoose.Schema({
    nom:{type: String, require: true},
    prenom: {type: String, require: true},
    typeInterne: {type: Boolean, require: true},
    nomPrenom: {type:String, require: true},
});

module.exports = mongoose.model('Formateur',formateurSchema);
