export default function TaskList({ tasks }) {
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
