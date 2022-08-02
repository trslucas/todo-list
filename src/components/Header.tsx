import styles from "./Header.module.css"
import todologo from "../assets/todo-logo.svg"


export function Header(){
    return (
        <div>
            <header className={styles.header}>
                <img src={todologo} alt="" />
            </header> 
        </div>
    )
}
