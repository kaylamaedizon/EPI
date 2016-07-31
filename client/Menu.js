Template.Menu.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('projects');
	});
});

Template.Menu.helpers({
	projects: ()=> {
		return Projects.find({awarded: true});
	}
});