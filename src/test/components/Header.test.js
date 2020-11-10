import React from 'react';
import Header from '../../component/Header';
import {shallow} from 'enzyme';

// import ReactShallowRenderer from 'react-test-renderer/shallow';

test('component Header render',()=>{

    const wrapper =shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    // const renderer= new ReactShallowRenderer();
    // renderer.render(<Header/>)
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});