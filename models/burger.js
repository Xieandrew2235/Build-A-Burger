// Requiring the data from our ORM
var orm = require('../config/orm.js');

//Creating a  burger object
var burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res);
        });
    },

    // Create insert function
    // Cols and vals are an array, while objColVals is an object specifying columns as object keys
    insertOne: function (cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function (res) {
            cb(res);
        });
    },
    // Create update function
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;