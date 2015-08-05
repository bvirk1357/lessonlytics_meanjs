'use strict';

var mongoose = require('mongoose');

var TeacherSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  username: String,
  teacher_id: Number,
  email: String,
  password: String
});

mongoose.model('Teacher', TeacherSchema);
