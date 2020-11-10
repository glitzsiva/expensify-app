import React from 'react';
import {shallow} from 'enzyme';
import ExpenseListItems from '../../component/ExpenseListItems';
import expenses from '../fixtures/expenses';


test('Expenses List Items ',()=>{
    const wrapper = shallow( <ExpenseListItems {...expenses[1]} /> );
    expect(wrapper).toMatchSnapshot();
})