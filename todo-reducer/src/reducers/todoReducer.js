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
            for (let i=0; i<state.todos.length; i++) {
                if (state.todos[i].id === action.payload) {
                    state.todos[i].completed = !state.todos[i].completed;
                }
            }
            return {
                todos: state.todos
            };

        case "CLEAR":
            return {
                todos: state.todos.filter(a => !a.completed)
            };
            
        default:
            return state;
    }
}