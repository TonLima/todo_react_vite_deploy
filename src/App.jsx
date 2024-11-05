import { useState } from "react";
import Todo from "./componentes/Todo";
import TodoForm from "./componentes/TodoForm";
import Search from "./componentes/Search";

import "../src/App.css"
import Filter from "./componentes/Filter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");



  const addTodo = (text, category) => {

    const newToDos = [...todos, {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    }];

    setTodos(newToDos);

  };


  const removeToDo = (id) => {

    const newToDos = [...todos]
    const filterToDos = newToDos.filter((todo) =>
     todo.id !== id ? todo : null
     );
     setTodos(filterToDos);

  };

  const completeToDo = (id) => {
    const newToDo = [...todos]
    newToDo.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
    );
    setTodos(newToDo);
  };

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />

      <div className="todo-list">

        {todos
        .filter((todo) => filter === "All" 
        ? true : filter === "Completed" 
        ? todo.isCompleted 
        : !todo.isCompleted
        )

        .filter((todo) =>
         todo.text.toLowerCase().includes(search.toLowerCase())
        )

        .sort((a, b) => 
         sort === "Asc" 
          ? a.text.localeCompare(b.text) 
          : b.text.localeCompare(a.text) 
          
        )

        .map((todo) => (
          <Todo 
          key={todo.id} 
          todo={todo}
          removeToDo={removeToDo} 
          completeToDo={completeToDo} 
        />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
