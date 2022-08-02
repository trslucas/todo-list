import styles from "./TasksHome.module.css";
import { PlusCircle, Trash } from "phosphor-react";
import { Tasks } from "./Tasks";
import { EmptyTasks } from "./EmptyTasks";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { ITask } from "../App";

interface TasksHomeProps {
  tasks: ITask[];
  onAddTask: (taskTitle: string) => void;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function TasksHome({
  tasks,
  onAddTask,
  onDelete,
  onComplete,
}: TasksHomeProps) {
  const createdTasksQuantity = tasks.length;

  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLTextAreaElement>) {
    setTitle(event.target.value);
  }

  const isNewEmptyTask = title.length == 0
  return (
    <div>
      <div className={styles.taskArea}>
        <div className={styles.taskFormArea}>
          <form className={styles.taskForm} onSubmit={handleSubmit}>
            <textarea
              placeholder="Escreva sua tarefa"
              onChange={onChangeTitle}
              value={title}
            ></textarea>
            <button type="submit" disabled={isNewEmptyTask}>
              Criar
              <PlusCircle size={20} />
            </button>
          </form>
        </div>

        <div className={styles.tasksInfoArea}>
          <div className={styles.tasksInfo}>
            <div className={styles.tasksCreated}>
              <strong>
                Tarefas criadas <span>{createdTasksQuantity}</span>
              </strong>
            </div>
            <div className={styles.tasksDone}>
              <strong>
                Tarefas Concluidas{" "}
                <span>
                  {completedTasks} de {createdTasksQuantity}
                </span>
              </strong>
            </div>
          </div>
          {tasks.map((task) => (
            <Tasks
              key={task.id}
              task={task}
              onDelete={onDelete}
              onComplete={onComplete}
            />
          ))}

          {tasks.length <= 0 && <EmptyTasks />}
        </div>
      </div>
    </div>
  );
}
