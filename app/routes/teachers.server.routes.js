'use strict';

module.exports = function(app) {

  var teachers_ctrl = require('../../app/controllers/teachers.server.controller');

  app.route('/teachers')
    .get(teachers_ctrl.list)
    .post(teachers_ctrl.create);

};