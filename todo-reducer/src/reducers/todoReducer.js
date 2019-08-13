// Export 2 thing -- initialState, reducer fn

export const initialState = {
    todos: [    
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {
                todos: [...state.todos, {item: action.payload, completed: false, id: new Date().getTime()}]
            };
        case "TOGGLE":
            console.log('asdf',action.payload);
            const toggleId = action.payload;
            const todos = state.todos;
            for (let i=0; i<todos.length; i++) {
                if (todos[i].id === toggleId) {
                    todos[i].completed = !todos[i].completed;
                }
            }
            return {
                todos: todos
            };
            // return console.log('state: ', state, 'action.payload: ', action.payload)
            // state.todos.map(todo => {
            //     if (todo.id === action.payload.id) {
            //       return {todo.completed: !completed}
                  //console.log('check, payload', action.payload)
                // }
                // return console.log('check, payload: ', state.todos.map(a=>a.completed));
            // return 
            //      state
            //     if (state.todos.map(a => a.id===action.payload.id))
            // {
            //     todos : state.todos.map(a => a.id === action.payload.id)
            // }

        default:
            return state;
    }
}