var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var cors=require('cors');
// Initialize Express App
var app = express();


// Use Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Set Static Path
app.use('/', express.static(__dirname));




port = process.env.PORT || 3000;

/*
var originsWhitelist = [
    'http://localhost:4200'
     
  ];
  var corsOptions = {
    origin: function(origin, callback){
          var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
          callback(null, isWhitelisted);
    },
    credentials:true
  }

  app.use(cors(corsOptions));
*/

app.use(function(req, res, next) {
  
      // Website you wish to allow to connect
      res.header('Access-Control-Allow-Origin', '*');
  
      // Request methods you wish to allow
     // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  
      // Request headers you wish to allow
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      //res.setHeader('Access-Control-Allow-Credentials', true);
  
      // Pass to next layer of middleware
    next();
  });
  app.use(require('./api/user_api'));

 
  // use it before all route definitions
//  app.use(cors({origin: 'null'}));

app.listen(port, function() {
	console.log("listening to port " + port);
})
