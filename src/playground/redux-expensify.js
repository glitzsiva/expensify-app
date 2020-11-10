import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';



//Add Expenses
const addExpenses=(
    {
        note='',
        amount=0, 
        description='',
        createdAt=0
    }={}
    )=>({
        type:'ADD_EXPENSES',
        expenses:{
            id:uuid(),
            note,
            amount, 
            description,
            createdAt
        }
});

//Remove Expenses
const removeExpenses=(
    ({id})=>({
        type:'REMOVE_EXPENSES',
        id
    })
);

// Edit expenses
const editExpenses=(
    (id,updates)=>({
        type:'EDIT_EXPENSES',
        id,
        updates  
    })
);

//Text Filter

const setTextFilter=( text = '' ) => ({
    type:'TEXT_FILTER',
    text,
});

// Sort by date

const sortByDate=(date='')=>({
    type:'SORT_BY_DATE',
    date
});

// sort by date

const sortByAmount=(amount='')=>({
    type:'SORT_BY_AMOUNT',
    amount
});

// Start Date

const endDate=(endDate)=>({
    type:'END_DATE',
    endDate
});

// Start Date

const startDate=(startDate)=>({

    type:'START_DATE',
    startDate
});

//expenses Reducers DefaultState

const expensesReducersDefaultState=[];

//expenses Reducers

const expensesReducers =(state=expensesReducersDefaultState, action)=>{

    switch(action.type){
        case 'ADD_EXPENSES':
            {
                return [
                    ...state,action.expenses
                ]
            }
        case 'REMOVE_EXPENSES':
            {
                return state.filter(({id}) => id !== action.id)
            }
        case 'EDIT_EXPENSES':
            {
                return state.map((expenses)=> {
                    if (expenses.id !== action.id){
                        return expenses;          
                    } 
                    else{
                        return {...expenses,...action.updates}
                    }
                });
            }
        default:
            {
                return state
            }
    }
}

// filters Default State
const filtersDefaultState={
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate:undefined ,
};

//filters  Reducers
const filtersReducers=(state=filtersDefaultState,action)=>{
    switch(action.type){

        case 'TEXT_FILTER':
            return {
                
                ...state,
                text: action.text
              };
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy:action.date
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy:action.amount
            }
        case 'START_DATE':
            return {
                ...state,
                startDate:action.startDate
            }
        case 'END_DATE':
            return {
                ...state,
                endDate:action.endDate
            }
        default:
            {
                return state
            }
    }
}

// create a store 
const store =createStore(
    combineReducers({
        expenses:expensesReducers,
        filters:filtersReducers
    })
);

const visibleExpensesFilters=(expenses,{startDate,endDate,text,sortBy})=>{
    return expenses.filter((expense)=>{
        const startDateMatch=  typeof startDate !== 'number'|| expense.createdAt >= startDate;
        const endDateMatch=  typeof endDate !== 'number'|| expense.createdAt <= endDate;
        const textMatch= typeof text !== 'string'||expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt < b.createdAt ?-1:1;
        }
        else if(sortBy==='amount'){
            return a.amount < b.amount ? -1:1;
        }
    })
    
}


// subscribe
store.subscribe( ()=>
    {
        const state= store.getState();
        const visibleExpenses= visibleExpensesFilters(state.expenses,state.filters) 
        console.log(visibleExpenses, store.getState())
    } 
);



// adding expenses
const oneExpense =store.dispatch(addExpenses(
    {note: 'this is test expenses',amount:55500,description:'rent of january',createdAt:9000}
));
const twoExpense =store.dispatch(addExpenses(
    {note: 'test ',amount:500,description:'rent ',createdAt:1000}
));

//removing expenses

// store.dispatch(removeExpenses(
//     {
//         id: oneExpense.expenses.id
//     }
// ));

//editing Expenses

// store.dispatch(editExpenses(twoExpense.expenses.id,{note: 'test control',amount:300}));

// filters


// store.dispatch(setTextFilter('not'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByDate('date'));
// store.dispatch(sortByAmount('amount'));
// store.dispatch(startDate(1));
// store.dispatch(endDate(900));




const demoState={
    expenses:[{
        id :'someWhatId',
        note: 'this is test expenses',
        amount:55500,
        description:'rent of january',
        createdAt:0
    }],
    filters:{
        text:'january',
        sortBy: 'amount',//date
        startDate: undefined,
        endDate:undefined ,
    }
}
