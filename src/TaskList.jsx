import { useTodoContext } from "./context/TodoContext";

export default function TaskList() {
  const { tasks } = useTodoContext();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <label>{task.text}</label>
        </li>
      ))}
    </ul>
  );
}
