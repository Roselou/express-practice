var express = require('express');
var app = express();


app.use(express.static('views'));

app.get('/', function(request, response){
	response.sendFile('index.html');
});

//create api/dogs
	// id, name, age
var dogs = [
	{id: 1, name: "zane", age: 3},
	{id: 2, name: "stella", age: 4},
	{id: 3, name: "chloe", age: 8},
];

//create api/cats
	// id, name, age
var cats = [
	{id: 1, name: "bojangles", age: 10},
	{id: 2, name: "grandpa", age: 100},
	{id: 3, name: "cuddles", age: 12},
];

var students = [
	{
		id: 1,
		first_name: "Rose",
		last_name: "Lou"
	},
	{
		id: 2,
		first_name: "David",
		last_name: "Thayer"
	},
	{
		id: 3,
		first_name: "Mark",
		last_name: "D'Souza"
	}
];

//api/students?id=2 



// app.get('/api/dogs', function (request, response){
// 	response.json(dogs);
// });

// app.get('/api/cats', function (request, response){
// 	response.json(cats);
// });

// app.get('/api/cats/:cat_idx:', function (request, response){
// 	response.json(cats[request.params.cat_idx]);
// });

// app.get('/api/dogs/:dog_idx', function (request, response){
// 	response.json(dogs[request.params.dog_idx]);
// });

//look for animal at particular index
//filter to get appropriate animal 
// //response.json(that animal)
// app.get('/api/dogs/:id', function(request, response){
// 	var dogId = request.params.id;
// 	var theAppropriateDog = dogs.filter(function(dogObj){
// 		return dogObj.id == dogId; //or use parseInt(catId)
// 	});
// 	console.log(theAppropriateDog);
// 	response.json(theAppropriateDog);
// })

// app.get('/api/cats/:id', function(request, response){
// 	var catId = request.params.id;
// 	var theAppropriateCat = cats.filter(function(catObj){
// 		return catObj.id == catId; //or use parseInt(catId)
// 	});
// 	console.log(theAppropriateCat);
// 	response.json(theAppropriateCat);
// })

// /api/greeting/:first_name/:last_name
var greeting = [
	{first_name: "Esther", last_name: "Weon"},
	{first_name: "David", last_name: "Thayer"},
	{first_name: "Rose", last_name: "Lou"},
	{first_name: "Emma", last_name:"Bennet"},
];

app.get('/api/greeting/:first_name/:last_name', function(request, response){
	var first_name = request.params.first_name
	var last_name = request.params.last_name
	response.send(`Hello ${ first_name} ${ last_name }!`);
});

app.get('/api/catNamesWith/:letter', function(req, res){
	var letterFromUrl = request.params.letter;
	var catsWithThatLetter = cats.filter(function(catObj){
		return catObj.name[0].toLowerCase() === letterFromUrl.toLowerCase();
	});
	response.json(catsWithThatLetter);
});
//do for dog
app.get('/api/dogNamesWith/:letter', function(req, res){
	var letterFromUrl = request.params.letter;
	var dogsWithThatLetter = dogs.filter(function(dogObj){
		return dogObj.name[0].toLowerCase() === letterFromUrl.toLowerCase();
	});
	response.json(dogsWithThatLetter);
});

app.get('/api/catAges/:age', function(req, res){
	var catAgeFromUrl = req.params.age;
	var catsWithThatAge = cats.filter(function(catObj){
		return catObj.age == catAgeFromUrl;
	});
	res.json(catsWithThatAge);
});
//do for dog 
app.get('/api/dogAges/:age', function(req, res){
	var dogAgeFromUrl = req.params.age;
	var dogsWithThatAge = dogs.filter(function(dogObj){
		return dogObj.age == dogAgeFromUrl;
	});
	res.json(dogsWithThatAge);
});

app.get('/api/students', function(req, res){
	 var studentIdFromUrl = req.query.id
	 console.log(studentIdFromUrl)
	if (studentIdFromUrl === undefined){
		res.json(students)
	} else {
		var studentsWithThatId = students.filter(function(studentObj){
			return studentObj.id == studentIdFromUrl;
		}); 
		res.json(studentsWithThatId);
	}; 
	
});


//Keep at bottom
app.listen(3000, function(){
	console.log('listening to port 3000');
});