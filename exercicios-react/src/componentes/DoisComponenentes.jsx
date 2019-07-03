import React from 'react'

const CompA = props =>
    <h1>Primeiro diz: {props.valor}</h1>

const CompB = props =>
    <h1>Segundo diz: {props.valor}</h1>

// export default function(){
//     return <p>Anonimo </p>
// }

export default CompA
export { CompA,CompB}