angular.module('starter')
 
.service('AuthService', function($q, $http) {
  var LOCAL_TOKEN_KEY = 'yourTokenKey';
  var username = '';
  var isAuthenticated = false;
  var role = '';
  var authToken;
 
  function loadUserCredentials() {
    var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
    if (token) {
      useCredentials(token);
    }
  }
 
  function storeUserCredentials(token) {
    window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
    useCredentials(token);
  }
 
  function useCredentials(token) {
    username = token;
	console.log(username);
    isAuthenticated = true;
    authToken = token;
 
   /* if (username == 'admin') {
      role = USER_ROLES.admin
    }
    if (username == 'user') {
      role = USER_ROLES.public
    }*/
 
    // Set the token as header for your requests!
//    $http.defaults.headers.common['X-Auth-Token'] = token;
  }
 
  function destroyUserCredentials() {
    authToken = undefined;
    username = '';
    isAuthenticated = false;
    $http.defaults.headers.common['X-Auth-Token'] = undefined;
    window.localStorage.removeItem(LOCAL_TOKEN_KEY);
  }
 
 /*
  var login = function(name, pw) {
    return $q(function(resolve, reject) {
      if (name == 'admin' && pw == '1234') {
        // Make a request and receive your auth token from your server
        storeUserCredentials(name + '.yourServerToken');
        resolve('Login success.');
      } else {
        reject('Login Failed.');
      }
	  
    });
  };
  */
  //--------user login------------------------------------
	
  
    var login1 = function(user) {
    return $q(function(resolve, reject) {
	
		 /* if (name == 'admin' && pw == '1234') {
			// Make a request and receive your auth token from your server
			storeUserCredentials(name + '.yourServerToken');
			resolve('Login success.');
		  } else {
			reject('Login Failed.');
		  } */  
		  
			$http.post('/userlogin',user).then(function(response){
					console.log(response);
					console.log(response.data.length);
					if(response.data.length>0)
					{
						//$state.go('list');
						//storeUserCredentials(name + '.yourServerToken');
						storeUserCredentials(user.mobile);
						resolve('Login success.');
					}else{
						reject('Login Failed.');
					}
			});
	  
    });
  };
  
  //--------admin login------------------------------------ 
  
  var login2 = function(contact) {
    return $q(function(resolve, reject) {
	
		 /* if (name == 'admin' && pw == '1234') {
			// Make a request and receive your auth token from your server
			storeUserCredentials(name + '.yourServerToken');
			resolve('Login success.');
		  } else {
			reject('Login Failed.');
		  } */
		  
			$http.post('/adminlogin',contact).then(function(response){
					console.log(response);
					console.log(response.data.length);
					if(response.data.length>0)
					{
						//$state.go('list');
						storeUserCredentials(name);
						resolve('Login success.');
					}else{
						reject('Login Failed.');
					}
			});
    });
  };
  
  //---------
 
  var logout = function() {
    destroyUserCredentials();
  };
 
  var isAuthorized = function(authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (isAuthenticated && authorizedRoles.indexOf(role) !== -1);
  };
 
  loadUserCredentials();
 
  return {
    login1: login1,
	login2: login2,
    logout: logout,
    isAuthorized: isAuthorized,
    isAuthenticated: function() {return isAuthenticated;},
    username: function() {return username;},
    role: function() {return role;}
  };
})

.factory('AuthInterceptor', function ($rootScope, $q, AUTH_EVENTS) {
  return {
    responseError: function (response) {
      $rootScope.$broadcast({
        401: AUTH_EVENTS.notAuthenticated,
        403: AUTH_EVENTS.notAuthorized
      }[response.status], response);
      return $q.reject(response);
    }
  };
})
 
.config(function ($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
})

//---------services for filePicker--------

.service('FilesService', function() {

	var files = [{
		id: 1,
		url: "https://www.filepicker.io/api/file/KIf6LZf4Q9KemVQHntul", 
		filename: "Npm_logo.png", 
		mimetype: "image/png", 
		size: 343, 
	},
	{
		id: 2,
		url: "https://www.filepicker.io/api/file/8RVUaFTkTni7344XdVuo", 
		filename: "filepicker_logo.png", 
		mimetype: "image/png", 
		size: 37913
	}
	];


	return {
		all: function() {
			return files;
		},
		add: function(data){
			console.log('adding... ', data);
			data.id = files[files.length-1].id + 1;
			files.push(data);
		},
		remove: function(chat) {
			files.splice(files.indexOf(chat), 1);
		},
		get: function(fileId) {
			return files.filter(function(item){
				return item.id === fileId;
			})[0];
		}
	};
});


