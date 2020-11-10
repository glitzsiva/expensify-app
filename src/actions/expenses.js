import uuid from 'uuid';



//Add Expenses
export const addExpenses=(
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
export const removeExpenses=(
    ({id})=>({
        type:'REMOVE_EXPENSES',
        id
    })
);

// Edit expenses
export const editExpenses=(
    (id,updates)=>({
        type:'EDIT_EXPENSES',
        id,
        updates  
    })
);