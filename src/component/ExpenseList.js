import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItems from './ExpenseListItems';
import visibleExpensesFilters from '../selectors/expenses';

export const ExpenseList =(props)=>(
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.length >0 &&
            props.expenses.map((expense)=> <ExpenseListItems key={expense.id} {...expense} />
        )}
        
    </div>
);

const mapStateToProps =(state)=>{
    return {
        expenses:visibleExpensesFilters(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);