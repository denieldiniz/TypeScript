import React from "react";
// import logo from './logo.svg';
// import './App.css';
import { FirstComponent } from "./components/FirstComponent"; // da aula 04

function App() {
  //------------------------------------------------------
  // 01 - Variáveis
  const nome: string = "Deniel";
  const idade: number = 41;
  const trabalhando: boolean = true;

  //------------------------------------------------------
  // 02 - Funções
  const saudacao = (nome: string): string => {
    return `Olá ${nome}!`;
  };

  //------------------------------------------------------
  // 03 -

  //------------------------------------------------------
  // 04 - Importação de componentes

  //------------------------------------------------------
  // 05 -

  //------------------------------------------------------
  // 06 -

  //------------------------------------------------------
  // 07 -

  //------------------------------------------------------
  // 08 -

  //------------------------------------------------------
  // 09 -

  //------------------------------------------------------
  // 10 -

  return (
    <div className="App">
      <h1>Typescript com React</h1>

      {/* 01 -------------------------*/}
      <h2>Nome: {nome}</h2>
      <h3>idade: {idade}</h3>
      <h3>
        {trabalhando && (
          <div>
            <p>Está trabalhando!</p>
          </div>
        )}
      </h3>

      {/* 02 -------------------------*/}
      <h3>{saudacao(nome)} </h3>

      {/* 04 -------------------------*/}
      <FirstComponent />
      <FirstComponent />
    </div>
  );
}

export default App;
