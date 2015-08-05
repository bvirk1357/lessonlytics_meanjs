'use strict';

module.exports = function(app) {
  var courses_ctrl = require('../../app/controllers/courses.server.controller');

  app.route('/courses')
    .get(courses_ctrl.list)
    .post(courses_ctrl.create);

  // the categoryId param is added to the params object for the request
  // app.route('/teachers/:teacherId')
  //   .get(teachers_ctrl.read);
};