'use strict';

var db = require('../config/db');
var uuid = require('uuid');
var time = Date.now();
var stmt;

db.run('CREATE TABLE IF NOT EXISTS users (id TEXT, name TEXT, message TEXT, time TEXT, image TEXT)');


exports.findAll = function(cb) {
  db.all('SELECT * FROM users', cb);
  // gets all the users
  // cb = cb
  // messages = [....]
  // err = undefined - Error
  // cb(undefined, [....])
};

exports.create = function(msgs, cb) {
  // todo:  add validation


  db.serialize(function() {

    stmt = db.prepare("INSERT INTO users VALUES (?, ?, ?, ?, ?)");

    var time = Date.now();
    var id = uuid().split('-').join('');
    console.log(id);

    stmt.run( id, msgs.name, msgs.message, time, image);
  });
};

exports.deleteMessage = function(id, cb) {

  db.serialize(function(){

    db.run(`DELETE FROM users WHERE id = "${id}"`);

    // var stmt = db
    // stmt.run (id.id, id.name, id.message, time);
    console.log(`deleted ${id}!`);
    // db.finalize(cb);
  });
};

exports.editMessage = function(newMsg, cb) {
  db.serialize(function(){
    console.log("message: ", newMsg.message);
    console.log("id: ", newMsg.id);

    db.run(`UPDATE users SET message = "${newMsg.message}" WHERE id = "${newMsg.id}"`);

    console.log(`updated to ${newMsg.message}`);
    // db.finalize(cb);
  });
};
