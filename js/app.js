angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

  .state('landing', {
   url: '/landing',
   templateUrl: 'templates/landing.html'

   }
 )


 .state('login', {
 url: '/login',

 templateUrl: 'templates/login.html'

})

  .state('app.home1', {
  url: '/home1',
  views: {
    'menuContent': {
      templateUrl: 'templates/home1.html',


    }
  }
})




.state('app.announcement', {
url: '/announcement',
views: {
  'menuContent': {
    templateUrl: 'templates/announcement.html',

  }
}
})


.state('app.record', {
url: '/record',
views: {
  'menuContent': {
    templateUrl: 'templates/record.html',

  }
}
})

.state('app.medical', {
url: '/medical',
views: {
  'menuContent': {
    templateUrl: 'templates/medical.html',

  }
}
})

.state('app.dental', {
url: '/dental',
views: {
  'menuContent': {
    templateUrl: 'templates/dental.html',

  }
}
})

.state('app.ehealth', {
url: '/ehealth',
views: {
  'menuContent': {
    templateUrl: 'templates/ehealth.html',

  }
}
})

.state('app.availmedicine', {
url: '/availmedicine',
views: {
  'menuContent': {
    templateUrl: 'templates/availmedicine.html',

  }
}
})


  $urlRouterProvider.otherwise('/landing');
});
