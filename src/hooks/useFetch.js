

import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {
    
    const isMounted = useRef(true)
    const [state, setState] = useState({data: null, loading: true, error: null})


    useEffect(() => {
        
        return () => {
            isMounted.current = false;
        }
        
    }, [])


    useEffect(() => {

        setState({data: null, loading: true, error: null})

        fetch(url)
            .then(resp => resp.json())
            .then (data => {

                
                if (data.length === 0) data.push({ 
                    quote: 'No se encuentra el id' 
                });



                    if (isMounted.current) {
                        setState({
                            loading: false,
                            error: null,
                            data
                        })
                    } 
                                        
            })
            .catch(error => setState({
                loading: false,
                error,
                data: null
            }));




    }, [url])

    return state;

}
