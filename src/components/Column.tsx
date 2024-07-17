import React, { useMemo } from "react";

import "./Column.css";
import Task from "./Task";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";

const Column = ({ state }) => {
  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.state === state),
    shallow
  );
  const addTask = useStore((store) => store.addTask);

  return (
    <div className="column">
      <div className="titleWrapper">
        <p>{state}</p>
        <button onClick={() => addTask("asd" + state, state)}>Add</button>
      </div>
      {tasks.map((task) => (
        <Task title={task.title} />
      ))}
    </div>
  );
};

export default Column;
