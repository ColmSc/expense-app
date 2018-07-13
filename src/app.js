import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 100, createdAt: 1000  }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 300, createdAt: 9992000 }));
store.dispatch(addExpense({ description: 'Rent Bill', amount: 543534, createdAt: 104300  }));
store.dispatch(setTextFilter(''));

setTimeout(() => {
    store.dispatch(setTextFilter(''));
}, 3000)

const state = store.getState();
const visbibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visbibleExpenses);

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));