'use strict';

module.exports = function(app) {

  var teachers_ctrl = require('../../app/controllers/teachers.server.controller');

  app.route('/teachers')
    .get(teachers_ctrl.list)
    .post(teachers_ctrl.create);

  // the categoryId param is added to the params object for the request
  app.route('/teachers/:teacherId')
    .get(teachers_ctrl.read);

};