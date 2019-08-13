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
            }
        default:
            return state;
    }
}