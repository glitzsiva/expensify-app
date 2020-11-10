import React from 'react';
import {connect} from 'react-redux';
import ExpensesForm from './ExpensesForm';
import {addExpenses} from '../actions/expenses'



const AddExpense=(props)=>(
    <div> 
        add Expenses page
        <ExpensesForm 
            onSubmitCreate={(expense)=>{
                    props.dispatch(addExpenses(expense));
                    props.history.push('/');
                }
            }
            
        />
    </div>
);
 export default connect()(AddExpense);