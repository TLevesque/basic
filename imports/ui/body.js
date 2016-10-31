// JS BODY IMPORTS UI

import { Template } from 'meteor/templating';

import LikesVar from '../api/likes.js';

import './body.html';

// LOGIN
Template.LoginModal.events({
  'click.close-login': ()=> {
    Session.set('nav-toggle', '');
  },
});

Template.nav.events({
  'click .login-toggle': () => {
    Session.set('nav-toggle', 'open');
  },

  'click .logout': () => {
    Meteor.logout();
  },
});

// DISPLAY LIKES LIST
Template.body.helpers({
  likesList: function () {
    return LikesVar.find({}, { sort: { likeDate: -1 } });
  },
});

// Template.body.events({
//   'keyup .searchbox': function (event) {
//     console.log("search in progress");
//     var query= event.target.value;
//     console.log(query);
//     sessionStorage.setItem('query',query);
//       // return LikesVar.find({ likeName: new RegExp('^'+query+'$' , 'i')} );
//   },
// });

// TEXT SEARCH ON MOPNGODB:
// Template.search.events({
//   'submit #search': function (e) {
//     e.preventDefault();
//     Session.set('searchValue', $('#searchValue').val());
//   },
// });
//
// Template.search.helpers({
//   messages: function () {
//     Meteor.subscribe('search', Session.get('searchValue'));
//     if (Session.get('searchValue')) {
//       return LikesVar.find({}, { sort: [['score', 'desc']] });
//     } else {
//       return LikesVar.find({});
//     }
//   },
// });

// COUNT NUMBER OF LIKES
// Template.body.helpers({
//   likesNumber: function () {
//     return LikesVar.count({});
//     console.log('hi');
//   },
// });

// ADD NEW LIKE
Template.body.events({
  'submit .newLikeForm': function (event) {
    let newlikeName = event.target.newlikeName.value;
    let newlikeUrl = event.target.newlikeUrl.value;

    LikesVar.insert({
      likeName: newlikeName,
      likeUrl: newlikeUrl,
      likeDate: new Date(),
    });
    event.target.newlikeName.value = '';
    event.target.newlikeUrl.value = '';

    console.log('hello new like');

    return false;
  },
});

// DELETE LIKE
Template.likeTemplate.events({
  'click .deleteLike'() {
    LikesVar.remove(this._id);
  },
});

// UPDATE LIKE : CALL EXISTING LIKE's RECORD IN THE DB
Template.likeTemplate.events({
  'click .editLike': function () {
    var likeEdited = LikesVar.findOne({ '_id': this._id });

    sessionStorage.setItem('likeEditedId', this._id);

    $('input[name="likeEditName"]').val(likeEdited.likeName);
    $('input[name="likeEditUrl"]').val(likeEdited.likeUrl);
  },
});

// UPDATE LIKE : UPDATE LIKE's RECORD IN THE DB (NO DOUBLON)
Template.body.events({
  'submit .likeEditForm': function (event) {
    let likeEditName = event.target.likeEditName.value;
    let likeEditUrl = event.target.likeEditUrl.value;

    var likeEditedId = sessionStorage.getItem('likeEditedId');

    LikesVar.update({ '_id': likeEditedId}, { $set: {
      likeName: likeEditName,
      likeUrl: likeEditUrl,
    },
    });

    event.target.likeEditName.value = '';
    event.target.likeEditUrl.value = '';

    console.log('Like Updated');

    return false;
  },
});
