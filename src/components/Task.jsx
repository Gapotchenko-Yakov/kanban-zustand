import React from "react";

import "./Task.css";
import classNames from "classnames";
import { useStore } from "../store";
import trash from "../assets/trash-2.svg";

const Task = ({ title }) => {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const deleteTask = useStore((store) => store.deleteTask);

  return (
    <div
      className="task"
      draggable
      onDragStart={(e) => setDraggedTask(task.title)}
    >
      <div>{task?.title}</div>
      <div className="bottomWrapper">
        <div>
          <img src={trash} onClick={() => deleteTask(task?.title)} />
        </div>
        <div className={classNames("status", task?.state)}>{task?.state}</div>
      </div>
    </div>
  );
};

export default Task;
