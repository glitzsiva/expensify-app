import {setEndDate,setStartDate,setTextFilter, sortByAmount,sortByDate,s} from '../../actions/filters';
import moment from 'moment';


/// end date
test('tesst end date',()=>{
    const action =setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
})


//start date
test('tesst start date',()=>{
    const action =setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    })
})


///text filter with default empty
test('test test filter',()=>{
    const action =setTextFilter();
    expect(action).toEqual({
        type:'TEXT_FILTER',text:''
    })
});


//text filter
test('test test filter',()=>{
    const action =setTextFilter('text');
    expect(action).toEqual({
        type:'TEXT_FILTER',text:'text'
    })
});


// sort by date
test('sort by date',()=>{
    const action =sortByDate('1000');
    expect(action).toEqual({
        type:'SORT_BY_DATE',
    })
})


// sort by date
test('sort by date',()=>{
    const action =sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE',
    })
});


// sort by amount
test('sort by amount',()=>{
    const action =sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT',
    })
})
