import { mount } from 'enzyme';
import React from 'react';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { AppRouter } from '../../components/09-useContext/AppRouter';
import { UserContext } from '../../components/09-useContext/UserContext';

Enzyme.configure({ adapter: new Adapter() });


describe('test with <AppRouter />', () => {

    const user = {
        id: 1,
        name: 'mati'
    }


    const wrapper = mount (
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter /> 
        </UserContext.Provider>

        );


    test('should display properly', () => {

        expect(wrapper).toMatchSnapshot();
        
    })
    
    
})
