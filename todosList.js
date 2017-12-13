var ajouter = function(req,res){
        req.session.todosList.todos.push(req.body);
};

var supprimer = function(req,res){
        var id = req.params.id;
        if( id != undefined){
        	var index = req.session.todosList.todos.lastIndexOf(id);
        	req.session.todosList.todos.splice(index);
        	res.send("supression effectuée");
        }else {
        	res.send("supression échouée");
        }
        
}


module.exports = {
    ajouterTodos : ajouter,
    supprimerTodos : supprimer
};
