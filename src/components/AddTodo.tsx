import { useEffect, useRef, useState } from "react";
import { Input } from "./Input";
import { useTodo } from "../context/useTodo";

const AddTodo = () => {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input.trim() !== "") {
      addTodo(input);
      setInput("");
    }
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center w-full max-w-lg gap-2 p-5 m-auto">
        <Input
          value={input}
          ref={inputRef}
          onChange={inputHandler}
          type="text"
          className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-red-500"
          placeholder="Start Typing ..."
        />
        <button
          type="submit"
          className="px-5 py-2 text-sm font-normal text-white bg-blue-900 border-2 border-blue-900 active:scale-95 rounded-xl"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
