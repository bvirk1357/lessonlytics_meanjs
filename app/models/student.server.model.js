'use strict';

var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  student_id: Number,
  age: Number,
  zipcode: Number,
  email: String,
  password: String
});

mongoose.model('Student', StudentSchema);
