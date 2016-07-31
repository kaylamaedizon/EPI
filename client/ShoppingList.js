Template.ShoppingList.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('projects');
	});
});

Template.ShoppingList.helpers({
	shoppingList: ()=> {
		return Projects.find({awarded: true});
	}
});