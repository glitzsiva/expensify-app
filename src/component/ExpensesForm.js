import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';



export default class ExpensesForm extends React.Component{
    
    constructor(props){
        super(props);

        this.state={
            description:props.expense? props.expense.description:'',
            note:props.expense? props.expense.note:'',
            amount:props.expense? props.expense.amount.toString():'',
            createdAt:props.expense? moment(props.expense.createdAt):moment(),
            CalendarFocused:false,
            error:''
    
        }
    }
    // state={
    //     description:props.expense ? props.description:'',
    // }


    changeDescription=(e)=>{
        const description=e.target.value;
        this.setState(()=>({description}));
    }
    changeNote=(e)=>{
        const note=e.target.value;
        this.setState(()=>({note}));
    }
    changeAmount=(e)=>{
        const amount=e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}));
        }
        
    }
    onDateChange=(createdAt)=>{
        if(createdAt){
            this.setState(()=>({createdAt}))
        }
    }
    onFocusChange=()=>{
        this.setState(()=>({CalendarFocused:true}))
    }
    onSubmitExpenses=(e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({error:'please provide details'}))           
        }
        else{
            this.setState(()=>({error:''}))
            this.props.onSubmitCreate({
                description:this.state.description,
                amount:parseFloat(this.state.amount),
                note:this.state.note,
                createdAt:this.state.createdAt.valueOf()
            })
        }
    }

    render(){
        return (
            <div>

                {this.state.error && <h1>{this.state.error}</h1>}
                <form onSubmit={this.onSubmitExpenses}>
                    <input 
                        type='text'  
                        placeholder='Description' 
                        autoFocus 
                        value={this.state.description}
                        onChange={this.changeDescription}
                    />
                    <input 
                        type='number' 
                        placeholder='Amount' 
                        value={this.state.amount}
                        onChange={this.changeAmount}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt} 
                        onDateChange={this.onDateChange} 
                        focused={this.state.CalendarFocused}
                        onFocusChange={this.onFocusChange}
                        isOutsideRange={()=> false}
                        numberOfMonths={1}
                    />

                    <textarea 
                        placeholder='add notes about your (Optional)'
                        value={this.state.note}
                        onChange={this.changeNote}
                    >
                    </textarea>
                    <button> Add Expenses</button>
                </form>
            </div>           
        )
    }
}