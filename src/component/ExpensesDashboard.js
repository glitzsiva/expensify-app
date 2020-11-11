import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensesListFilters from './ExpensesListFilters';
import ExpensesSummary from './ExpensesSummary';



const ExpenseDashboard=()=>(
    <div> 
        Dasboard page
        <ExpensesSummary />
        <ExpensesListFilters />
        <ExpenseList />
        
    </div>
);


export default ExpenseDashboard;