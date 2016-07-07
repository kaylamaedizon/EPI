Router.route('/', function () {
  this.render();
});

AccountList = new Mongo.Collection('account');

AccountList.insert({
  username: "shen",
  password: "shenshen"
});
