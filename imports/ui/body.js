// JS BODY IMPORTS UI

import { Template } from 'meteor/templating';

import LikesVar from '../api/likes.js';
// import '../imports/ui/jquery.js';

import './body.html';

// DISPLAY LIKES LIST
Template.body.helpers({
  likesList: function () {
    return LikesVar.find({}, { sort: { likeDate: -1 } });
  },
});

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

// SEARCH LIKE
// Template.contacts.helpers({
// contacts:function(){
// var filter ={sort: {}};
// var query =Session.get('query');
// filter.sort[Session.get('sortby')]=1;
// return Contacts.find({name: new RegExp(query,'i'),user_id:Meteor.userId()},filter);
//
// }
// });
//
// Template.navbar.events({
//   'keyup .searchbox': function (event) {
//     var query= event.target.value;
//     console.log(query);
    // Session.set('query',query);
//   }
// });


// Template.contact.events({
// "click .toggle-checked": function(){
// var index=checked.indexOf(this._id);
// if(index> -1){
//   checked.splice(index,1);
//                         }
//    else{
//    checked.push(this._id);
//    }
//
