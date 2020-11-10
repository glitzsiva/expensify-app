import React from 'react';
import {shallow} from 'enzyme';
import ExpensesDashboard from '../../component/ExpensesDashboard';

test('expenses Dasboard ',()=>{
    const wrapper =shallow(<ExpensesDashboard />);
    expect(wrapper).toMatchSnapshot();
})