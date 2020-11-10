import expenses from '../../reducers/expenses';
import moment from 'moment';
import expense from '../fixtures/expenses';
import uuid from 'uuid';
//  sample expenses 

test('sample expenses',()=>{  
    const action =expenses(undefined ,{type:'@@INIT'});
    expect(action).toEqual([])
})

// Remove Expenses

test('expenses remove',()=>{
    const action = expenses(expense,{type:'REMOVE_EXPENSES',id:'12'})
    expect(action).toEqual([expense[0],expense[2]])
});


// Edit Expenses


test('edit Expenses',()=>{                       /// id:expense[0].id
    const action= expenses(expense, {type:'EDIT_EXPENSES',id:'1',updates:{note:'12333'}})
    expect(action[0].note).toEqual('12333')
})



/// edit ID NOt found
test('edit Expenses',()=>{                       /// id:expense[0].id
    const action= expenses(expense, {type:'EDIT_EXPENSES',id:'5',updates:{note:'12333'}})
    expect(action[0].note).toEqual(expense[0].note)
});



// ADD expenses


test('add espenses ',()=>{
    const action =expenses(expense,{type:'ADD_EXPENSES',expenses:{
        id:'1234',
        note:'this test to addd expense',
        description:'des',
        amount:12333,
        createdAt:moment(0)
    }});
    expect(action).toEqual([...expense,{
        id:'1234',
        note:'this test to addd expense',
        description:'des',
        amount:12333,
        createdAt:moment(0)
    }])
})

// const state ={
//     note:'this is test',
//     description:'test',
//     createdAt:moment(0).valueOf(),
//     amount:100
// }