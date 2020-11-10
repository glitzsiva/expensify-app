import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../component/ExpenseList';
import expense from '../fixtures/expenses'


test('Expenses List',()=>{
    const wrapper = shallow(<ExpenseList expenses={expense}/>);
    expect(wrapper.find('h1').text()).toEqual('Expense List')
    expect(wrapper).toMatchSnapshot();
})