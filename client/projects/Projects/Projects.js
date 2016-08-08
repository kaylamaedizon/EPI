Template.Projects.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('projects');
	});
});

Template.Projects.helpers({
	projects: ()=> {
		return Projects.find({});
	}
});

Template.Projects.events({
	'click .new-project-trigger' : function(event) {
		$('#new-project').openModal();
	}
});
