import React from "react";
// import logo from './logo.svg';
// import './App.css';
import { FirstComponent } from "./components/FirstComponent";
import SecondComponent from "./components/SecondCOmponent";
import Desestruturado from "./components/Desestruturado";
import State from "./components/State";

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

  return (
    <div className="App">
      <h1>Typescript com React</h1>

      {/* 01 - Variáveis -------------------- */}
      <h3>Nome: {nome} (aula 1)</h3>
      <h4>idade: {idade}</h4>
      <h4>
        {trabalhando && (
          <div>
            <p>Está trabalhando!</p>
          </div>
        )}
      </h4>
      <br />
      <br />

      {/* 02 - Funções ---------------------- */}
      <h3>{saudacao(nome)} (aula 2) </h3>
      <br />
      <br />

      {/* 04 - Importação de componentes ---- */}
      <FirstComponent />
      <br />
      <br />

      {/* 05 - Destructurig nas Props ------- */}
      <SecondComponent nome="SecondComponent" />
      <br />
      <br />

      <Desestruturado
        titulo="Senado aprova Cristiano Zanin como novo ministro do Supremo Tribunal Federal"
        conteudo="O advogado Cristiano Zanin é o novo ministro do Supremo Tribunal Federal. Em data ainda não marcada, ele vai assumir a vaga de Ricardo Lewandowski, que se aposentou em abril. Nesta quarta-feira (21/6), a indicação de Zanin foi aprovada pelo Senado Federal por 58 votos a 18. Mais cedo, ele passou por sabatina na Comissão de Constituição e Justiça da casa, onde teve o nome aprovado por 21 votos a 5."
        numComentarios={5}
        tags={["Zanin", "Senado", "ministro", "supremo", "stf"]}
      />

      <Desestruturado
        titulo="Comerciante que pode ser 4º filho de Gugu"
        conteudo="Filhos do apresentador foram notificados em audiência nesta quarta-feira (21). Advogado que defende Rose Miriam, mãe dos três filhos de Gugu, disse que, se confirmada a paternidade, o testamento feito pelo apresentador em 2011 é invalidado. Gugu morreu em 2019."
        numComentarios={521}
        tags={["Gugu", "apresentador", "Comerciante"]}
      />
      <br />
      <br />

      {/* 06 - UseState(Hook) --------------- */}
      <State />
      <br />
      <br />
    </div>
  );
}

export default App;
