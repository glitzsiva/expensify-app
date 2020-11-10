import React from 'react';
import {shallow} from 'enzyme';
import ExpensesForm from '../../component/ExpensesForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Expenses Form empty value ',()=>{
    const wrapper =shallow(<ExpensesForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Expenses Form expenses value ',()=>{
    const wrapper =shallow(<ExpensesForm expense={expenses[2]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Form on submit event in test ',()=>{
    const wrapper = shallow(<ExpensesForm />);
    expect(wrapper).toMatchSnapshot();

    wrapper.find('form').simulate('submit',{preventDefault:()=>{}});
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();

    // wrapper.find('form').simulate('submit',{preventDefault:()=>{}});
    // expect(wrapper.state('error').length).toEqual(0);
    // expect(wrapper).toMatchSnapshot();
});

test('form description on change',()=>{
    const value='new desc';
    const wrapper = shallow(<ExpensesForm />);
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});


test('form note TEXT AREA onchange',()=>{
    const value='new note';
    const wrapper = shallow(<ExpensesForm />);
    wrapper.find('textarea').simulate('change',{
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('form amount on change valid',()=>{
    const value='123.22';
    const wrapper = shallow(<ExpensesForm />);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});


test('form amount on change invalid',()=>{
    const value='123.222';
    const wrapper = shallow(<ExpensesForm />);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe('');
    expect(wrapper).toMatchSnapshot();
});


test('form on submission using spies',()=>{
    const onSubmitSpy=jest.fn();
    const wrapper =shallow(<ExpensesForm  expense={expenses[2]} onSubmitCreate={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[2].description,
        note:expenses[2].note,
        amount:expenses[2].amount,
        createdAt:expenses[2].createdAt
    });
});


test('on date change the Single Date Picker',()=>{
   
    const now=moment();
    const wrapper =shallow(<ExpensesForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now)
});

test('on focus change the Single Date Picker',()=>{
    
    const CalendarFocused=true;
    const wrapper =shallow(<ExpensesForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')(CalendarFocused);
    expect(wrapper.state('CalendarFocused')).toEqual(true)
});