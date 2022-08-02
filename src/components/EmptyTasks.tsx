import styles from "./EmptyTasks.module.css"
import emptyTasks from "../assets/clipboard.svg";

export function EmptyTasks (){
    return(
        <div className={styles.tasksEmpty}>
            <img src={emptyTasks} alt="" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}