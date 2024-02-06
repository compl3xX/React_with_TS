import { Todo } from "../context/TodoContext";
import { AiOutlineDelete } from "react-icons/ai";
import { MdDoneOutline } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { useTodo } from "../context/useTodo";
import { useState } from "react";
import { Input } from "./Input";

const TodoItem = (props: { todo: Todo }) => {
  const { todo } = props;
  const { delTodo, editTodo, updateTodoStatus } = useTodo();
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
  const [editTodoText, setEditTodoText] = useState<string>("");

  const editTodoHandel = (id: string, text: string) => {
    setEditingTodoId(id);
    setEditTodoText(text);
  };

  const updateTodoHandel = (id: string) => {
    editTodo(id, editTodoText);
    setEditingTodoId(null);
    setEditTodoText("");
  };

  return (
    <li className="p-5 rounded-xl bg-zinc-600 text-white">
      {editingTodoId !== todo.id ? (
        <div>
          <span className={`${todo.status !== "undone" ? "line-through" : ""}`}>
            {props.todo.text}
          </span>

          <div className="flex justify-between mt-2">
            <button onClick={() => updateTodoStatus(todo.id)}>
              {todo.status === "undone" ? (
                <button>
                  <span className="flex items-center gap-2">
                    <MdDoneOutline />
                    Mark as done
                  </span>
                </button>
              ) : (
                <button>
                  <span className="flex items-center gap-2">
                    <ImCross />
                    Mark as undone
                  </span>
                </button>
              )}
            </button>

            <div className="space-x-10 items-center ">
              <button onClick={() => editTodoHandel(todo.id, todo.text)}>
                Edit
              </button>

              <button
                className="text-red-500"
                onClick={() => {
                  delTodo(todo.id);
                }}
              >
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex gap-5">
          <Input
            value={editTodoText}
            onChange={(e) => setEditTodoText(e.currentTarget.value)}
          />
          <button
            onClick={() => updateTodoHandel(todo.id)}
            className="bg-orange-400 rounded-md p-2"
          >
            Update
          </button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
