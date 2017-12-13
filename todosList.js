var ajouter = function(req,res){
        req.session.todosList.todos.push(req.body);
};

var supprimer = function(req,res){
        var id = req.params.id;
        var index = req.session.todosList.todos.lastIndexOf(id);
        if ( index != -1) {
            
            req.session.todosList.todos.splice(index);
        }
};

var pagination = function(premier, nbParPage){
         
};

module.exports = {
    ajouterTodos : ajouter,
    supprimerTodos : supprimer
};
