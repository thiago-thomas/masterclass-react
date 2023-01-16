import React from "react";
import './App.css'

import First from './components/First';
import ComParametro from './components/ComParamentro';
import Filhos from './components/Filhos';
import Card from './components/layout/Card';
import Repeticao from "./components/Repeticao";
import Condicional from "./components/Condicional"
import CondicionalIf from "./components/CondicionalIf";

function App(props) {
    return (
    <div className="App">
        <Card header="Exercicio 01">
            <First />
        </Card>
        
        <Card header="Exercicio 02">
            <ComParametro titulo="01-Meu Titulo" />
            <ComParametro titulo="02-Meu Segundo Titulo" />
        </Card>

        <Card header="Exercicio 03">
            <Filhos>
                <p>Teste</p>
                <p>Teste 2</p>
                <p>Teste 3</p>
            </Filhos>
        </Card>

        <Card header="Exercicio 04">
            <Repeticao />
        </Card>

        <Card header="Exercicio 05">
            <Condicional numero={88} />
        </Card>

        <Card header="Exercicio 06">
            <CondicionalIf numero={10} />
        </Card>
    </div>
    )
}

export default App;