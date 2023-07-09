//components
import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

// CSS
import styles from "./App.module.css";

//interfaces
import { Task } from "./interfaces/Task";

function App() {
  return (
    <div>
      <Header />

      <main className={styles.main}>
        <TaskForm btnText="Criar Tarefa" />
        <TaskList />
      </main>

      <Footer />
    </div>
  );
}

export default App;

// https://vscode.dev/profile/github/aff4c0f8ab28b56c2c8b0817b728d92a
