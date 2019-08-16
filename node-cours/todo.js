const todo = {
    todos: [
        {
        text: 'Achats pour la maison',
        completed: true
        },
        {
        text: 'Rendre le livre au voisin',
        completed: false
        },
        {
        text: 'Aller chercher mon costume',
        completed: false
        }
    ],
    //filtre les resultats
    getTodos(){
        const uncompleteTodos = this.todos.filter(function(todo, index, todos){
            return todo.completed === false ;
        });
        console.log(uncompleteTodos);
    }
};

todo.getTodos();