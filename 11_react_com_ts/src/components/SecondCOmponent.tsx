// 05 second component
// tsrsfc

import * as React from "react";

interface ISecondComponentProps {
  nome: string;
}

const SecondComponent: React.FunctionComponent<ISecondComponentProps> = (props) => {
  return (
    <div>
      <h3>Esse é o segundo componente e ele se chama {props.nome}. (aula 05)</h3>
    </div>
  );
};

export default SecondComponent;
