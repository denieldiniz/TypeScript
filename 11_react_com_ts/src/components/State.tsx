// tsrsfc
// import * as React from "react";
// import { useState } from "react";
import React, { useState, ChangeEvent } from "react";

const State = () => {
  const [text, setText] = useState<string | boolean>("Testando o hook");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h3>O texto é (aula 6): "{text}"</h3>
      <p>
        <input type="text" onChange={handleChange} />
      </p>
    </div>
  );
};

export default State;
