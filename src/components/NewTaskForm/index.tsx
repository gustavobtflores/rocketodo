import styles from './style.module.scss';

export function NewTaskForm() {
  return (
    <div className={styles.formContainer}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button></button>
    </div>
  );
}
