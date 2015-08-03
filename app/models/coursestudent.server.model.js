'use strict';

var mongoose = require('mongoose');

var CoursestudentSchema = new mongoose.Schema({
  course_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  student_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  status: String
});

mongoose.model('Coursestudent', CoursestudentSchema);
