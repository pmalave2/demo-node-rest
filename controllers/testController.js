'use strict';
var mongoose = require('mongoose'),
Exercise = mongoose.model('Exercise');

exports.read = function(req, res) {
  Exercise.find({}, function(err, exercise) {
    if (err)
      res.send(err);
    res.json(exercise);
  });
};

exports.create = function(req, res) {
  var newE = new Exercise(req.body);
  newE.save(function(err, exercise) {
    if (err)
      res.send(err);
    res.json(exercise);
  });
};

exports.find = function(req, res) {
  Exercise.findById(req.params.id, function(err, exercise) {
    if (err)
      res.send(err);
    res.json(exercise);
  });
};

exports.update = function(req, res) {
  Exercise.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, exercise) {
    if (err)
      res.send(err);
    res.json(exercise);
  });
};

exports.delete = function(req, res) {
  Exercise.remove({
    _id: req.params.id
  }, function(err, exercise) {
    if (err)
      res.send(err);
    res.json({ message: 'Exercise successfully deleted' });
  });
};