import moment from 'moment';


export default [
    {
        id:'1',
        description :'rent',
        amount:1000,
        note:'rent amount',
        createdAt:moment(0).valueOf()
    },
    {
        id:'12',
        description :'rents',
        amount:10000.10,
        note:'rents amounts',
        createdAt:moment(0).add(4 , 'days').valueOf()
    },
    {
        id:'123',
        description :'bill',
        amount:100000,
        note:'bill amounts',
        createdAt:moment(0).subtract(4,'days').valueOf()
    }
] ;