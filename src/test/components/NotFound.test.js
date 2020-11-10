import React from 'react';
import {shallow} from 'enzyme';
import NotFound from '../../component/NotFound';

test( 'Not found Error Page',()=>{
    const wrapper =shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
});