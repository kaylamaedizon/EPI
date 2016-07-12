Router.configure({
  layoutTemplate:'main',
});

Router.route('/', {
  name: 'login',
  template: 'login'
});

Router.route('canvasSheet',{
  name: 'canvasSheet',
  template: 'canvasSheet'
});

// Router.route('/login',{
//   name:'login',
//   template: 'login'
// });

Router.route('home');
