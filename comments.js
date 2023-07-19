// Create web server
// ---------------------

// Import express module
const express = require('express');

// Import express router
const router = express.Router();

// Import path module
const path = require('path');

// Import comment model
const Comment = require('../models/comment');

// Import mongoose
const mongoose = require('mongoose');

// Import session
const session = require('express-session');

// Import connect-mongo
const connectMongo = require('connect-mongo');

// Import moment
const moment = require('moment');

// Import mongoose
const mongoose = require('mongoose');

// Import database
const db = require('../config/database');

// Import auth
const auth = re