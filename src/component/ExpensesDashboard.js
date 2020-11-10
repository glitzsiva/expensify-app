import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensesListFilters from './ExpensesListFilters';



const ExpenseDashboard=()=>(
    <div> 
        Dasboard page
        <ExpensesListFilters />
        <ExpenseList />
        
    </div>
);


export default ExpenseDashboard;