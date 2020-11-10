


//expenses Reducers DefaultState

const expensesReducersDefaultState=[];

//expenses Reducers

export default (state=expensesReducersDefaultState, action)=>{

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