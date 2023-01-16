import React from 'react'

import products from '../data/products'

function Repeticao (props) {

    function getProductsList() {
        return products.map(function(prod) {
            return ( 
            <li key={prod.id}>
                {prod.id} | {prod.name} | {prod.value}
            </li>
            )
        })
    }

    return (
        <div>
            <h2>Repeticao</h2>
            <ul>
                {getProductsList()}
            </ul>
        </div>
    )

}

export default Repeticao