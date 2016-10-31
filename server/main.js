// JS SERVER

import { Meteor } from 'meteor/meteor';
import '../imports/api/likes.js';



  Meteor.startup(function () {
    // LikesVar._ensureIndex({
    //   "likeName": "text"
    // });
  });

  // Meteor.publish("search", function(searchValue) {
  //   if (!searchValue) {
  //     return Messages.find({});
  //   }
  //   console.log("Searching for ", searchValue);
  //   var cursor = LikesVar.find(
  //     { $text: {$search: searchValue} },
  //     {
  //       /*
  //        * `fields` is where we can add MongoDB projections. Here we're causing
  //        * each document published to include a property named `score`, which
  //        * contains the document's search rank, a numerical value, with more
  //        * relevant documents having a higher score.
  //        */
  //       fields: {
  //         score: { $meta: "textScore" }
  //       },
  //       /*
  //        * This indicates that we wish the publication to be sorted by the
  //        * `score` property specified in the projection fields above.
  //        */
  //       sort: {
  //         score: { $meta: "textScore" }
  //       }
  //     }
  //   );
  //   return cursor;
  // });

//   Meteor.publish("userData", function () {
//   if (this.userId) {
//     return Meteor.users.find({_id: this.userId},
//                              {fields: {'other': 1, 'things': 1}});
//   } else {
//     this.ready();
//   }
// });
