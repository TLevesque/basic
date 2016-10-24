// JS BODY IMPORTS UI

import { Template } from 'meteor/templating';

import LikesVar from '../api/likes.js';

import './body.html';

Template.body.helpers({
  likesList: function () {
    return LikesVar.find();
  }
});

Template.body.events({
  'submit .likeForm': function (event) {
    var likeName = event.target.likeName.value;
    var likeUrl = event.target.likeUrl.value;

    LikesVar.insert({
      likeName: likeName,
      likeUrl: likeUrl,
      likeDate: new Date()
    });
    event.target.likeName.value = '';
    event.target.likeUrl.value = '';

    return false;
  }
});
