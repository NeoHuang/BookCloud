'use strict'
var homeController = require('../controllers/home');
module.exports = function(app){
	app.get('/', homeController.get)
}