var app = require('express')();
var session = require('express-session');
var bodyParser = require('body-parser');
var todos = require('./todosList.js');
var urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.use(session({secret:'mysecrettoken'}));

app.use(function( req, res, next){
    if(!req.session.todosList){
        req.session.todosList = 
        { todos : [] };
    }
    next();
});

app.get('/afficher', function(req,res){
    res.send(req.session.todosList);
});

app.post('/ajouter',urlEncodedParser,function(req,res){
        todos.ajouterTodos(req,res);
        res.send('ajout effectué');
}); 

app.listen(3000, function() {
    console.log('Listening *: 3000');
});
