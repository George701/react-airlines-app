import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Login } from './Login';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
    const props = {
        getAuthenticated: jest.fn(),
        getCredentials: jest.fn(),
    }
  
    const enzymeWrapper = shallow(<Login {...props} />)
  
    return {
      props,
      enzymeWrapper
    }
  }

describe('Login component', () => {
    it('<Login/>', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper).toBeDefined();
        expect(enzymeWrapper.find('h1').text()).toBe('Login');
    })

    it('Button and function', () => {
        const { enzymeWrapper } = setup();
        const loginButton = enzymeWrapper.find('button');
        expect(loginButton.text()).toBe(' Login');
        expect(loginButton.getElement().props.onClick).toBeDefined();
    })
})