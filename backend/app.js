const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const stagiaire = require('./models/stagiare');
const Stagiaire = require('./models/stagiare');
const Formateur = require('./models/formateur');
const { db } = require('./models/stagiare');
const formateur = require('./models/formateur');
const Reservation = require('./models/reservation');
const reservation = require('./models/reservation');

// const { collection } = require('./models/stagiare');




mongoose.connect('mongodb+srv://ibrahim:Bresil14@cluster0.p4oen.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());


// pour ajouter un stagiaire 
app.post('/api/tousStagiare', (req, res, next) => {
  const stagiaire = new Stagiaire ({
    ...req.body
  });
  stagiaire.save().then(() => res.status(201).json({message: 'stagiaire enregistre!'}))
  .catch( error => res.status(400).json({error:error}));
});
//  pour formateur ajout 
app.post('/api/tousFormateur', (req, res, next) => {
  const formateur = new Formateur ({
    ...req.body
  });
  formateur.save().then(() => res.status(201).json({message: 'formateur enregistre!'}))
  .catch( error => res.status(400).json({error:error}));
});
// 
app.post('/api/reservation', (req, res, next) => {
  const reservation = new Reservation ({
    ...req.body
  });
  reservation.save().then(() => res.status(201).json({message: 'reservation enregistre!'}))
  .catch( error => res.status(400).json({error:error}));
});
// app.delete('/api/supprimerStagiare/:nomStagiaire', (req, res, next) => {
//   Stagiaire.deleteOne({nom: req.params.nomStagiaire})
//     .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
//     .catch(error => res.status(400).json({ error }));
// });

app.delete('/api/supprimerStagiare/:nomPrenomStagiaire', (req, res, next) => {
    Stagiaire.deleteOne({nomPrenom: req.params.nomPrenomStagiaire})
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  });
app.delete('/api/supprimerFormateur/:nomPrenomFormateur', (req, res, next) => {
  Formateur.deleteOne({nomPrenom: req.params.nomPrenomFormateur})
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
});
app.delete('/api/supprimerStagiare', (req, res,next) => {
  stagiaire.remove({nom: ""})
  .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
});

app.get('/api/stuff/:nomPrenomStagiaire',( req,res,next) => {
  stagiaire.findOne({ nomPrenom: req.params.nomPrenomStagiaire})
  .then(stagiaire => res.status(200).json(stagiaire))
  .catch(error => res.status(404).json({error }));
});
//  essai pour modifier
app.put('/api/stuff/:nomPrenomStagiaire', (req, res, next) => {
  stagiaire.findOne({ nomPrenom: req.params.nomPrenomStagiaire})
  .updateOne({ nomPrenom: req.params.nomPrenomStagiaire }, { ...req.body})
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
});

app.put('/api/modifierFormateur/:nomPrenomFormateur', (req, res, next) => {
  formateur.findOne({ nomPrenom: req.params.nomPrenomFormateur})
  .updateOne({ nomPrenom: req.params.nomPrenomFormateur }, { ...req.body})
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
});
//  pour formateur
app.get('/api/unFormateur/:nomPrenomFormateur',( req,res,next) => {
  Formateur.findOne({ nomPrenom: req.params.nomPrenomFormateur})
  .then(stagiaire => res.status(200).json(stagiaire))
  .catch(error => res.status(404).json({error }));
});

app.get('/api/tousStagiare', (req, res, next) => {
  Stagiaire.find()
  .then(stagiaire => res.status(200).json(stagiaire))
  .catch(error => res.status(400).json({error}));
  });

  // hehehehehehehehehehehe
  app.get('/api/reservation', (req, res, next) => {
    Reservation.find()
    .then(reservation => res.status(200).json(reservation))
    .catch(error => res.status(400).json({error}));
    });
app.get('/api/tousFormateurInterne', (req, res, next) => {
  Formateur.find({typeInterne : true})
  .then(formateur => res.status(200).json(formateur))
  .catch(error => res.status(400).json({error}));
  });

app.get('/api/tousFormateurExterne', (req, res, next) => {
  Formateur.find({typeInterne : false})
  .then(formateur => res.status(200).json(formateur))
  .catch(error => res.status(400).json({error}));
  });
  
module.exports = app;