import { useState } from "react";
import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";
import { useReducer } from "react";

export default function TaskApp() {
  // tasks 배열을 보유
  // const [tasks, setTasks] = useState(initialTasks);

  // 할일 추가
  // function handleAddTask(text) {
  //   const todo = {
  //     id: nextId++,
  //     text: text,
  //   };

  //   setTasks([...tasks, todo]);
  // }

  const [tasks, taskDispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    taskDispatch({
      type: "add",
      id: nextId++,
      text: text,
    });
  }

  return (
    <>
      <h1>할일 목록</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

function tasksReducer(tasks, action) {
  if (action.type === "add") {
    return [
      ...tasks,
      {
        id: action.id,
        text: action.text,
        done: false,
      },
    ];
  }
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum" },
  { id: 1, text: "Watch a puppet show" },
  { id: 2, text: "Lennon Wall pic" },
];
