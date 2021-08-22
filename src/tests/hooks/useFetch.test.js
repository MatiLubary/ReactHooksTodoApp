import { waitForNextUpdate } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";



describe('tests in useFetch', () => {


    test('should return info by default', () => {
        
        const {result} = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') )

        const { data, loading, error } = result.current;

        expect(data).toBe(null)
        expect(loading).toBe(true)
        expect(error).toBe(null)

    });


    test('should  have the desired info, loading false and error false', async() => {

        const {result, waitForNextUpdate} = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') )

        await waitForNextUpdate({timeout:5000});

        const { data, loading, error } = result.current;

        expect(data.length).toBe(1)
        expect(loading).toBe(false)
        expect(error).toBe(null)


    })


    test('should  handle the error', async() => {

        const {result, waitForNextUpdate} = renderHook( () => useFetch('https://reqres.in/apid/users?page=2') )

        await waitForNextUpdate({timeout:5000});

        const { data, loading, error } = result.current;

        expect(data).toBe(null)
        expect(loading).toBe(false)
        expect(error).toBe('info could not be loaded')


    })
    
    
    
})
