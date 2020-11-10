import filters from '../../reducers/filters';
import moment from 'moment'


/// sort by default value

test('filtering by default values', ()=>{
    const action =filters(undefined, {type:'@@INIT'});
    expect(action).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month'),
    });
})


/// filter by date   

test('filtering by date',()=>{
    const state={
        text:'',
        sortBy:'amount',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month'),
    }
    const action =filters(state,{type:'SORT_BY_DATE'})
    expect(action.sortBy).toEqual('date')
})

/// filter by amount

test('filtering by amount',()=>{

    const action =filters(undefined,{type:'SORT_BY_AMOUNT'})
    expect(action.sortBy).toEqual('amount')
})


// filter by text


test('filtering by text',()=>{
    const text='test'
    const action =filters(undefined,{type:'TEXT_FILTER',text})
    expect(action.text).toEqual(text)
});



// filter by start date


test('filtering by start date',()=>{
    const text=moment(0).add(2,'days').valueOf()
    const action =filters(undefined,{type:'TEXT_FILTER',text})
    expect(action.text).toEqual(text)
});


// filter by end date


test('filtering by end',()=>{
    const text=moment(0).subtract(2,'days').valueOf()
    const action =filters(undefined,{type:'TEXT_FILTER',text})
    expect(action.text).toEqual(text)
});