


//Text Filter

export const setTextFilter=( text = '' ) => ({
    type:'TEXT_FILTER',
    text,
});

// Sort by date

export const sortByDate=()=>({
    type:'SORT_BY_DATE',
});

// sort by date

export const sortByAmount=()=>({
    type:'SORT_BY_AMOUNT',
});

// Start Date

export const setEndDate=(endDate)=>({
    type:'SET_END_DATE',
    endDate
});

// Start Date

export const setStartDate=(startDate)=>({

    type:'SET_START_DATE',
    startDate
});