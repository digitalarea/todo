import React from "react";

const ToDoList = ({ newToDo }) => {
console.log(newToDo)
  return (
    <>
      {newToDo.map((item) => (
        <p key={item.id}>
          {item.title}
          {item.isComplete}
        </p>
      ))}
    </>
  );
};

export default ToDoList;
