import { nanoid } from "nanoid";
import { createContext, useState } from "react";

interface TodoContextProps {
  todos: Todo[];
  addTodo: (text: string) => void;
  delTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
  updateTodoStatus: (id: string) => void;
}

export interface Todo {
  id: string;
  text: string;
  status: "undone" | "completed";
}

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined
);

export const TodoProvider = (props: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: nanoid(),
      text,
      status: "undone",
    };
    setTodos([...todos, newTodo]);
  };

  const delTodo = (id: string) => {
    const todosAfterDel = todos.filter((todo) => todo.id !== id);
    setTodos(todosAfterDel);
  };

  const editTodo = (id: string, text: string) => {
    const todosAfterEdit = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text };
      }
      return todo;
    });

    setTodos(todosAfterEdit);
  };

  const updateTodoStatus = (id: string) => {
    const todosAfterUpdate = todos.map((todo) => {
      if (todo.id === id) {
        const status: "undone" | "completed" = todo.status === "undone" ? "completed" : "undone";
        return {
          ...todo,
          status
        };

      }
      return todo;
    });

    setTodos(todosAfterUpdate);
  };

  const value: TodoContextProps = {
    todos,
    addTodo,
    delTodo,
    editTodo,
    updateTodoStatus,
  };
  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
};
