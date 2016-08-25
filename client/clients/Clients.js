Template.AddClient.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('clients');
	});
});