// componente desestruturado

import * as React from "react";

interface Props {
  titulo: string;
  conteudo: string;
  numComentarios: number;
  tags: string[];
}

const Desestruturado: React.FunctionComponent<Props> = ({ titulo, conteudo, numComentarios, tags }: Props) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>{conteudo}</p>

      <div>
        {tags.map((tag) => (
          <span>#{tag} </span>
        ))}
      </div>

      <p>{numComentarios} comentários</p>
    </div>
  );
};

export default Desestruturado;
