import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default App;
