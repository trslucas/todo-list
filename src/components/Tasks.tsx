import styles from "./Tasks.module.css";
import { Trash } from "phosphor-react";
import { ITask } from "../App";
import { BsFillCheckCircleFill } from "react-icons/bs"

interface TasksProps {
  task: ITask;
  onDelete:(taskId: string) => void;
  onComplete:(taskId: string) => void
}

export function Tasks({ task, onDelete, onComplete }: TasksProps) {
  return (
    <div>
      <div className={styles.tasksList}>
        <div className={styles.writedTasks}>
          <div className={styles.writedTasksInfo}>
            <button className={styles.checkContainer} onClick={()=> onComplete(task.id)}>
              {task.isCompleted ? <BsFillCheckCircleFill/> : <div />}
            </button>
            <p className={task.isCompleted? styles.active : ""}>{task.title}</p>
          </div>
          <button onClick={() => onDelete(task.id)}>
            <Trash size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
