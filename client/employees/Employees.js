Template.AddEmployee.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('employees');
	});
});