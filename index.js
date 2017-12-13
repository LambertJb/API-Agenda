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

app.get('/afficher/:premier/:nbParPage', function(req,res){
    var premier = req.params.premier;
    var nbParPage = req.params.nbParPage;

    res.send(req.session.todosList);
});

app.get('/', function(req,res){
    res.send(req.session.todosList);
});

app.post('/ajouter',urlEncodedParser,function(req,res){
        todos.ajouterTodos(req,res);
        res.send('ajout effectué');
}); 

app.get('/supprimer/:id', function(req, res){
        todos.supprimerTodos(req,res);
        res.send('suppression effectuée');
});

app.listen(3000, function() {
    console.log('Listening *: 3000');
});
