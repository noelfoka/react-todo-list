import InputTodo from "@/components/InputTodo";
import TodoList from "@/components/TodosList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "setup development environment",
      completed: true,
    },
    {
      id: uuidv4(),
      title: "Develop website and add content",
      completed: false,
    },
    {
      id: uuidv4(),
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

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
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
