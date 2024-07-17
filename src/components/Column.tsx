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

  return (
    <div className="column">
      <p>{state}</p>
      <Task title="Todo" />
    </div>
  );
};

export default Column;
