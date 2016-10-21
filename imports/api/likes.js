// JS LIKES IMPORTS API

import { Mongo } from 'meteor/mongo';

const Likes = new Mongo.Collection('likes');
export default Likes;
