import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          // 추가 후 input 창 비우기
          setText("");

          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  );
}
