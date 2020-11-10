import { createStore } from 'redux';


const incrementCnt=( {incrementBy = 1 }={})=>({type:'INCREMENT',incrementBy});
const decrementCnt=( {decrementBy = 1 }={})=>({type:'DECREMENT',decrementBy})

const cntReducers=(state = {count:0} , action)  =>{
    
    switch (action.type) {
        case 'INCREMENT':
            return {
                count:state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count:state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count:0
            };

        default:
           return state;
    }

}
const store=createStore(cntReducers)
const unsubscribe = store.subscribe(()=>
    {
        console.log(store.getState())
    }
);
store.dispatch(incrementCnt())
store.dispatch(incrementCnt({incrementBy:10}))
store.dispatch(decrementCnt({decrementBy:5}))
unsubscribe();
store.dispatch({
    type:'RESET'
});
