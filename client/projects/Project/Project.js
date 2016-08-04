Template.Project.onCreated(function(){
	this.editMode = new ReactiveVar(false);
	//this.editMode = new ReactiveVar();
	//this.editMode.set(false);
});

Template.Project.helpers({
	updateProjectId: function(){
		return this._id;
	},
	editMode: function(){
		return Template.instance().editMode.get();
	}
});

Template.Project.events({
	'click .toggle-menu': function(){
		Meteor.call('toggleAwardedItem', this._id, this.awarded);
	},
	'click .fa-trash' : function(){
		Meteor.call('deleteProject', this._id);
	},
	'click .fa-pencil' : function(event, template){
		//Session.set('editMode', !Session.get('editMode'));
		template.editMode.set(!template.editMode.get());
	}
});