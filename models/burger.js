var orm = require('../config/orm.js');

//Create the burger object
var burger = {
	selectAll: function (cb) {
		orm.selectAll('burgers', function (res){
			cb(res);
		});
	},
	
	// Create insert function

    // Create update function
}

module.exports = burger;