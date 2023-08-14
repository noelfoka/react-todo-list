import InputTodo from "@/components/InputTodo";
import TodoList from "@/components/TodosList";
import { useState } from "react";

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "setup development environment",
      completed: true,
    },
    {
      id: 2,
      title: "Develop website and add content",
      completed: false,
    },
    {
      id: 3,
      title: "Deploy to live server",
      completed: true,
    },
  ]);

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  return (
    <div>
      <InputTodo />
      <TodoList
        todosProps={todos}
        setTodos={setTodos}
        handleChange={handleChange}
        delTodo={delTodo}
      />
    </div>
  );
};

export default TodosLogic;
