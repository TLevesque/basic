// JS BODY IMPORTS UI

import {Template} from 'meteor/templating';

import Likes from '../api/likes.js';

import './body.html';

Template.body.helpers({
  likes() {
    return Likes.find({});
  }
});

Template.body.events({
  'click .test'(event) {
    console.log('hello');
  }
});

// Template.addLike.events({
//   'click.btn': function (event) {
//     event.preventDefault();
//     var name = $('#name').val();
//     // var likeUrl = $('#likeUrl').val();
//
//     newLike = Likes.insert({ name: name, createdAt: Date.now() },
//     function (error, result) {
//       if (result) {
//         console.log(result);
//       }
//     });
//   }
// });
