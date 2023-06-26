import * as React from "react";
import { appContext } from "../App";

const Context = () => {
  const details = React.useContext(appContext);

  return (
    <>
      {details && (
        <div>
          <h2>Linguagem: {details.language}</h2>
          <h4>Framework: {details.framework}</h4>
          <h4>Qtd projetos: {details.projects}</h4>
        </div>
      )}
    </>
  );
};

export default Context;
