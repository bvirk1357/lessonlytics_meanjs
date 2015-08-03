'use strict';
var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
  question: String,
  type: String,
  answer_list: String,
  correct_answer: String,
  difficulty: Number,
  video_id: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }]
});

mongoose.model('Question', QuestionSchema);
