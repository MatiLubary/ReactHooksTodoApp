import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";


describe('tests in useForm', () => {

    const initialForm = {
        name: 'mati',
        email: 'test@test.com'
    };





    test('should return a form by default', () => {
        //values?

        const { result } = renderHook( () => useForm(initialForm) ) 

        const [formValues, handleInputChange, reset] = result.current;

        expect( formValues ).toEqual( initialForm )
        expect( typeof handleInputChange ).toBe( 'function' )
        expect( typeof reset ).toBe( 'function' )

    })


    test('should change the value of the form (change name)', () => {
        // handleInputChange? should have same values from initialForm only with dif. name


        const { result } = renderHook( () => useForm(initialForm) ) 

        const [ , handleInputChange, reset] = result.current;

        act( () => {

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });

        });


        const [formValues] = result.current;
        expect(formValues).toEqual( { ...initialForm, name: 'Melissa' } )
        
    });
    


    test('should reset the form with the reset button', () => {
        //use test above and then reset and check that values are still the initial ones.


        const { result } = renderHook( () => useForm(initialForm) ) 

        const [ , handleInputChange, reset] = result.current;

        act( () => {

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });

            reset();

        });


        const [formValues] = result.current;
        expect(formValues).toEqual( initialForm )


    })
    
    


    
})
