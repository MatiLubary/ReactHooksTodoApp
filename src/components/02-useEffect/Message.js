import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y:0 })
    const {x, y} = coords

    useEffect(() => {


        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y }
            setCoords(coords);
        }


        window.addEventListener("mousemove", mouseMove)

        console.log("component mounted")
        
        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])


    return (
        <>
            <h3>You cool!</h3>
            <p>X: {x} Y: {y}</p>

        </>
    )
}
