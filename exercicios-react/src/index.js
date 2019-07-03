import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from  './componentes/PrimeiroComponente'
// import  CompA, { CompB as B}  from './componentes/DoisComponenentes'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <Familia sobrenome="Pereira">
            <Membro nome="André" />
            <Membro nome="Mariana" />
        </Familia>

        {/* <MultiElementos /> */}
        {/* <PrimeiroComponente valor='Eric'/> */}
        {/* <CompA valor="Olá sou o A" />
        <B valor="B no pedaço" /> */}
        {/* <FamiliaSilva sobrenome="Silva Pereira" />  */}
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