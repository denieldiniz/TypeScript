// // tsrsfc	- stateless functional component

// import * as React from "react";

// export interface IAppProps {}

// export default function App(props: IAppProps) {
//   return <div></div>;
// }

// //------------------------------------------------------------------
// // tsdrpfc	- stateless functional component with default export
// import * as React from "react";

// interface IAppProps {}

// const App: React.FunctionComponent<IAppProps> = (props) => {
//   return;
// };

// export default App;

// //------------------------------------------------------------------
// // tsrpfc	- pure function component skeleton

// import * as React from "react";

// export interface IAppProps {}

// export function App(props: IAppProps) {
//   return <div></div>;
// }

import * as R from "react";

export function FirstComponent(): R.ReactElement {
  return (
    <div>
      <h3>Meu primeiro Componente (aula 04)</h3>
    </div>
  );
}
export default FirstComponent;
