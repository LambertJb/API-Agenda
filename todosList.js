var ajouter = function(req,res){
        req.session.todosList.todos.push(req.body);
};

var supprimer = function(req,res){
        var id = req.params.id;
        var size = req.session.todosList.todos.length;
        if ( id < size && id >= 0 ) {
            
            req.session.todosList.todos.splice(id);
            res.send("suppression effectuée");
        }else {
        	res.send("suppression échouée");
        }
};

var pagination = function(req,res){
        var premier = req.params.premier;
        var nbParPage = req.params.nbParPage;
        var size = req.session.todosList.todos.length;
        var todos = {todos: []}
        if ( premier >= 0 && premier <= size - 1 && nbParPage > 0 && (premier + nbParPage) <= size ) {
            for(var i = premier; i <= (premier + nbParPage - 1); i++) {
                todos.todos.push(req.session.todosList.todos[i]);
            }
            return todos;
        } else {
            return todos;
        }
        
        
};

module.exports = {
    ajouterTodos : ajouter,
    supprimerTodos : supprimer,
    pagination : pagination,
};
