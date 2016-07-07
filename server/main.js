import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

});

AccountList = new Mongo.Collection('accounts');

AccountList.insert({
  username: "shen",
  password: "shenshen"
});
