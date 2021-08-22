import { mount, shallow } from "enzyme"
import { HomeScreen } from "../../components/09-useContext/HomeScreen";
import { UserContext } from "../../components/09-useContext/UserContext";

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });


describe('tests on <HomeScreen />', () => {

    const user = {
        name: "mati!!!!",
        email: "random@random.com"
    }


    const wrapper = mount(
        <UserContext.Provider value={{
            user: user

        }} >
            <HomeScreen />
        </UserContext.Provider>
    );


    test('should display properly', () => {

        expect(wrapper).toMatchSnapshot();

        
    })
    
    
})
