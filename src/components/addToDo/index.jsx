import React from "react";
import { useState } from "react";

const AddToDo = ({ newToDo, setNewToDo }) => {
  const [value, setValue] = useState("");
  function saveToDo() {
    if (value !== '') {
      setNewToDo([
        ...newToDo,
        {
          id: Date.now(),
          title: value,
          isComplete: true,
        },
      ]);
      setValue("");
    }
  }

  return (
    <div>
      <input
        placeholder="Введите задачу"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={saveToDo}>Добавить задачу</button>
    </div>
  );
};

export default AddToDo;
