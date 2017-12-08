var ajouter = function(req,res){
        req.session.todosList.todos.push(req.body);
};

var supprimer = function(req,res){
        
}


module.exports = {
    ajouterTodos : ajouter
    supprimerTodos : supprimer
};
