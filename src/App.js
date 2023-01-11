import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import AddToDo from "./components/addToDo";
import ToDoList from "./components/toDoList";

function App() {

  const [newToDo, setNewToDo] = useState([]);

  return (
    <div className="App">
      <Header />
      <AddToDo newToDo={newToDo} setNewToDo={setNewToDo}/>
      <ToDoList newToDo={newToDo} />
    </div>
  );
}

export default App;
