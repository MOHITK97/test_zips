import React from 'react';
import Login from "./Login"
import { shallow } from 'enzyme';
import { useGoogleLogin } from '@react-oauth/google'; 
 

import {shallow, render, mount} from 'enzyme';

it('Test case for login', () => {
  const mockFunc = jest.fn();
  const info = {};

  const wrapper = shallow(<useGoogleLogin parentCallback={mockFunc} />);
  wrapper.dive().simulate('press');
  expect(wrapper).toMatchSnapshot();
  //expect(mockFunc).toHaveBeenCalledTimes(1);
});

describe('Test case for login',() =>{
  let wrapper;
  
  it('login check with wrong data',()=>{
    wrapper = shallow(<Login/>); 
    wrapper.find('button').simulate('click');
    //expect(useGoogleLogin.onSuccess.codeResponse).toBe(1);
  })
})