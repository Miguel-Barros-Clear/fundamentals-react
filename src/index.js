import ReactDOM from 'react-dom'
import React from 'react'

import './index.css'

import First from './components/basics/first'
import Secund from './components/basics/secund'

ReactDOM.render(
    <div>
        <First />
        <Secund
            title="Situação do aluno"
            subTitle="Very good!"
            aluno="Pedro"
            nota={9.3}
        />
        <Secund
            title="Situação do aluno"
            subTitle="Very good!"
            aluno="Maria"
            nota={9.9}
        />
    </div>
    , document.getElementById('root'))