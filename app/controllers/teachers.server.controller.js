'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  errorHandler = require('./errors.server.controller'),
  Teacher = mongoose.model('Teacher'),
  _ = require('lodash');

/**
 * Create a Teacher
 */
exports.create = function(req, res) {

  console.log('\nSERVER: Inside teachers.server.ctrl.create()\n');
  console.log('\nSERVER received request: ' + req.body + ' \n');

  var teacher = new Teacher(req.body);

  teacher.save(function(err){


    // INITIAL DATABASE SEED HACK
    // Here we create a course and attach videos to that course where each video also has atleast one question.
    var seed_course = new Course({ title: 'Algebra I',
      description: 'Beginner level',
      subject: 'Mathematics',
      properties_list: 'Math,Algebra',
      teacher_id: teacher.id });
    seed_course.save();

    if (err){
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      console.log('Teacher successfully created!!!' + teacher + '!!');
      res.status(201).json(teacher);
    }

  });

};

/**
 * Show the current Teacher
 */
exports.read = function(req, res) {

  console.log('\nSERVER: Inside teachers.server.ctrl.read()\n');

  Teacher.findById(req.params.teacherId).exec(function(err, teacher) {
    if (err) {
      return res.status(400).send({
       message: errorHandler.getErrorMessage(err)
      });
    } else {
      if (!teacher) {
        return res.status(404).send({
            message: 'Teacher not found'
        });
      }
      res.json(teacher);
    }
  });
};

/**
 * Update a Teacher
 */
exports.update = function(req, res) {

};

/**
 * Delete an Teacher
 */
exports.delete = function(req, res) {

};

/**
 * List of Teachers
 */
exports.list = function(req, res) {

  console.log('\nSERVER: Inside teachers.server.ctrl.find()\n');

  Teacher.find({}, {'_id': 0, 'first_name' : 1, 'last_name': 1}).exec(function(err, teachers){
    if(err){
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      console.log('Sending back teacher list: ' + teachers + ', ');
      res.json({teacher_list: teachers});
    }
  });

};