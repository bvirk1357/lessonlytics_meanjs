'use strict';

var mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  subject: String,
  properties_list: String,
  teacher_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

mongoose.model('Course', CourseSchema);
