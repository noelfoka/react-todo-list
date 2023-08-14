import InputTodo from "@/components/InputTodo";
import TodoList from "@/components/TodosList";

const TodosLogic = () => {
  const todos = [
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
  ];

  return (
    <div>
      <InputTodo />
      <TodoList todosProps={todos} />
    </div>
  );
};

export default TodosLogic;
