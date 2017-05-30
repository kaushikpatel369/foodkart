	(function(){
		var app = angular.module('starter', ['ngRoute','ionic']);
		
		app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
			$stateProvider.state('add', {
				url: '/add',
				templateUrl: 'templates/add.html',
				controller: 'AdminCtrl'
			});
			
			$stateProvider.state('list', {
				url: '/list',
				templateUrl: 'templates/list.html',
				cache: false,
				controller:'AppCtrl'
			});
			
			$stateProvider.state('addlist', {
				url: '/addlist',
				templateUrl: 'templates/addlist.html',
				cache: false,
				controller: 'addlistCtrl'
			});
			
			$stateProvider.state('edit', {
				url: '/edit/:userId',
				templateUrl: 'templates/edit.html',
				controller: 'EditCtrl'
			});
			
			$stateProvider.state('adduser', {
				url: '/adduser',
				//template: 'Hi',
				cache: false,
				controller: 'ShowPop'
			});
			
			$stateProvider.state('logout', {
				url: '/logout',
				controller: function($scope,$state,$window) {
				$state.go('list'),
				$window.location.reload(true)
			}
			});
			
			$stateProvider.state('myac', {
				url: '/myac',
				templateUrl: 'templates/myaclogin.html',
				cache: false,
				controller:'myacloginCtrl'
			});
			
			$stateProvider.state('registerme', {
				url: '/registerme',
				templateUrl: 'templates/registerme.html',
				cache: false,
				controller:'registermeCtrl'
			});
			
			$stateProvider.state('mycart', {
				url: '/mycart',
				templateUrl: 'templates/mycart.html',
				cache: false,
				controller:'mycartCtrl'
			});
			
			
				
			$urlRouterProvider.otherwise('/list');
		});
		
		
		
		
		
		app.controller('AppCtrl', function($scope, $ionicPopup, $http,$state,$stateParams,$window,$ionicPlatform){
		/*	$http({
				method: "GET",
				url: "http://localhost:8000/contactlists",
				//crossDomain : true,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				}).success(function(data){
				console.log(data);
				//fconsole.log(data);
				$scope.contactlist = data;
				});  */	
			$http.post('http://localhost:8000/lists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
			});
			
			$scope.loadgrocery=function(){
				$http.post('http://localhost:8000/glists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
				});
			};
			$scope.loadfashion=function(){
				$http.post('http://localhost:8000/flists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
				});
			};
			$scope.loadelectronics=function(){
				$http.post('http://localhost:8000/elists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
				});
			};
			
			$scope.loadall=function(){
				$http.post('http://localhost:8000/lists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
				});
			};
			
			$scope.buynow=function(){
				$state.go('myac')
			};
			
			/*..............
			
			$scope.add=function(){
				$state.go('add');
			}
			
			$scope.myac=function(){
				$state.go('myac');
			}
			
			*/
			
			$scope.addcart=function(user){
					console.log(user);
					$http.post('http://localhost:8000/mycart',user).then(function(response){
						console.log(response);
						//$scope.item=response.data;
					});
					
					// Triggered on a button click, or some other target// $scope.showPopup = function() {
					$scope.item = {};
					// An elaborate, custom popup
/*					var myPopup = $ionicPopup.show({
						template: '<label class = "item item-input item-select"><span class = "input-label">{{item.value}}</span></label>'+
								  '<label class = "item item-input item-select"><span class = "input-label">{{item.name}}</span></label>'+
								  '<label class="item item-input item-label"><input type="number" ng-model="item.qty" placeholder="Enter Quantity"></label>'+
								  '<label class="item item-input item-label"><span class = "input-label">{{item.price}}</span></label>',
							
						title: 'Add to Cart',
						//subTitle: '',
						scope: $scope,
						buttons: [
							{ text: 'Cancel',
								onTap: function(e) {
								$state.go('list');
								}
							},
							{
								text: '<b>Save</b>',
								type: 'button-positive',
								onTap: function(e) {
								if (!$scope.contact.value || !$scope.contact.name || !$scope.contact.price || !$scope.contact.desc) {
								//don't allow the user to close unless he enters wifi password
								e.preventDefault();
								} else{
									return $scope.contact;
								}
								}
							}
						]
					});
					
					myPopup.then(function(res) {
						console.log('Tapped!', res);
						if(res){
							$http.post(' http://localhost:8000/contactlists',$scope.contact).then(function(response){
								$scope.contact = "";
								$state.go('addlist');
								//A Alert Popup
								var alertPopup = $ionicPopup.alert({
									title: 'Item Added in Cart',
									template: 'Please Click OK'
								});
								alertPopup.then(function(res) {
									console.log('Thank you for not eating my delicious ice cream cone');
								});
							});
						}
					});
*/
			};
				
			
			
			
		});
		
		
		
		app.controller('addlistCtrl', function($scope, $ionicPopup, $http,$state,$stateParams,$ionicPlatform, AuthService){
			$http({
				method: "GET",
				url: "http://localhost:8000/contactlists",
				//crossDomain : true,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				}).success(function(data){
				console.log(data);
				//fconsole.log(data);
				$scope.contactlist = data;
				});
				
			// A confirm dialog
			
			$scope.delete = function(id) {
				var confirmPopup = $ionicPopup.confirm({
					title: 'Record Will be Delete',
					template: 'Are you sure you want to delete this Record?'
				});
				confirmPopup.then(function(res) {
					if(res) {
						console.log(id);
						//console.log('You are sure');
						$http.delete(' http://localhost:8000/contactlists/'+id).then(function(response){
							$state.transitionTo($state.current, $stateParams,{reload: true});
							//A Alert Popup
							var alertPopup = $ionicPopup.alert({
								title: 'User Deleted Successfully',
								template: 'Please Click OK'
							});
							alertPopup.then(function(res) {
								console.log('Thank you for not eating my delicious ice cream cone');
							});
						})
					} else {
						console.log('You are not sure');
						}
				});
			};
			
			$scope.loadgrocery=function(){
				$http.post('http://localhost:8000/glists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
				});
			};
			$scope.loadfashion=function(){
				$http.post('http://localhost:8000/flists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
				});
			};
			$scope.loadelectronics=function(){
				$http.post('http://localhost:8000/elists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
				});
			};
			
			$scope.loadall=function(){
				$http.post('http://localhost:8000/lists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
				});
			};
			
			$scope.logout = function() {
				AuthService.logout();
				$state.go('list');
			  };
			
			
		});
			
	
		
		
			app.controller('AdminCtrl', function($scope, $ionicPopup, $http,$state,$stateParams,$ionicPlatform, AuthService){
			
			/*	
			
				 LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
							$state.go('addlist');
						}).error(function(data) {
							var alertPopup = $ionicPopup.alert({
								title: 'Login failed!',
								template: 'Please check your credentials!'
							});
						});
			*/
			/*
			$scope.adduser=function(contact){
					if(contact.id == 'admin' && contact.pwd == '1234')
					{
					console.log("Admin login");
					$state.go('addlist');
					}
					else{
					$ionicPopup.alert({
						title:'Wrong Input',
						template:'Re-input'
						});
					}
				}*/
				//login validation
				  $scope.adduser = function(contact) {
					AuthService.login(contact.id, contact.pwd).then(function(authenticated) {
					  $state.go('addlist', {}, {reload: true});
				//	  $scope.setCurrentUsername(contact.username);
					}, function(err) {
					  var alertPopup = $ionicPopup.alert({
						title: 'Login failed!',
						template: 'Please check your credentials!'
					  });
					});
				  };
			});

					
				
				
	
		app.controller('ShowPop', function($scope, $ionicPopup, $http,$state,$stateParams){
			// Triggered on a button click, or some other target// $scope.showPopup = function() {
			$scope.contact = {};
			// An elaborate, custom popup
			var myPopup = $ionicPopup.show({
				template: '<label class = "item item-input item-select"><span class = "input-label">Category</span>'+
						  '<select ng-model="contact.value"><option selected value="Grocery">Grocery</option><option value="Fashion">Fashion</option><option value="Electronics">Electronics</option>'+
							'</select></label><label class="item item-input item-label">'+
				'<input type="text" ng-model="contact.name" placeholder="Enter Name"></label><label class="item item-input item-label">'+
				'<input type="number" ng-model="contact.price" placeholder="Enter Price"></label>'+
				'<label class="item item-input item-label">'+
				'<input type="text" ng-model="contact.desc" placeholder="Enter Description"></label>',
				title: 'Add Item',
				subTitle: 'Please Add Item Details',
				scope: $scope,
				buttons: [
					{ text: 'Cancel',
						onTap: function(e) {
						$state.go('addlist');
						}
					},
					{
						text: '<b>Save</b>',
						type: 'button-positive',
						onTap: function(e) {
						if (!$scope.contact.value || !$scope.contact.name || !$scope.contact.price || !$scope.contact.desc) {
						//don't allow the user to close unless he enters wifi password
						e.preventDefault();
						} else{
							return $scope.contact;
						}
						}
					}
				]
			});
			
			myPopup.then(function(res) {
				console.log('Tapped!', res);
				if(res){
					$http.post(' http://localhost:8000/contactlists',$scope.contact).then(function(response){
						$scope.contact = "";
						$state.go('addlist');
						//A Alert Popup
						var alertPopup = $ionicPopup.alert({
							title: 'User Added Successfully',
							template: 'Please Click OK'
						});
						alertPopup.then(function(res) {
							console.log('Thank you for not eating my delicious ice cream cone');
						});
					});
				}
			});
			//$timeout(function() {
			// myPopup.close(); //close the popup after 3 seconds for some reason
			//}, 3000);
			//};
		});
		
		
		app.controller('AddCtrl', function($scope, $stateParams, $http, $state,$ionicPlatform){
			$scope.adduser = function(contact){
				console.log(contact);
				$http.post(' http://localhost:8000/contactlists',contact).then(function(response){
					$scope.contact = "";
					$state.go('addlist');
				});
			};
		});
		
		
		app.controller('EditCtrl', function($scope, $stateParams, $http, $state,$ionicPopup,$ionicPlatform){
			var id = $stateParams.userId;
			console.log(id);
			$http.get('http://localhost:8000/contactlists/'+id).success(function(response){
				$scope.contact = response;
			});
			$scope.update = function(){
				console.log($scope.contact._id);
				$http.put(' http://localhost:8000/contactlists/' + $scope.contact._id, $scope.contact).success(function(response){
					$state.go('addlist');
					//A Alert Popup
					var alertPopup = $ionicPopup.alert({
						title: 'User Updated Successfully',
						template: 'Please Click OK'
					});
					alertPopup.then(function(res) {
						console.log('Thank you for not eating my delicious ice cream cone');
					});
				});
			};
		});
		
		app.controller('myacloginCtrl', function($scope, $stateParams, $http, $state,$ionicPlatform){
			$scope.sLogin=function(){
				$state.go('registerme');
			};		
			
			$scope.loginuser=function(user){
				console.log(user);
				$http.post('http://localhost:8000/userlogin',user).then(function(response){
					console.log(response);
					console.log(response.data.length);
					if(response.data.length>0)
					{
					function myfun(){
						
						document.getElementById("myform").clearForms();
					}
					$state.go('list');
					}else{
						var alertPopup=$ionicPopup.alert({
							title:'wrong Input',
							//template:'Re-input OK'
						});
						alertPopup.then(function(res){
							console.log('Proper Input ');
						})
					}
				});
			};
		});
		
		app.controller('registermeCtrl', function($scope, $stateParams, $http, $state,$ionicPlatform,$ionicPopup){
			$scope.adduser=function(user){
				console.log(user);
				if(user==undefined || user.name==undefined || user.mobile==undefined || user.pwd==undefined){
						$ionicPopup.alert({
							title:'Fill all fields',
						});
				}else{
						$http.post('http://localhost:8000/registerme',user).then(function(response){
							console.log("You are added");
							var alertPopup=$ionicPopup.alert({
								title:'You added!',
								template:'Now Login with Mobile no & Password... '
							});
							alertPopup.then(function(res){
								console.log('thank u for adding join');
								$state.go('myaclogin');
							});
						});
				}
			};
					
		});
		
		app.controller('mycartCtrl', function($scope, $stateParams, $http, $state,$ionicPlatform,$ionicPopup){
			
			$http.post('http://localhost:8000/mycartshow').then(function(response){
				console.log(response.data);
				$scope.user=response.data;
			});
			
		
		});
		
		
		
		app.run(function($ionicPlatform) {
			$ionicPlatform.ready(function() {
				if(window.cordova && window.cordova.plugins.Keyboard) {
					// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
					// for form inputs)
					cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
					// Don't remove this line unless you know what you are doing. It stops the viewport
					// from snapping when text inputs are focused. Ionic handles this internally for
					// a much nicer keyboard experience.
					cordova.plugins.Keyboard.disableScroll(true);
				}
				if(window.StatusBar) {
					StatusBar.styleDefault();
				}
			});
			
		})
		

		.run(function ($rootScope, $state, AuthService, AUTH_EVENTS) {
		  $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {
		 
			if ('data' in next && 'authorizedRoles' in next.data) {
			  var authorizedRoles = next.data.authorizedRoles;
			  if (!AuthService.isAuthorized(authorizedRoles)) {
				event.preventDefault();
				$state.go($state.current, {}, {reload: true});
				$rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
			  }
			}
		 
			if (!AuthService.isAuthenticated()) {
				console.log('999');
				console.log(next.name);
				
			 if (next.name == 'add') {
				event.preventDefault(list);
				$state.go('addlist');
			  }
				
			 if (next.name !== 'list') {
				event.preventDefault();
				$state.go('list');
			  }
				
			}
		  });
		})
		
		
	}());