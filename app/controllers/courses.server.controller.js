'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  errorHandler = require('./errors.server.controller'),
  Course = mongoose.model('Course'),
  _ = require('lodash');

/**
 * Create a Course
 */
exports.create = function(req, res) {

};

/**
 * Show the current Course
 */
exports.read = function(req, res) {

};

/**
 * Update a Course
 */
exports.update = function(req, res) {

};

/**
 * Delete an Course
 */
exports.delete = function(req, res) {

};

/**
 * List of Courses
 */
exports.list = function(req, res) {

  console.log('\nSERVER: Inside courses.server.ctrl.find()\n');

  Course.find({}, {'_id': 0, 'title': 1, 'description': 1, 'subject': 1, 'properties_list': 1}).exec(function(err, courses){
    if(err){
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      console.log('Sending back course list: ' + courses + ', ');
      res.json({course_list: courses});
    }
  });

};