import visibleExpensesFilters from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';



/// start Date filters
test('filters by startDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const action =visibleExpensesFilters(expenses,filters);
    expect(action).toEqual( [expenses[0], expenses[1]] )
});


// text Filters
test('filters by text',()=>{

    const filters={
        text:'r',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const action =visibleExpensesFilters(expenses,filters);
    expect(action).toEqual([expenses[0],expenses[1]])
});


/// end date filters


test('filters by endDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0)
    }
    const action =visibleExpensesFilters(expenses,filters);
    expect(action).toEqual([expenses[2],expenses[0]])
});


// sort by date

test('filters by text',()=>{

    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const action =visibleExpensesFilters(expenses,filters);
    expect(action).toEqual([expenses[2],expenses[0],expenses[1]])
});

// sort by amount 


test('filters by text',()=>{

    const filters={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const action =visibleExpensesFilters(expenses,filters);
    expect(action).toEqual([expenses[0],expenses[1],expenses[2]])
});