import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from  './componentes/PrimeiroComponente'
// import  CompA, { CompB as B}  from './componentes/DoisComponenentes'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
// import ComponenteClasse from './componentes/ComponenteClasse'
// import Contador from './componentes/Contador'
import Hook from './componentes/Hook'

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <Hook />
        {/* <Contador numeroInicial={100} /> */}
        {/* <ComponenteClasse valor='Eric' /> */}
        {/* <Pai /> */}
        {/* <ComponenteComFuncao /> */}
        {/* <Familia sobrenome="Pereira">
            <Membro nome="André" />
            <Membro nome="Mariana" />
        </Familia> */}

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