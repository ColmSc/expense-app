import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } =  {}) => ({
        type: 'INCREMENT',
        incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = ({ resetTo = 0 } = {}) => ({
    type: 'RESET',
    resetTo
})

const setCount = ({ setTo = 101 } = {}) => ({
    type: 'SET',
    setTo
})


// Reducer

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
           return {
               count: state.count + action.incrementBy
           };
           case 'DECREMENT':
           return {
               count: state.count - action.decrementBy
           };
           case 'SET':
            return {
                count: action.setTo
            }
           case 'RESET':
           return {
               count: action.resetTo
           };
    default:
        return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// // Increment the count
store.dispatch(incrementCount({ incrementBy: 5 }))

// Increment the count
store.dispatch(incrementCount({}))

// Reset the count
store.dispatch(resetCount({ resetTo: 0 }));

// Decrement the count
store.dispatch(decrementCount({ decrementBy: 10 }));

// Decrement the count
store.dispatch(decrementCount({ decrementBy: 10 }));

// Reset the count
store.dispatch(setCount({ setTo: 101 }));