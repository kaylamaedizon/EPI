if(Meteor.isClient){
	Accounts.onLogin(function(){
		FlowRouter.go('project-list');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}

FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action(){
		if(Meteor.userId()){
			FlowRouter.go('project-list');
		}
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/project-list', {
	name: 'project-list',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Projects'});
	}
});

FlowRouter.route('/project/:id', {
	name: 'project',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'ProjectSingle'});
	}
});

FlowRouter.route('/menu', {
	name: 'menu',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Menu'});
	}
});

FlowRouter.route('/shopping-list', {
	name: 'shopping-list',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
	}
});

FlowRouter.route('/add-employee', {
	name: 'add-employee',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'AddEmployee'});
	}
});
