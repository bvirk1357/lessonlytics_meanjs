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

  var teacher = new Teacher(req.body);

  teacher.save(function(err){

    if (err){
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.status(201).json(teacher);
    }

  });

};

/**
 * Show the current Teacher
 */
exports.read = function(req, res) {

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

  Teacher.find().exec(function(err, teachers){
    if(err){
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(teachers);
    }
  });

};