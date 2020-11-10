import {addExpenses,editExpenses ,removeExpenses} from '../../actions/expenses';


test('edit expenses', ()=>{
    const result =editExpenses('123',{note:'hi'});
    expect(result).toEqual(
        {
            type:'EDIT_EXPENSES',
            id:'123',
            updates:{               
                note:'hi'
            }
        }
    )
})


/// Add expenses 
test('add expenses', ()=>{
    const expenseData={
        note:'hi',
        description:'123',
        createdAt:156,
        amount:12345
    }
    const result =addExpenses(expenseData);
    expect(result).toEqual(
        {
            type:'ADD_EXPENSES',
            expenses:{
                id:expect.any(String),
                ...expenseData,      
            }
        }
    )
})



/// Add expenses default value
test('add expenses', ()=>{
    
    const result =addExpenses();
    expect(result).toEqual(
        {
            type:'ADD_EXPENSES',
            expenses:{
                id:expect.any(String),
                note:'',
                description:'',
                createdAt:0,
                amount:0   
            }
        }
    )
})