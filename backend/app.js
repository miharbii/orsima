const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const stagiaire = require('./models/stagiare');
const Stagiaire = require('./models/stagiare');
const { db } = require('./models/stagiare');
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

app.get('/api/tousStagiare', (req, res, next) => {
  Stagiaire.find()
  .then(stagiaire => res.status(200).json(stagiaire))
  .catch(error => res.status(400).json({error}));
  });

module.exports = app;