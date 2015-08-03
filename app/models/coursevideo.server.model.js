'use strict';

var mongoose = require('mongoose');

var CoursevideoSchema = new mongoose.Schema({
  course_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  video_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }],
  video_sequence_id: Number
});

mongoose.model('Coursevideo', CoursevideoSchema);
