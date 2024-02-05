import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <AddTodo />
      <TodoList />
      <ToastContainer position="bottom-center" />
    </TodoProvider>
  );
}

export default App;
