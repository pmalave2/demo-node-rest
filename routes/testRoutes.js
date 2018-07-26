'use strict';
module.exports = function(app) {
  var testList = require('../controllers/testController');

  // todoList Routes
  app.route('/exercises')
    .get(testList.read)
    .post(testList.create);


  app.route('/exercises/:id')
    .get(testList.find)
    .put(testList.update)
    .delete(testList.delete)
    .patch(testList.update);
};