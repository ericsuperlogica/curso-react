import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from  './componentes/PrimeiroComponente'

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <PrimeiroComponente/>
    </div>
    ,elemento)

// const jsx = <h1>Olá Eric </h1>
// ReactDOM.render(jsx,elemento)
// ReactDOM.render(
// <ul>
//     <li>1) Eric </li>
//     <li>2) Rita </li>
//     <li>3) Luis </li>
// </ul>
// ,elemento)