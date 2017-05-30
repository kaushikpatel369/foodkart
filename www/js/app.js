	var finalcustomer={};
	(function(){
		var app = angular.module('starter', ['ngRoute','ionic', 'angular-filepicker']);
		var arr=new Array();
		app.config(function($stateProvider, $urlRouterProvider, $locationProvider, filepickerProvider){
			filepickerProvider.setKey('AT4gHSGo6QFKiBE771LDBz');
			
			$stateProvider.state('add', {
				url: '/add',
				templateUrl: 'templates/add.html',
				controller: 'AdminCtrl'
			});
			
			$stateProvider.state('admindata', {
				url: '/admindata',
				templateUrl: 'templates/admin1.html',
				controller: 'AdminCtrl'
			});
			
			$stateProvider.state('orderinfo', {
				url: '/orderinfo',
				templateUrl: 'templates/orderbook.html',
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
			
			$stateProvider.state('checkout',{
				url: '/checkout',
				templateUrl: 'templates/checkout.html',
				cache: false,
				controller:'checkoutCtrl'
			});
			
			$stateProvider.state('category',{
				url: '/category',
				templateUrl: 'templates/category.html',
				cache: false,
				controller:'AppCtrl'
			});
			
			$stateProvider.state('payment',{
				url:'/payment',
				templateUrl:'templates/payment.html',
				cache:false,
				controller:'checkoutCtrl'
			});
			
			$stateProvider.state('final',{
				url:'/final',
				templateUrl:'templates/final.html',
				cache:false,
				disableHardwareBackButton : true,
				controller:'checkoutCtrl'
			});
			
			$stateProvider.state('allitem',{
				url:'/allitem',
				templateUrl:'templates/allitem.html',
				cache:false,
				controller:'allitemCtrl'
			});
			
			$stateProvider.state('allgrocery',{
				url:'/allgrocery',
				templateUrl:'templates/allgrocery.html',
				cache:false,
				controller:'allgroceryCtrl'
			});
			
			$stateProvider.state('allmanfashion',{
				url:'/allmanfashion',
				templateUrl:'templates/allmanfashion.html',
				cache:false,
				controller:'allmanfashionCtrl'
			});
			
			$stateProvider.state('allelectric',{
				url:'/allelectric',
				templateUrl:'templates/allelectric.html',
				cache:false,
				controller:'allelectricCtrl'
			});
			
			$stateProvider.state('allwomenfashion',{
				url:'/allwomenfashion',
				templateUrl:'templates/allwomenfashion.html',
				cache:false,
				controller:'allwomenfashionCtrl'
			});
			
			$stateProvider.state('allbook',{
				url:'/allbook',
				templateUrl:'templates/allbook.html',
				cache:false,
				controller:'allbookCtrl'
			});
			
			$stateProvider.state('allhome',{
				url:'/allhome',
				templateUrl:'templates/allhome.html',
				cache:false,
				controller:'allhomeCtrl'
			});
			
			$stateProvider.state('alloffers',{
				url:'/alloffers',
				templateUrl:'templates/alloffers.html',
				cache:false,
				controller:'alloffersCtrl'
			});
			
			$stateProvider.state('myorderinfo',{
				url:'/myorderinfo',
				templateUrl:'templates/myorder.html',
				cache:false,
				controller:'myorderCtrl'
			});
			$stateProvider.state('delivered', {
				url: '/delivered',
				templateUrl: 'templates/delivered.html',
				controller: 'AdminCtrl'
			});
				
			$urlRouterProvider.otherwise('/list');
		});
		
		
		app.controller('indexCtrl', function($scope,$state,AuthService){
			$scope.gohome = function() {
			$state.go('list');	
			};
			
			$scope.add = function() {
			$state.go('add');	
			};
			
			$scope.myac = function() {
			$state.go('myac');	
			};
			
			$scope.myorder = function() {
				var user=AuthService.username();
				if(user){
						$state.go('myorderinfo');	
				}else{
					$state.go('myac');
				}
			};
			
		});
		
		
		app.controller('logoutCtrl', function($scope,$state,AuthService){
			$scope.logout = function() {
				AuthService.logout();
				$state.go('list');
			  };
		});
		
			
		
		var keepdata={};
		
		app.controller('AppCtrl', function($scope, $ionicPopup,$timeout, $http,$state,$stateParams,$window,$ionicPlatform){
			var img=new Array();
			img[0]='g1.png';
			img[1]='g3.png';
			img[2]='g4.png';
			img[3]='g5.png';
			$scope.slides=img;
			
			$scope.category=function(){
				$state.go('category');
			};
			
			$http.post('/lists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
			});
			
			$scope.loadgrocery=function(){
				$http.post('/glists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
				});
			};
			$scope.loadfashion=function(){
				$http.post('/flists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
				});
			};
			$scope.loadelectronics=function(){
				$http.post('/elists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
				});
			};
			
			$scope.loadall=function(){
				/*$http.post('/lists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
				});*/
				$state.go('allitem');
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
				
				user.quantity=1;
				//console.log(keepdata);
				console.log(user);
				//keepdata.push(user);
				arr.push(user);
				//console.log(keepdata);
				console.log(arr);
				localStorage["foodcart"] = JSON.stringify(arr);
				      var alertPopup = $ionicPopup.alert({
						 title: 'Added to cart',
					  });

					  alertPopup.then(function(res) {
						 // Custom functionality....
						  $timeout(function() {
						 alertPopup.close(); //close the popup after 3 seconds for some reason
						}, 3000);
					  });
					 
					  
				
/*				window.localStorage.setItem('foodcart', JSON.stringify(user));
				console.log(user);
				console.log(JSON.stringify(user));
				
*/				
			};	
    
 
			
			
		});
		
		app.controller('allitemCtrl', function($scope, $ionicPopup, $http,$state,$stateParams,$window,$ionicPlatform){
			$scope.grocery=function(){
				$state.go('allgrocery');
			}
			$scope.manfashion=function(){
				$state.go('allmanfashion');
			}
			$scope.electric=function(){
				$state.go('allelectric');
			}
			$scope.womenfashion=function(){
				$state.go('allwomenfashion');
			}
			$scope.book=function(){
				$state.go('allbook');
			}
			$scope.home=function(){
				$state.go('allhome');
			}
			$scope.offers=function(){
				$state.go('alloffers');
			}
			
		});
		
		app.controller('allgroceryCtrl', function($scope, $ionicPopup, $http,$state,$stateParams,$window,$ionicPlatform,$ionicActionSheet){
			$http.post('/glists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
			});
			
			   $scope.triggerActionSheet = function() {

					  // Show the action sheet
					  var showActionSheet = $ionicActionSheet.show({
						 buttons: [
							{ text: 'Biscuit' },
							{ text: 'Beverages' },
							{ text: 'Fruit & vegetables' },
							{ text :'Grains'},
							{ text: 'Oil' },
							{ text :'Pulses,Cereals & Nuts'},
							{ text: 'spices'},
							{ text :'Household'},
						 ],
							
						// destructiveText: 'Delete',
						 titleText: 'Filter By',
						 cancelText: 'Cancel',
							
						 cancel: function() {
							// add cancel code...
						 },
							
						 buttonClicked: function(index) {
							if(index === 0) {
							   // add edit 1 code
							   $http.post('/glists_biscuit').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
								
							if(index === 1) {
							   // add edit 2 code
							   $http.post('/glists_beverages').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 2) {
							   // add edit 2 code
							   $http.post('/glists_fruit').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 3) {
							   // add edit 2 code
							   $http.post('/glists_grains').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 4) {
							   // add edit 2 code
							   $http.post('/glists_oil').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 5) {
							   // add edit 2 code
							   $http.post('/glists_pulse').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 6) {
							   // add edit 2 code
							   $http.post('/glists_spices').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 7) {
							   // add edit 2 code
							   $http.post('/glists_household').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							
							return true;
						 },
							
						
					  });
				   };
			
		});
		
		app.controller('allmanfashionCtrl', function($scope, $ionicPopup, $http,$state,$stateParams,$window,$ionicPlatform,$ionicActionSheet){
			$http.post('/flists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
			});
			//--------action sheet
			$scope.triggerActionSheet = function() {

					  // Show the action sheet
					  var showActionSheet = $ionicActionSheet.show({
						 buttons: [
							{ text: 'TShirt' },
							{ text: 'Shirt' },
							{ text: 'Suits & Blazers' },
							{ text :'Trouser'},
							{ text: 'Jeans' },
							{ text :'Shoe'},
							{ text: 'Watch'},
							{ text :'Ethinic Wear'},
							{ text :'Inner Wear'},
							{ text :'Accessories'}
						 ],
							
						// destructiveText: 'Delete',
						 titleText: 'Filter By',
						 cancelText: 'Cancel',
							
						 cancel: function() {
							// add cancel code...
						 },
							
						 buttonClicked: function(index) {
							if(index === 0) {
							   // add edit 1 code
							   $http.post('/flists_tshirt').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}	
							if(index === 1) {
							   // add edit 2 code
							   $http.post('/flists_shirt').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 2) {
							   // add edit 2 code
							   $http.post('/flists_suits').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 3) {
							   // add edit 2 code
							   $http.post('/flists_trouser').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 4) {
							   // add edit 2 code
							   $http.post('/flists_jeans').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 5) {
							   // add edit 2 code
							   $http.post('/flists_shoe').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 6) {
							   // add edit 2 code
							   $http.post('/flists_watch').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 7) {
							   // add edit 2 code
							   $http.post('/flists_ethenic').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 8) {
							   // add edit 2 code
							   $http.post('/flists_inner').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 9) {
							   // add edit 2 code
							   $http.post('/flists_acc').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							return true;
						 },
							
						
					  });
			};
			
			//
			
		});
		
		app.controller('allelectricCtrl', function($scope, $ionicPopup, $http,$state,$stateParams,$window,$ionicPlatform,$ionicActionSheet){
			$http.post('/elists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
			});
			
			//--------action sheet
			$scope.triggerActionSheet = function() {

					  // Show the action sheet
					  var showActionSheet = $ionicActionSheet.show({
						 buttons: [
							{ text: 'TV' },
							{ text: 'Fridge & ACs' },
							{ text: 'Washing machine & Dish washer' },
							{ text :'Sound System'},
							{ text: 'Mobile & Accessories' },
							{ text :'Computer & laptop'},
							{ text: 'Lights'},
							{ text :'Home Applience'},
							{ text :'Calculator'},
						 ],
							
						// destructiveText: 'Delete',
						 titleText: 'Filter By',
						 cancelText: 'Cancel',
							
						 cancel: function() {
							// add cancel code...
						 },
							
						 buttonClicked: function(index) {
							if(index === 0) {
							   // add edit 1 code
							   $http.post('/elists_tv').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}	
							if(index === 1) {
							   // add edit 2 code
							   $http.post('/elists_fridge').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 2) {
							   // add edit 2 code
							   $http.post('/elists_wm').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 3) {
							   // add edit 2 code
							   $http.post('/elists_sound').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 4) {
							   // add edit 2 code
							   $http.post('/elists_mobile').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 5) {
							   // add edit 2 code
							   $http.post('/elists_computer').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 6) {
							   // add edit 2 code
							   $http.post('/elists_lights').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 7) {
							   // add edit 2 code
							   $http.post('/elists_home').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 8) {
							   // add edit 2 code
							   $http.post('/elists_calculator').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							
							return true;
						 },
							
						
					  });
			};
			
			//
			
		});
		
		app.controller('allwomenfashionCtrl', function($scope, $ionicPopup, $http,$state,$stateParams,$window,$ionicPlatform,$ionicActionSheet){
			$http.post('/wflists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
			});
			
			//--------action sheet
			$scope.triggerActionSheet = function() {

					  // Show the action sheet
					  var showActionSheet = $ionicActionSheet.show({
						 buttons: [
							{ text: 'Skirts' },
							{ text: 'Shirts & Tops' },
							{ text: 'Coats & Jackets' },
							{ text :'Trouser'},
							{ text: 'Jeans' },
							{ text :'Shoe'},
							{ text: 'Watch'},
							{ text :'Ethinic Wear'},
							{ text :'Night Wear'},
							{ text :'Inner Wear'},
							{ text :'Accessories'}
						 ],
							
						// destructiveText: 'Delete',
						 titleText: 'Filter By',
						 cancelText: 'Cancel',
							
						 cancel: function() {
							// add cancel code...
						 },
							
						 buttonClicked: function(index) {
							if(index === 0) {
							   // add edit 1 code
							   $http.post('/wflists_skirt').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}	
							if(index === 1) {
							   // add edit 2 code
							   $http.post('/wflists_shirt').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 2) {
							   // add edit 2 code
							   $http.post('/wflists_coats').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 3) {
							   // add edit 2 code
							   $http.post('/wflists_trouser').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 4) {
							   // add edit 2 code
							   $http.post('/wflists_jeans').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 5) {
							   // add edit 2 code
							   $http.post('/wflists_shoe').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 6) {
							   // add edit 2 code
							   $http.post('/wflists_watch').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 7) {
							   // add edit 2 code
							   $http.post('/wflists_ethenic').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 8) {
							   // add edit 2 code
							   $http.post('/wflists_night').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 9) {
							   // add edit 2 code
							   $http.post('/wflists_inner').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 10) {
							   // add edit 2 code
							   $http.post('/wflists_acc').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							
							return true;
						 },
							
						
					  });
			};
			
			//
			
		});
		
		app.controller('allbookCtrl', function($scope, $ionicPopup, $http,$state,$stateParams,$window,$ionicPlatform,$ionicActionSheet){
			$http.post('/blists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
			});
			
			$scope.triggerActionSheet = function() {

					  // Show the action sheet
					  var showActionSheet = $ionicActionSheet.show({
						 buttons: [
							{ text: 'Study' },
							{ text: 'Science fiction' },
							{ text: 'Horror' },
							{ text :'Children'},
							{ text: 'Poetry' },
							{ text :'Encyclopedias'},
							{ text: 'Travel'},
							{ text :'Cookbooks'},
							{ text :'Biographies'},
							{ text :'Autobiographies'},
						 ],
							
						// destructiveText: 'Delete',
						 titleText: 'Filter By',
						 cancelText: 'Cancel',
							
						 cancel: function() {
							// add cancel code...
						 },
							
						 buttonClicked: function(index) {
							if(index === 0) {
							   // add edit 1 code
							   $http.post('/blists_study').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}	
							if(index === 1) {
							   // add edit 2 code
							   $http.post('/blists_science').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 2) {
							   // add edit 2 code
							   $http.post('/blists_horror').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 3) {
							   // add edit 2 code
							   $http.post('/blists_children').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 4) {
							   // add edit 2 code
							   $http.post('/blists_poetry').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 5) {
							   // add edit 2 code
							   $http.post('/blists_encyclo').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 6) {
							   // add edit 2 code
							   $http.post('/blists_travel').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 7) {
							   // add edit 2 code
							   $http.post('/blists_cookbooks').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 8) {
							   // add edit 2 code
							   $http.post('/blists_bio').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 9) {
							   // add edit 2 code
							   $http.post('/blists_autobio').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							return true;
						 },
							
						
					  });
			};
			
			//
			
		});
		
		app.controller('allhomeCtrl', function($scope, $ionicPopup, $http,$state,$stateParams,$window,$ionicPlatform,$ionicActionSheet){
			$http.post('/hlists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
			});
			
			$scope.triggerActionSheet = function() {

					  // Show the action sheet
					  var showActionSheet = $ionicActionSheet.show({
						 buttons: [
							{ text: 'Home Decor' },
							{ text: 'Home Furnishing' },
							{ text: 'Garden & Outdoors' },
							{ text :'Home Improvement'},
							{ text: 'Storage' }
							
						 ],
							
						// destructiveText: 'Delete',
						 titleText: 'Filter By',
						 cancelText: 'Cancel',
							
						 cancel: function() {
							// add cancel code...
						 },
							
						 buttonClicked: function(index) {
							if(index === 0) {
							   // add edit 1 code
							   $http.post('/hlists_decor').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}	
							if(index === 1) {
							   // add edit 2 code
							   $http.post('/hlists_furnish').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 2) {
							   // add edit 2 code
							   $http.post('/hlists_garden').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 3) {
							   // add edit 2 code
							   $http.post('/hlists_improve').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							if(index === 4) {
							   // add edit 2 code
							   $http.post('/hlists_storage').then(function(response){
									console.log(response.data);
									$scope.contactlist=response.data;
								});
							}
							return true;
						 },
							
						
					  });
			};
			//	
		});
		
		app.controller('alloffersCtrl', function($scope, $ionicPopup, $http,$state,$stateParams,$window,$ionicPlatform,$ionicActionSheet){
			$http.post('/offerlists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
			});
			
			$scope.triggerActionSheet = function() {

					  // Show the action sheet
					  var showActionSheet = $ionicActionSheet.show({
						 buttons: [
							{ text: 'TV' },
							{ text: 'Fridge & ACs' },
							{ text: 'Washing machine & Dish washer' },
							{ text :'Sound System'},
							{ text: 'Mobile & Accessories' },
							{ text :'Computer & laptop'},
							{ text: 'Lights'},
							{ text :'Home Applience'},
							{ text :'Calculator'},
						 ],
							
						// destructiveText: 'Delete',
						 titleText: 'Filter By',
						 cancelText: 'Cancel',
							
						 cancel: function() {
							// add cancel code...
						 },
							
						 buttonClicked: function(index) {
							if(index === 0) {
							   // add edit 1 code
							}
								
							if(index === 1) {
							   // add edit 2 code
							}
						 },
							
						
					  });
			};
			
			//
			
		});
		
		
		
		app.controller('addlistCtrl', function($scope, $ionicPopup, $http,$state,$stateParams,$ionicPlatform, AuthService){
			$http({
				method: "GET",
				url: "/contactlists",
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
						$http.delete('/contactlists/'+id).then(function(response){
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
				$http.post('/glists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
				});
			};
			$scope.loadfashion=function(){
				$http.post('/flists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
				});
			};
			$scope.loadelectronics=function(){
				$http.post('/elists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
				});
			};
			
			$scope.loadall=function(){
				$http.post('/lists').then(function(response){
				console.log(response.data);
				$scope.contactlist=response.data;
				});
			};
			
			$scope.logout = function() {
				AuthService.logout();
				$state.go('list');
			  };
			
			
		});
			
	
		
		
			app.controller('AdminCtrl', function($scope, $ionicPopup,$filter, $http,$state,$stateParams,$ionicPlatform, AuthService){
				//login validation
				  $scope.adduser = function(contact) {
					AuthService.login2(contact).then(function(authenticated) {
					  $state.go('admindata', {}, {reload: true});
				//	  $scope.setCurrentUsername(contact.username);
					}, function(err) {
					  var alertPopup = $ionicPopup.alert({
						title: 'Login failed!',
						template: 'Please check your credentials!'
					  });
					});
				  };
				  
				  
				  $scope.pinfo=function(){
					$state.go('addlist');
				  };
				  
				  $scope.oinfo=function(){
					  $state.go('orderinfo');
				  };
				  
				   $scope.dinfo=function(){
					  $state.go('delivered');
				  };
				  
				  //Populate the orderinfo page
				  $http.post('/ordershow').then(function(response){
					  console.log(response.data);
					 $scope.groups=response.data;
					  
				  });
				   //Populate the delivered page
				  $http.post('/deliveryshow').then(function(response){
					  console.log(response.data);
					 $scope.groupsdelivered=response.data;
					  
				  });
				  
				  $scope.delivered=function(group){
					 $http.put('/orderupdate',group).then(function(response){
						console.log(response.data);
						 $http.post('/ordershow').then(function(response){
							console.log(response.data);
							$scope.groups=response.data;
						 });
						  $http.post('/deliveryshow').then(function(response){
							  console.log(response.data);
							 $scope.groupsdelivered=response.data;
							  
						  });
					  
					});
				  
				  };
				  
				  
				   /*
					   * if given group is the selected group, deselect it
					   * else, select the given group
					   */
					  $scope.toggleGroup = function(group) {
						group.show = !group.show;
					  };
					  $scope.isGroupShown = function(group) {
						return group.show;
					  };
				  
			});
			
			app.controller('myorderCtrl', function($scope, $ionicPopup,$filter, $http,$state,$stateParams,$ionicPlatform, AuthService){
				var user={};
				user.mobile=AuthService.username();
				console.log(user);
				  //Populate the orderinfo page
				  $http.post('/myordershow',user).then(function(response){
					  console.log(response.data);
					 $scope.groups=response.data;
					  
				  });
				  
				   /*
					   * if given group is the selected group, deselect it
					   * else, select the given group
					   */
					  $scope.toggleGroup = function(group) {
						group.show = !group.show;
					  };
					  $scope.isGroupShown = function(group) {
						return group.show;
					  };
				  
			});
					
				
				
	
		app.controller('ShowPop', function($scope, $ionicPopup,$filter, $http,$state,$stateParams, FilesService, $ionicLoading){
			// Triggered on a button click, or some other target// $scope.showPopup = function() {
			$scope.contact = {};
			$scope.contact.img="";
			$scope.contact.offers="NO";
			//
			  $scope.user = {bankName: ''};
  
  $scope.banks = [{
    "name": "Grocery",
    "branches": [{
      "name": "Biscuits",
      "code": "1"
    }, {
      "name": "Beverages",
      "code": "2"
    },{
      "name": "Fruit & Vegetables",
      "code": "3"
    },{
      "name": "Grains",
      "code": "4"
    },{
      "name": "Oil",
      "code": "5"
    },{
      "name": "Pulses,Cereals & Nuts",
      "code": "6"
    },{
      "name": "Spices",
      "code": "7"
    },{
      "name": "Household",
      "code": "8"
    }
    
    ]
  }, {
    "name": "Men Fashion",
    "branches": [{
      "name": "Tshirt",
      "code": "9"
    }, {
      "name": "Shirt",
      "code": "10"
    }, {
      "name": "Suits & Blazers",
      "code": "11"
    }, {
      "name": "Trouser",
      "code": "12"
    }, {
      "name": "Jeans",
      "code": "13"
    }, {
      "name": "Shoe",
      "code": "14"
    }, {
      "name": "Watch",
      "code": "15"
    }, {
      "name": "Ethinic Wear",
      "code": "16"
    }, {
      "name": "Inner Wear",
      "code": "17"
    }, {
      "name": "Accessories",
      "code": "18"
    }
    ]
  }, {
    "name": "Women Fashion",
    "branches": [{
      "name": "Skirts",
      "code": "19"
    }, {
      "name": "Shirts & Tops",
      "code": "20"
    }, {
      "name": "Coats & Jackets",
      "code": "21"
    }, {
      "name": "Trouser",
      "code": "22"
    }, {
      "name": "Jeans",
      "code": "23"
    }, {
      "name": "Shoe",
      "code": "24"
    }, {
      "name": "Watch",
      "code": "25"
    }, {
      "name": "Ethinic Wear",
      "code": "26"
    },{
      "name": "Night Wear",
      "code": "27"
    },{
      "name": "Inner Wear",
      "code": "28"
    }, {
      "name": "Accessories",
      "code": "29"
    }
    ]
  },{
    "name": "Electronics",
    "branches": [{
      "name": "TV",
      "code": "30"
    }, {
      "name": "Fridge & ACs",
      "code": "31"
    }, {
      "name": "Washing machine & Dish washer",
      "code": "32"
    }, {
      "name": "Sound System",
      "code": "33"
    }, {
      "name": "Mobile & Accessories",
      "code": "34"
    }, {
      "name": "Computer & laptop",
      "code": "35"
    }, {
      "name": "Lights",
      "code": "36"
    }, {
      "name": "Home Applience",
      "code": "37"
    },{
      "name": "Calculator",
      "code": "38"
    }
    ]
  },{
    "name": "Books",
    "branches": [ {
      "name": "Study",
      "code": "39"
    }, {
      "name": "Science fiction",
      "code": "40"
    }, {
      "name": "Horror",
      "code": "41"
    }, {
      "name": "Children",
      "code": "42"
    }, {
      "name": "Poetry",
      "code": "43"
    }, {
      "name": "Encyclopedias",
      "code": "44"
    }, {
      "name": "Travel",
      "code": "45"
    },{
      "name": "Cookbooks",
      "code": "46"
    },{
      "name": "Biographies",
      "code": "47"
    },{
      "name": "Autobiographies",
      "code": "48"
    }
    
    ]
  },{
    "name": "Home & Furniture",
    "branches": [ {
      "name": "Home Decor",
      "code": "49"
    }, {
      "name": "Home Furnishing",
      "code": "50"
    }, {
      "name": "Garden & Outdoors",
      "code": "51"
    }, {
      "name": "Home Improvement",
      "code": "52"
    }, {
      "name": "Storage",
      "code": "53"
    }, 
    ]
  },
  
  
  
  ];
  
  $scope.getBranches = function(selectedBank) {
    var filteredBank = $filter('filter')($scope.banks, selectedBank);
    return filteredBank[0].branches;
  };
  
			
			//
			
			// An elaborate, custom popup
			var myPopup = $ionicPopup.show({
				template: 
						    '<select ng-model="user.bankName" style="width:100%;height:40px"><option selected value="">Select</option>'+
							'<option ng-repeat="bank in banks" value="{{bank.name}}">{{bank.name}}</option>'+
							'</select>'+
						    '<select ng-model="user.branch" ng-show="user.bankName" style="width:100%;height:40px"><option selected value="">Select</option>'+
    '<option ng-repeat="branch in getBranches(user.bankName)" value="{{branch.name}}">{{ branch.name }}</option></select>'+
							'<label class="item item-input item-label">'+
				'<input type="text" ng-model="contact.name" placeholder="Enter Name"></label><label class="item item-input item-label">'+
				'<input type="number" ng-model="contact.price" placeholder="Enter Price"></label>'+
				'<label class="item item-input item-label">'+
				'<input type="text" ng-model="contact.desc" placeholder="Enter Description"></label>'+
				'<div><label style="font-size:16px;">Offer:</label>'+
					'<span>Yes  <input id="first" type="radio" name="content" ng-model="contact.offers" value="Yes" ></span>'+
						'&nbsp'+
					'<span>No  <input id="second" type="radio" name="content" ng-model="contact.offers" value="NO"></span><br><br>'+
					'<div class="item item-input" style="padding-right:12px">'+
					'<input style="background-color:#eaebed" placeholder="Enter Offer" ng-model="contact.offers" type="text" ng-show=contact.offers !== "NO"></div></div>'+
				'<label class="item item-input item-label"><input type="file" ng-model="localFile" id="store-input" accept="image/*" onchange="angular.element(this).scope().localUpload(this)" /></label>',
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
						if (!$scope.contact.name || !$scope.contact.price || !$scope.contact.desc) {
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
					var filename=$scope.src;
					console.log(filename);
					console.log($scope.user.bankName);
					console.log($scope.user.branch);
					$scope.contact.value=$scope.user.bankName;
					$scope.contact.subvalue=$scope.user.branch;
					console.log($scope.contact);
					console.log($scope.contact.offers);
					console.log($scope.contact.offers);
					
					$http.post('/contactlists',$scope.contact).then(function(response){
						$scope.contact = "";
						$state.go('addlist');
						//A Alert Popup
						var alertPopup = $ionicPopup.alert({
							title: 'Item Added Successfully',
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
			
			$scope.files = FilesService.all();
				$scope.onUpload = onUpload;
				$scope.localUpload = localUpload;

				function localUpload(value){
					if (!value){
						return;
					}
					// TODO - create directive
					$ionicLoading.show();
					filepicker.store(
						value,
						onUpload
					);
				}
				function onUpload(data){
					console.log(data);
					$scope.contact.img=data.url;
					console.log($scope.contact.img);
					FilesService.add(data);
					$ionicLoading.hide();
					//$state.go('tab.chats');
				}
		});
		
		
		app.controller('AddCtrl', function($scope, $stateParams, $http, $state,$ionicPlatform){
			$scope.adduser = function(contact){
				console.log(contact);
				$http.post('/contactlists',contact).then(function(response){
					$scope.contact = "";
					$state.go('addlist');
				});
			};
		});
		
		
		app.controller('EditCtrl', function($scope, $stateParams,$filter,FilesService,$http, $state,$ionicPopup,$ionicPlatform,$ionicLoading){
			var id = $stateParams.userId;
			console.log(id);
			$http.get('/contactlists/'+id).success(function(response){
				$scope.contact = response;
				console.log(response);
				cat=response.value;

				$scope.user.bankName=response.value;
				$scope.user.branch=response.subvalue;
			});
			//-----------------------
						  $scope.user = {bankName: ''};
			  $scope.banks = [{
				"name": "Grocery",
				"branches": [{
				  "name": "Biscuits",
				  "code": "1"
				}, {
				  "name": "Beverages",
				  "code": "2"
				},{
				  "name": "Fruit & Vegetables",
				  "code": "3"
				},{
				  "name": "Grains",
				  "code": "4"
				},{
				  "name": "Oil",
				  "code": "5"
				},{
				  "name": "Pulses,Cereals & Nuts",
				  "code": "6"
				},{
				  "name": "Spices",
				  "code": "7"
				},{
				  "name": "Household",
				  "code": "8"
				}
				
				]
			  }, {
				"name": "Men Fashion",
				"branches": [{
				  "name": "Tshirt",
				  "code": "9"
				}, {
				  "name": "Shirt",
				  "code": "10"
				}, {
				  "name": "Suits & Blazers",
				  "code": "11"
				}, {
				  "name": "Trouser",
				  "code": "12"
				}, {
				  "name": "Jeans",
				  "code": "13"
				}, {
				  "name": "Shoe",
				  "code": "14"
				}, {
				  "name": "Watch",
				  "code": "15"
				}, {
				  "name": "Ethinic Wear",
				  "code": "16"
				}, {
				  "name": "Inner Wear",
				  "code": "17"
				}, {
				  "name": "Accessories",
				  "code": "18"
				}
				]
			  }, {
				"name": "Women Fashion",
				"branches": [{
				  "name": "Skirts",
				  "code": "19"
				}, {
				  "name": "Shirts & Tops",
				  "code": "20"
				}, {
				  "name": "Coats & Jackets",
				  "code": "21"
				}, {
				  "name": "Trouser",
				  "code": "22"
				}, {
				  "name": "Jeans",
				  "code": "23"
				}, {
				  "name": "Shoe",
				  "code": "24"
				}, {
				  "name": "Watch",
				  "code": "25"
				}, {
				  "name": "Ethinic Wear",
				  "code": "26"
				},{
				  "name": "Night Wear",
				  "code": "27"
				},{
				  "name": "Inner Wear",
				  "code": "28"
				}, {
				  "name": "Accessories",
				  "code": "29"
				}
				]
			  },{
				"name": "Electronics",
				"branches": [{
				  "name": "TV",
				  "code": "30"
				}, {
				  "name": "Fridge & ACs",
				  "code": "31"
				}, {
				  "name": "Washing machine & Dish washer",
				  "code": "32"
				}, {
				  "name": "Sound System",
				  "code": "33"
				}, {
				  "name": "Mobile & Accessories",
				  "code": "34"
				}, {
				  "name": "Computer & laptop",
				  "code": "35"
				}, {
				  "name": "Lights",
				  "code": "36"
				}, {
				  "name": "Home Applience",
				  "code": "37"
				},{
				  "name": "Calculator",
				  "code": "38"
				}
				]
			  },{
				"name": "Books",
				"branches": [ {
				  "name": "Study",
				  "code": "39"
				}, {
				  "name": "Science fiction",
				  "code": "40"
				}, {
				  "name": "Horror",
				  "code": "41"
				}, {
				  "name": "Children",
				  "code": "42"
				}, {
				  "name": "Poetry",
				  "code": "43"
				}, {
				  "name": "Encyclopedias",
				  "code": "44"
				}, {
				  "name": "Travel",
				  "code": "45"
				},{
				  "name": "Cookbooks",
				  "code": "46"
				},{
				  "name": "Biographies",
				  "code": "47"
				},{
				  "name": "Autobiographies",
				  "code": "48"
				}
				
				]
			  },{
				"name": "Home & Furniture",
				"branches": [ {
				  "name": "Home Decor",
				  "code": "49"
				}, {
				  "name": "Home Furnishing",
				  "code": "50"
				}, {
				  "name": "Garden & Outdoors",
				  "code": "51"
				}, {
				  "name": "Home Improvement",
				  "code": "52"
				}, {
				  "name": "Storage",
				  "code": "53"
				}, 
				]
			  },
			  
			  
			  
			  ];
			  
			  $scope.getBranches = function(selectedBank) {
				var filteredBank = $filter('filter')($scope.banks, selectedBank);
				return filteredBank[0].branches;
			  };
			//----------------------------
			
				$scope.files = FilesService.all();
				$scope.onUpload = onUpload;
				$scope.localUpload = localUpload;

				function localUpload(value){
					if (!value){
						return;
					}
					// TODO - create directive
					$ionicLoading.show();
					filepicker.store(
						value,
						onUpload
					);
				}
				function onUpload(data){
					console.log(data);
					$scope.contact.img=data.url;
					console.log($scope.contact.img);
					FilesService.add(data);
					$ionicLoading.hide();
					//$state.go('tab.chats');
				}
				
					
			//-------------------------------
				if($scope.content=='NO'){
					console.log($scope.content);
					$scope.contact.offers='NO';
				}
				
			//-------------------------------------------------
			
			$scope.update = function(content){
				if(content=='NO'){
					console.log(content);
					$scope.contact.offers='NO';
				}
				console.log(content);
				console.log($scope.contact._id);
				$scope.contact.value=$scope.user.bankName;
				$scope.contact.subvalue=$scope.user.branch;
				$http.put('/contactlists/' + $scope.contact._id, $scope.contact).success(function(response){
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
		
		app.controller('myacloginCtrl', function($scope, $stateParams, $http, $state,$ionicPlatform,AuthService){
			$scope.sLogin=function(){
				$state.go('registerme');
			};		
		/*	
			$scope.loginuser=function(user){
				console.log(user);
				$http.post('/userlogin',user).then(function(response){
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
			};      */
			//-----------
				//login validation
				  $scope.loginuser = function(user) {
					AuthService.login1(user).then(function(authenticated) {
					  $state.go('list', {}, {reload: true});
				//	  $scope.setCurrentUsername(contact.username);
					}, function(err) {
					  var alertPopup = $ionicPopup.alert({
						title: 'Login failed!',
						template: 'Please check your credentials!'
					  });
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
						$http.post('/registerme',user).then(function(response){
							console.log("You are added");
							var alertPopup=$ionicPopup.alert({
								title:'You added!',
								template:'Now Login with Mobile no & Password... '
							});
							alertPopup.then(function(res){
								console.log('thank u for adding join');
								$state.go('myac');
							});
						});
				}
			};
					
		});
		
	/*	app.controller('mycartCtrl', function($scope, $stateParams, $http, $state,$ionicPlatform,$ionicPopup){
			
		/*	$http.post('/mycartshow').then(function(response){
				console.log(response.data);
				$scope.user=response.data;
			}); */
		/*	console.log(window.localStorage.getItem('foodcart'));
			var appData = JSON.parse( window.localStorage.getItem('foodcart'));
			console.log(appData);
			$scope.user=appData;
			console.log($scope.user);
			//$state.go('mycart');
		
		});*/
		
		//---------
		
		var back2=0;
		app.controller('mycartCtrl', function($scope, $stateParams, $http, $state,$ionicPlatform,$ionicPopup,$window){
			//Populate mycart
			function populatecart(){
				console.log(localStorage["foodcart"]);
				//var appData = JSON.parse( window.localStorage.getItem('foodcart'));
				var appData=JSON.parse(localStorage["foodcart"]);
				console.log(appData);
				$scope.user=appData;
				console.log($scope.user);
				//keepdata=$scope.user;
			}
			//console.log(keepdata);
			populatecart();
			
			//calculate total amount
			function calculatetotal(){
				var amount=0;
				var cart_items = JSON.parse(localStorage["foodcart"]);
					for (i=0;i<cart_items.length;i++){
					  amount=amount+(cart_items[i].price*cart_items[i].quantity);
					}
					$scope.total=amount;
				
			}
			calculatetotal();	  
			
			$scope.removeformcart=function(user){	
				console.log(user);
				var cart_items = JSON.parse(localStorage["foodcart"]);
				for (i=0;i<cart_items.length;i++)
				  if (cart_items[i]._id == user._id)
				  {
					console.log('deleted');
					cart_items.splice(i,1);
				  }
				  localStorage["foodcart"] = JSON.stringify(cart_items);
				  console.log(localStorage["foodcart"]);
				  //$window.location.reload();
					populatecart();
				   	calculatetotal();	
		    };
			
			$scope.editQuantity = function (type, user) {
					if(type === "add"){
						var cart_items = JSON.parse(localStorage["foodcart"]);
						for (i=0;i<cart_items.length;i++){
						  if (cart_items[i]._id == user._id){
							  if(cart_items[i].quantity<10){
								  cart_items[i].quantity=cart_items[i].quantity+1;
								  localStorage["foodcart"] = JSON.stringify(cart_items);
								  user.quantity=user.quantity+1;
								  console.log(cart_items[i].quantity);
								  console.log(window.localStorage.getItem('foodcart'));
							  }
						  }
						}
						calculatetotal();	
					
					}
					if(type === "subtract"){
					var cart_items = JSON.parse(localStorage["foodcart"]);
						for (i=0;i<cart_items.length;i++){
						  if (cart_items[i]._id == user._id){
							  if(cart_items[i].quantity>0){
								  cart_items[i].quantity=cart_items[i].quantity-1;
								  localStorage["foodcart"] = JSON.stringify(cart_items);
								  user.quantity=user.quantity-1;
								  console.log(cart_items[i].quantity);
								  console.log(window.localStorage.getItem('foodcart'));
							  }
						  }
						}
						calculatetotal();	
					}
		    }
			
			$scope.cartCheckout=function(){
				back2=1;
				console.log(back2);
				console.log('In Checkout');
				$state.go('checkout');
			}
			$scope.goshop=function(){
				$state.go('category');
			}
		
		});
		//---------
		
		app.controller('checkoutCtrl', function($scope, $stateParams, $http, $state,$ionicPlatform,$ionicPopup,$window,AuthService){
			console.log(AuthService.username());
			var info=AuthService.username();
			var myname;
			var customer1={};
			var customer2={};
			//var back2=1;
			console.log(back2);
			if(back2!==1){
				console.log('no back');
				$state.go('mycart');
			}
				console.log(info);
			
			
			 
			$http.post('/usercheck/'+info).then(function(response){
				console.log(response.data);
				var arr1=new Array();
				//console.log(res);
				arr1.push(response.data);
				$scope.user=arr1;
				console.log(arr1);
				for(var i=0;i<arr1.length;i++)
				{
					console.log(arr1[i].name);
					myname=arr1[i].name;
					console.log(myname);
				}
				for(var i=0;i<arr1.length;i++)
				{
					customer1.name=arr1[i].name;
					customer1.coname=arr1[i].name;
					customer1.mobile=arr1[i].mobile;
					customer1.address=arr1[i].address;
				}
			});
			console.log(myname);
			//---
					console.log(window.localStorage.getItem('foodcart'));
					var appData = JSON.parse( window.localStorage.getItem('foodcart'));
					console.log(appData);
					customer1.cart=appData;
					console.log(customer1);
					console.log(customer1);
			   
			   // When button is clicked, the popup will be shown...
						   $scope.showPopup = function() {
							   console.log(myname);
							  $scope.customer = {};
							
							  // Custom popup
							  //coname denotes care of name.
							  var myPopup = $ionicPopup.show({
								 template: '<label class="item item-input item-label">'+
				                           '<input type="text" ng-model="customer.coname" placeholder="Enter Name"></label>'+
										   '<label class="item item-input item-label">'+
										   '<input type="text" ng-model="customer.address" placeholder="Enter Address"></label>'+
										   '<label class="item item-input item-label">'+
										   '<input type="number" ng-model="customer.pin" placeholder="Enter Pin"></label>'+
										   '<label class="item item-input item-label">'+
										   '<input type="number" ng-model="customer.mobile" placeholder="Enter Mobile"></label>',
								 title: 'Enter Address',
								// subTitle: 'Subtitle',
								 scope: $scope,
									
								 buttons: [
									{ text: 'Cancel' }, {
									   text: '<b>Save</b>',
									   type: 'button-balanced',
										  onTap: function(e) {
												
											 if (!$scope.customer.coname) {
												//don't allow the user to close unless he enters name...
												   e.preventDefault();
											 } else {
												return $scope.customer;
											 }
										  }
									}
								 ]
							  });
							  console.log($scope.customer);
							  myPopup.then(function(res) {
								    console.log('Tapped!', res);
									if(res){
										var arr1=new Array();
										console.log(res);
										arr1.push(res);
										$scope.newaddress=arr1;
										$scope.customer.name=myname;
										console.log(window.localStorage.getItem('foodcart'));
										var appData = JSON.parse( window.localStorage.getItem('foodcart'));
										console.log(appData);
										$scope.customer.cart=appData;
										console.log($scope.customer);
										customer2=$scope.customer;
										console.log(customer2);
									}
										
							  });    
						   };
						   
						   $scope.payment=function(user,newaddress){
							   console.log(user[0].en);
							   if(user[0].en==true)
							   {
									console.log(user);
									console.log(customer1);
									finalcustomer=customer1;
									console.log(finalcustomer);
									$state.go('payment');
							   };
							   console.log(newaddress[0].en);
							   if(newaddress[0].en==true)
							   {
									console.log(newaddress);
									console.log(customer2);
									finalcustomer=customer2;
									console.log(finalcustomer);
									$state.go('payment');
							   };
							   
							};
						   
						  
						   
						   console.log(finalcustomer);
						   
						   //select payment model
						   $scope.pay=function(payment){
							   console.log(finalcustomer);
							   console.log(payment.mod);
							   if(payment.mod=='cod'){
								   finalcustomer.paymentmode='Cash On Delivery';
								   finalcustomer.delivered='no';
								  
								   finalcustomer.show=false;
								   console.log(finalcustomer);     
							   };
							    if(payment.mod=='net'){
								   finalcustomer.paymentmode='Net Banking';
								   finalcustomer.delivered='no';
								   
									finalcustomer.show=false;
							   };
							    if(payment.mod=='dca'){
								   finalcustomer.paymentmode='Debit Card';
								   finalcustomer.delivered='no';
								   
								  finalcustomer.show=false;
							   };
							    if(payment.mod=='paytm'){
								   finalcustomer.paymentmode='Paytm';
								   finalcustomer.delivered='no';
								   
								 finalcustomer.show=false;
							   };
							   
							   
							    $http.post('/orderinfo',finalcustomer).then(function(response){
									console.log(response);
								});
								
								
							    $state.go('final');
								
								
						   };
						
						   
						   	//calculate total amount
							function calculatetotal(){
								var amount=0;
								var cart_items = JSON.parse(localStorage["foodcart"]);
									for (i=0;i<cart_items.length;i++){
									  amount=amount+(cart_items[i].price*cart_items[i].quantity);
									}
									$scope.total=amount;
									finalcustomer.total=amount;
							}
							calculatetotal();
							
							$scope.customer1=finalcustomer;
							//$scope.customer1.paymentmode=customer1.paymentmode;
							 
							$scope.back=function(){
								var cart_items = JSON.parse(localStorage["foodcart"]);
								console.log(cart_items.length);
								var length=cart_items.length;
								for (i=0;i<=length;i++)
								{
									console.log(i);
								cart_items.splice(0,1);
								localStorage["foodcart"] = JSON.stringify(cart_items);
								}
								back2=back2+1;
								$state.go('category');
							};

			
			
		});
		
		
		
		app.controller('paymentCtrl', function($scope, $stateParams, $http, $state,$ionicPlatform,$ionicPopup,$window,AuthService){
			//calculate total amount
			function calculatetotal(){
				var amount=0;
				var cart_items = JSON.parse(localStorage["foodcart"]);
					for (i=0;i<cart_items.length;i++){
					  amount=amount+(cart_items[i].price*cart_items[i].quantity);
					}
					$scope.total=amount;
			}
			calculatetotal();	
		});
			
			
		
		
		
		app.run(function($ionicPlatform,$state,$ionicHistory) {
			
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
		

		.run(function ($rootScope, $state, AuthService, AUTH_EVENTS,$ionicPlatform) {
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
				console.log(AuthService.isAuthenticated());
				
				if (next.name == 'checkout') {
					console.log('auth checkout');
					event.preventDefault();
					$state.go('myac');
				}
				
				if (next.name == 'payment') {
					event.preventDefault();
					$state.go('myac');
				}
					
				if (next.name == 'final') {
					event.preventDefault();
					$state.go('myac');
				}
				
				  
				if (next.name == 'myorderinfo') {
					event.preventDefault();
					$state.go('myac');
				}
			
			}
			
					
		  });
		})
		
		
	}());