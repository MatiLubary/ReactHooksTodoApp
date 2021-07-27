import React from 'react'

export const Small = React.memo(({value}) => {

    console.log("I was called again :(")
    // what if we had http? petions?? no bueno... it would be called again.

    return (
        <p>{value}</p>
    )
});
