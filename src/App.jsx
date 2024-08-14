import React, { useRef, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { DragDropContext } from "react-beautiful-dnd";
import { SiTrueup } from "react-icons/si";

const App = () => {
  const [todo, setTodo] = useState({
    title: "",
    isDone: false,
  });
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  // const inputRef = useRef(null);

  const handleAdd = (e) => {
    e.preventDefault();

    if (todo.title) {
      const newTodo = {
        id: Date.now(),
        todo: todo.title,
        isDone: todo.isDone,
      };
      setTodos([...todos, newTodo]);
      setTodo({
        title: "",
        isDone: false,
      });
    }
  };

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = [...todos];
    let complete = [...completedTodos];

    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App"
      
      >
        <h1 className="heading">Drag-and-Drop</h1>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
