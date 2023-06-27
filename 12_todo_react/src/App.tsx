import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import styles from "./App.module.css";
function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <p>formulário</p>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <p>lista</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

// https://vscode.dev/profile/github/aff4c0f8ab28b56c2c8b0817b728d92a
