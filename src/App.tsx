import "./App.css";
import "./global.css";
import { Header } from "./components/Header";
import { TasksHome } from "./components/TasksHome";
import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "todo-saved-tasks"

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);


  function loadStorageTasks(){
   const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY)
   if(savedTasks){
    setTasks(JSON.parse(savedTasks))
   }
  }

  useEffect(()=> {
    loadStorageTasks()
  }, [])

  function seTasksAndSave(newTasks: ITask[]){
    setTasks(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))

  }

  function handleCreateTask(taskTitle: string){
    seTasksAndSave([
      ...tasks, {
        id: crypto.randomUUID(),
        title: taskTitle, 
        isCompleted: false, 
      }
    ])
  }

  function handleDeleteTask(taskId: string){
    const newTasks = tasks.filter(task=> task.id != taskId)
    seTasksAndSave(newTasks)
  }

  function checkTaskCompletedById(taskId: string){
    const newTasks = tasks.map(task=>{
      if(task.id == taskId){
        return{
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })

    seTasksAndSave(newTasks)
  }

  return (
    <div>
      <Header/>
      <TasksHome 
      tasks={tasks} 
      onAddTask={handleCreateTask}
      onDelete={handleDeleteTask}
      onComplete={checkTaskCompletedById}
      />
    </div>
  );
}

export default App;
