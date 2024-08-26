import { createContext, useContext, useReducer } from "react";

export const TodoContext = createContext();

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  const [tasks, taskDispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    taskDispatch({
      type: "add",
      id: nextId++,
      text: text,
    });
  }
  return (
    <TodoContext.Provider value={{ tasks, handleAddTask }}>
      {children}
    </TodoContext.Provider>
  );
};

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
