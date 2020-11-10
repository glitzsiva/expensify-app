import React from 'react';
import {connect} from 'react-redux';
import { editExpenses, removeExpenses } from '../actions/expenses';
import ExpensesForm from './ExpensesForm';


const EditExpenses=(props)=>{

    return(
        <div>
            <p>editExpenses{props.match.params.id}</p>
            <ExpensesForm                 
                expense={props.expense}
                onSubmitCreate={
                    (expense)=>{             // props.expense.id also access for edit expenses
                        props.dispatch(editExpenses(props.match.params.id,expense));
                        props.history.push('/')
                    }
                }
            />
            <button onClick={
                ()=>{
                    props.dispatch(
                        removeExpenses(
                            {id:props.match.params.id} 
                        )
                    )
                    props.history.push('/')
            }}>
                Remove
            </button>
        </div>
);

}
   
const mapStateToProps=(state,props)=>({expense:state.expenses.find((expense) => expense.id === props.match.params.id )})
export default connect(mapStateToProps)(EditExpenses);