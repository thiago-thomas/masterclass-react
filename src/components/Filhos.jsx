import React from 'react'

function Filhos (props) {
    return (
        <div>
            <h2>Os Filhos: </h2>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Filhos