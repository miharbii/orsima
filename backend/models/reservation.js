const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
    date:{type: String, require: true},
    heureDebut: {type: String, require: true},
    heureFin: {type: String, require: true},
    typeFormateur: {type:String, require: true},
    nomFormateur: {type:String, require: true},
    supportDeCours:  {type:String, require: true},
    nomDesStagiaires: [{type: String, require: true}],
    pauseDejeuner: { type: String, require: true},


});

module.exports = mongoose.model('Reservation',reservationSchema);
