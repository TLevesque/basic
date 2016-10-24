// JS LIKES IMPORTS API

import { Mongo } from 'meteor/mongo';

const LikesVar = new Mongo.Collection('likes');
export default LikesVar;
