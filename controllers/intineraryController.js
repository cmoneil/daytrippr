const db = require("../models");



module.exports = {
  findAll: function(req, res) {
    db.Itinerary
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Itinerary
      .find({oauthID: req.params.oauthID})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
      const itinerary ={
        id: req.body.id,
        name: req.body.name,
        url: req.body.url,
        oauthID: req.body.oauthID,
        lat: req.body.lat,
        lng: req.body.lng
      }
      db.Itinerary
      .create(itinerary)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Itinerary
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Itinerary
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
