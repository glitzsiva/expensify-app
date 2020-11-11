import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {addExpenses } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate } from './actions/filters';
import visibleExpensesFilters from './selectors/expenses';
import 'normalize.css/normalize.css';
import './Styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';

// STORE
const store =configureStore();
store.subscribe( ()=>
    {
        const state= store.getState();
        const visibleExpenses= visibleExpensesFilters(state.expenses,state.filters) ;
    } 
);


// Expenses ADDING
const oneExpense =store.dispatch(addExpenses(
    {note: 'this is test expenses',amount:55500,description:'water bill',createdAt:9000}
));
const twoExpense =store.dispatch(addExpenses(
    {note: 'this is test expenses',amount:500,description:'Gas bill',createdAt:10000}
));

store.dispatch(addExpenses(
    {note: 'this is test expenses',amount:5500,description:'rent',createdAt:9500}
));


//  fillters


// store.dispatch(setTextFilter('bill'));

// // store.dispatch(sortByDate('date'));
// // store.dispatch(sortByAmount('amount'));

// setTimeout(()=>
// {
//     store.dispatch(setTextFilter('gas'));
// }
// ,10000)


const jsx =(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx ,document.getElementById('app'));



