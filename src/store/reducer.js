
const initialState = {
    age:21,
    change:1,
    history:[]
};

const reducer = (state = initialState, action) => {
    const newState = {...state}
    
    switch (action.type) {
        case 'AGE_UP':
            return {
                ...state,
                age: state.age + action.value, // 21, 22 , 23
                change: state.change + 1,
                history: state.history.concat({ 
                    age: state.age + action.value, 
                    change: state.change++
                })
            }

        case 'AGE_DOWN':
            return {
                ...state,
                age: state.age - action.value, // 21, 22 , 23
                change: state.change + 1,
                history: state.history.concat({ 
                    age: state.age - action.value, 
                    change: state.change++
                })
            }
        
        case 'DEL_ITEM':
            return {
                ...state,
                history: state.history.filter(el => el.change !== action.key)
            }
    }

    return newState;
};

export default reducer;