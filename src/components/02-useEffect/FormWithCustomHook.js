import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import "./effects.css"


export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: "",
        email: "",
        password: ""
    })

    const {name, email, password} = formValues

    useEffect ( () => {
        console.log("email changed")
    }, [email]);


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues)
    }


    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="your name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group mt-10">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@random.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>


            <div className="form-group mt-10">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*****"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

        <button type="submti" className="btn btn-primary mt-10">
            Save
        </button>


        </form>
    )
}