'use strict';

var express = require('express');
var router = express.Router();

var Users = require('../models/users');

//  POST ~ 'CREATE'  /api/forum
router.post('/', (req, res) => {
  Users.create(req.body, (err, data) => {
    if(err) return res.status(400).send(err);
    console.log(data)
    res.send(data);
  });
});

//  'GET' /api/forum
router.get('/', (req, res) => {
  console.log('life');

  // let callback = (err, messages) => {
  //   if(err) return res.status(400).send(err);
  //   // res.render('mainForum', messages);
  //   res.send(messages);
  // }

  Users.findAll((err, messages) => {
    if(err) return res.status(400).send(err);
    console.log(messages);
    res.render('forum', { data: messages });
  }); // Callback -> err, messages
});


// DELETE  /api/forum
router.delete('/', (req, res) => {
  Users.deleteMessage(req.body.id, err => {
    if(err) return res.status(400).send(err);
    res.send(req.body);
  });
});

router.put('/', (req, res) => {
  Users.editMessage(req.body, err => {
    if(err) return res.status(400).send(err);
    res.send(req.body).render('forum', req.body);
  });
});


// // EDIT
// router.put('/', (req, res) => {
//   Messages.edit(req.body, err) => {
//     if(err) return res.status(400).send(err);
//     res.send(req.body);
//   })
// })

module.exports = router;
