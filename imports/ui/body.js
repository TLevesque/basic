// JS BODY IMPORTS UI

import { Template } from 'meteor/templating';

import LikesVar from '../api/likes.js';
// import '../imports/ui/jquery.js';

import './body.html';

Template.body.helpers({
  likesList: function () {
    return LikesVar.find({}, { sort: { likeDate: -1 } });
  },
});

Template.body.events({
  'submit .likeForm': function (event) {
    const likeName = event.target.likeName.value;
    const likeUrl = event.target.likeUrl.value;

    LikesVar.insert({
      likeName: likeName,
      likeUrl: likeUrl,
      likeDate: new Date(),
    });
    event.target.likeName.value = '';
    event.target.likeUrl.value = '';

    return false;
  },
});

Template.likeTemplate.events({
  'click .deleteLike'() {
    LikesVar.remove(this._id);
  },
});

Template.likeTemplate.events({
  'click .modifyLike'() {
    LikesVar.update(this._id);
  },
});
