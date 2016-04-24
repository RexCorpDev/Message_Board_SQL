'use strict';


$(function () {


  // $.get('/api/showForum').done(function(data) {
  //   var users = JSON.parse(data)});

  $('button#btn.sumit-contact').click(postNewMessage);
  $('button#postModal').click(postMessage);
  $('button#signUpModal').click(getMath.power);
  $('button#sAnalyzer').click(getSentence);
  $('button#calculateAge').click(getAge);


});

  $('')
  $('.panel > h4.text-muted').
