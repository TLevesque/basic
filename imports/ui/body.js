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
