import { shallow } from 'enzyme'
import React from 'react'
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks'
import { useCounter } from '../../../hooks/useCounter'
import { useFetch } from '../../../hooks/useFetch'


jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')



describe('test in <MultipleCustomHooks />', () => {

    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        })
    })
    

    test('should display properly', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect(wrapper).toMatchSnapshot();
        
    })


    test('should display the information', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Mati',
                quote: 'hello world'
            }],
            loading: false,
            error: null
        })

        const wrapper = shallow( <MultipleCustomHooks /> );

        expect(wrapper.find('.alert').exists()).toBe(false)
        expect(wrapper.find('p').text().trim()).toBe('hello world')
        expect(wrapper.find('footer').text().trim()).toBe('Mati')

        console.log(wrapper.html())
        
    })
    
    
})
