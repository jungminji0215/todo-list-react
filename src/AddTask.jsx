import { useState } from "react";
import { useTodoContext } from "./context/TodoContext";

export default function AddTask() {
  const [text, setText] = useState("");

  const { handleAddTask } = useTodoContext();

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          handleAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
}
