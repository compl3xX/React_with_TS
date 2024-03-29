import { useTodo } from "../context/useTodo";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodo();

  if (!todos.length) {
    return (
      <div className="max-w-lg px-5 m-auto">
        <h1 className="flex flex-col items-center gap-5 px-5 py-10 text-xl font-bold text-center rounded-xl">
          You have nothing to do!
        </h1>
      </div>
    );
  }
  return (
    <ul className="grid max-w-lg gap-2 px-5 m-auto">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
