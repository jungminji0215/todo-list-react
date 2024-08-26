import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";
import { TodoProvider } from "./context/TodoContext.jsx";

export default function TaskApp() {
  return (
    <>
      <h1>할일 목록</h1>
      <TodoProvider>
        <AddTask />
        <TaskList />
      </TodoProvider>
    </>
  );
}
