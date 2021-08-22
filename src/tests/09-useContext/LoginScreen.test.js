import React from 'react';
import {mount} from 'enzyme'
import { LoginScreen } from '../../components/09-useContext/LoginScreen';
import { UserContext } from '../../components/09-useContext/UserContext';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });


describe('test with <LoginScreen />', () => {

    const setUser = jest.fn()

    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    )
    test('should display properly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('should execute setUser with the expected argument', () => {
        
        wrapper.find("button").prop("onClick")();

        expect(setUser).toHaveBeenCalledWith({
            id: 123,
            name: "mati"
        })
    })
    
    
    
})
