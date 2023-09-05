// add dependencies here 
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();

// create the dotenv to be read to access the .env file with my information 
//let sequelize run through to allow the handlebars to be read upon each other
// let the server to be read 8800
