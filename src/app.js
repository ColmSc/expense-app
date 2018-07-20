import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import LoadingPage from './components/LoadingPage';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }  
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});









// store.dispatch(addExpense({ description: 'Water Bill', amount: 100, createdAt: 1000  }));
// store.dispatch(addExpense({ description: 'Gas Bill', amount: 300, createdAt: 9992000 }));
// store.dispatch(addExpense({ description: 'Rent Bill', amount: 543534, createdAt: 104300  }));
// store.dispatch(setTextFilter(''));

// setTimeout(() => {
//     store.dispatch(setTextFilter(''));
// }, 3000)

// const state = store.getState();
// const visbibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visbibleExpenses);

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });
