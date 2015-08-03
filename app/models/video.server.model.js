'use strict';

var mongoose = require('mongoose');

var VideoSchema = new mongoose.Schema({
  title: String,
  description: String,
  external_url: String,
  internal_resource_path: String
});

mongoose.model('Video', VideoSchema);
