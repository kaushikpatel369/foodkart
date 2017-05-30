	var express = require('express');
	var app = express();
	//var mongojs = require('mongojs');
	//var db = mongojs('contactlist',['contactlist,users']);
	var ObjectID = require('mongodb').ObjectID;
	var MongoClient = require('mongodb').MongoClient;
	var bodyParser = require('body-parser');
	app.use(express.static(__dirname + "/www"))
	app.use(bodyParser.json());
	app.use(function (req, res, next) {
		// Website you wish to allow to connect
		res.setHeader('Access-Control-Allow-Origin', '*');
		// Request methods you wish to allow
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		// Request headers you wish to allow
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
		// Set to true if you need the website to include cookies in the requests sent
		// to the API (e.g. in case you use sessions)
		res.setHeader('Access-Control-Allow-Credentials', true);
		// Pass to next layer of middleware
		next();
	});
	//
	var mongodb=require('mongodb');
	var mongoClient=mongodb.MongoClient;
	var fs=require('fs');
	//
	
	//var url = 'mongodb://localhost:27017/contactlists';
	var url = 'mongodb://foodkart:7797785640sr@ds157571.mlab.com:57571/foodkart';
	//mongodb://raj9701:raj970123@ds155727.mlab.com:55727/contactlists
	MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	console.log("Connected to Database");
	
	
	app.post('/lists',function(req,res){
			console.log("i get GET request")
			db.collection('users').find().toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	//all Grocery item--------------------------------------------------------------------------------------------------------------------------
	app.post('/glists',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Grocery'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/glists_biscuit',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Grocery',subvalue:'Biscuits'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/glists_beverages',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Grocery',subvalue:'Beverages'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/glists_fruit',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Grocery',subvalue:'Fruit & Vegetables'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/glists_grains',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Grocery',subvalue:'Grains'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/glists_oil',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Grocery',subvalue:'Oil'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/glists_pulse',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Grocery',subvalue:'Pulses,Cereals & Nuts'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/glists_spices',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Grocery',subvalue:'Spices'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/glists_household',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Grocery',subvalue:'Household'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	
	
	
	
	//------------------------------------------------------------------------------------------------------------------------------------------
	//all Men fashion---------------------------------------------------------------------------------------------------------------------------
	app.post('/flists',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Men Fashion'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/flists_tshirt',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Men Fashion',subvalue:'Tshirt'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/flists_shirt',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Men Fashion',subvalue:'Shirt'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/flists_suits',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Men Fashion',subvalue:'Suits & Blazers'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/flists_trouser',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Men Fashion',subvalue:'Trouser'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/flists_jeans',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Men Fashion',subvalue:'Jeans'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/flists_shoe',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Men Fashion',subvalue:'Shoe'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/flists_watch',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Men Fashion',subvalue:'Watch'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/flists_ethenic',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Men Fashion',subvalue:'Ethenic Wear'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/flists_inner',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Men Fashion',subvalue:'Inner Wear'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/flists_acc',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Men Fashion',subvalue:'Accessories'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	//---------------------------------------------------------------------------------------------------------------------------------------------
	
	//for women fashion section--------------------------------------------------------------------------------------------------------------------
	app.post('/wflists',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Women Fashion'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/wflists_skirt',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Women Fashion',subvalue:'Skirts'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/wflists_shirt',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Women Fashion',subvalue:'Shirts & Tops'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/wflists_coats',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Women Fashion',subvalue:'Coats & Jackets'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/wflists_trouser',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Women Fashion',subvalue:'Trouser'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/wflists_jeans',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Women Fashion',subvalue:'Jeans'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/wflists_shoe',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Women Fashion',subvalue:'Shoe'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/wflists_watch',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Women Fashion',subvalue:'Watch'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/wflists_ethenic',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'women Fashion',subvalue:'Ethenic Wear'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/wflists_night',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Women Fashion',subvalue:'Night Wear'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/wflists_inner',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Women Fashion',subvalue:'Inner Wear'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/wflists_acc',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Women Fashion',subvalue:'Accessories'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	
	//--------------------------------------------------------------------------------------------------------------------------------------------
	//--All Book section---------------------------------------------------------------------------------------------------------------------
	app.post('/blists',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Books'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/blists_study',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Books',subvalue:'Study'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/blists_science',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Books',subvalue:'Science fiction'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/blists_horror',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Books',subvalue:'Horror'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/blists_children',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Books',subvalue:'Childrens'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/blists_poetry',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Books',subvalue:'Poetry'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/blists_encyclo',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Books',subvalue:'Encyclopedias'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/blists_travel',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Books',subvalue:'Travel'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/blists_cookbooks',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Books',subvalue:'Cookbooks'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/blists_bio',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'book',subvalue:'Biographies'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/blists_autobio',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'book',subvalue:'Autobiographies'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	
	
	//------------------------------------------------------------------------------------------------------------------------------
	//---all Home and Furniture section-----------------------------------------------------------------------------------------------
	app.post('/hlists',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Home & Furniture'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/hlists_decor',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Home & Furniture',subvalue:'Home Decor'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/hlists_furnish',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Home & Furniture',subvalue:'Home Furnishing'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/hlists_garden',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Home & Furniture',subvalue:'Garden & Outdoors'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/hlists_improve',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Home & Furniture',subvalue:'Home Improvement'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/hlists_storage',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Home & Furniture',subvalue:'Storage'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	
	
	//------------------------------------------------------------------------------------------------------------------------------
	//---All Electronics Section------------------------------------------------------------------------------------------------
	app.post('/elists',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Electronics'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/elists_tv',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Electronics',subvalue:'TV'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/elists_fridge',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Electronics',subvalue:'Fridge & ACs'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/elists_wm',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Electronics',subvalue:'Washing machine & Dish washer'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/elists_sound',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Electronics',subvalue:'Sound System'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/elists_mobile',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Electronics',subvalue:'Mobile & Accessories'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/elists_computer',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Electronics',subvalue:'Computer & laptop'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/elists_lights',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Electronics',subvalue:'Lights'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/elists_home',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Electronics',subvalue:'Home Applience'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	app.post('/elists_calculator',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({value:'Electronics',subvalue:'Calculator'}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	
	//-------------------------------------------------------------------------------------------------------------------------
	app.post('/offerlists',function(req,res){
			console.log("i get GET request")
			db.collection('users').find({offers:{$nin:['NO']}}).toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	
	app.post('/cartlist',function(req,res){
			console.log("i get cart add request");
			console.log(req.body._id);
			
			db.collection('users').find({_id:req.body._id}).toArray(function(err,docs){
				console.log(docs);
				res.json(docs);
			});
	});
	
	app.post('/mycart',function(req,res){
		db.collection('mycart').insertOne(req.body,function(err,docs){
			res.json(docs);
		});
	});
	
	app.post('/mycartshow',function(req,res){
		db.collection('mycart').find().toArray(function(err,docs){
			res.json(docs);
		});
	});
	
	app.get('/contactlists',function(req,res){
			console.log("i get GET request")
			db.collection('users').find().toArray(function(err,docs){
				console.log(docs);
				//assert.equal(1, docs);
				res.json(docs);
			});
	});
	
	
	app.post('/contactlists',function(req,res){
			console.log(req.body)
			db.collection('users').insertOne(req.body,function(err,docs){
				//console.log(docs);
				res.json(docs);
			});
	});
	//register user
	app.post('/registerme',function(req,res){
			console.log(req.body)
			db.collection('people').insertOne(req.body,function(err,docs){
				//console.log(docs);
				res.json(docs);
			});
	});
	
	//user login check
	app.post('/userlogin',function(req,res){
		console.log("I get user login request");
		console.log(req.body);
		db.collection('people').find({mobile:req.body.mobile,pwd:req.body.pwd}).toArray(function(err,docs){
			console.log(docs);
			console.log(docs);
			console.log('user working');
			res.json(docs);
		});
	});
	
	//admin login check
	app.post('/adminlogin',function(req,res){
		console.log("I get admin login request");
		console.log(req.body);
		db.collection('admin').find({id:req.body.id,pwd:req.body.pwd}).toArray(function(err,docs){
			console.log(docs);
			console.log(docs);
			console.log('admin working');
			res.json(docs);
		});
	});
	
	
	app.delete('/contactlists/:id',function(req,res){
			var id = req.params.id;
			console.log(id);
			db.collection('users').deleteOne({_id: ObjectID(id)},function(err,docs){
				res.json(docs);
			})
	});
	
	
	app.get('/contactlists/:id',function(req,res){
			var id = req.params.id;
			console.log(id);
			db.collection('users').findOne({_id: ObjectID(id)},function(err,docs){
				console.log(docs);
				res.send(docs);
			});
	});
	
	
	app.put('/contactlists/:id',function(req,res){
		var id = req.params.id;
		console.log(req.body.name);
		console.log(id);
		db.collection('users').updateOne(
			{_id:ObjectID(id)},
			{$set: {img:req.body.img,value: req.body.value,subvalue:req.body.subvalue,offers:req.body.offers,name:req.body.name,price:req.body.price,desc:req.body.desc}},
			{upsert: true},
			function(err,docs){
				console.log(docs);
				res.json(docs);
			}
		);
	});
	
	app.put('/orderupdate',function(req,res){
		//var id = req.params.id;
		//console.log(req.body.name);
		console.log(req.body._id);
		db.collection('orderinfo').updateOne(
			{_id:ObjectID(req.body._id)},
			{$set: {delivered:'yes'}},
			{upsert: true},
			function(err,docs){
				console.log(docs);
				res.json(docs);
			}
		);
	});
	//--------
	app.post('/usercheck/:ph',function(req,res){
		var phone=req.params.ph;
		console.log(phone);
		
		db.collection('people').findOne({'mobile':phone},function(err,docs){
				console.log(docs);
				res.json(docs);
			});
			
			
	});
	//---Store Order into Database..
	app.post('/orderinfo',function(req,res){
			console.log(req.body)
			db.collection('orderinfo').insertOne(req.body,function(err,docs){
				//console.log(docs);
				res.json(docs);
			});
	});

	//---Retrive Order from Database
	
	app.post('/ordershow',function(req,res){
			console.log(req.body)
			db.collection('orderinfo').find({delivered:'no'}).toArray(function(err,docs){
			console.log(docs);
			console.log(docs);
			console.log(' order data working');
			res.json(docs);
		})
	});
	
	app.post('/deliveryshow',function(req,res){
			console.log(req.body)
			db.collection('orderinfo').find({delivered:'yes'}).toArray(function(err,docs){
			console.log(docs);
			console.log(docs);
			console.log(' order data working');
			res.json(docs);
		})
	});
//----------retrive data for customer order details to my order-------------	
	app.post('/myordershow',function(req,res){
			console.log(req.body)
			db.collection('orderinfo').find({mobile:req.body.mobile}).toArray(function(err,docs){
			console.log(docs);
			console.log(docs);
			console.log(' order data working');
			res.json(docs);
		})
	});
	
});

var port = process.env.PORT || 4000;
app.listen(port);
console.log("App listening on Port ",+port);