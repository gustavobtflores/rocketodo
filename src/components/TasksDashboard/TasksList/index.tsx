import { Check, Trash } from 'phosphor-react';
import { Task } from '..';
import styles from './style.module.scss';

interface TasksListProps {
  tasks: Task[];
}

export function TasksList({ tasks, onDeleteTaskRequest }: TasksListProps) {
  const tasksAmount = tasks.length || 0;
  const completedTasksAmount = tasks.filter((task) => task.completed).length;

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span>{tasksAmount}</span>
        </div>
        <div className={styles.completedTasks}>
          <strong>Concluídas</strong>
          <span>
            {completedTasksAmount} de {tasksAmount}
          </span>
        </div>
      </header>
      <div className={styles.taskList}>
        {tasks.map((task) => (
          <div
            className={`${styles.item} ${task.completed && styles.completed}`}
            key={task.id}
          >
            <span>
              <Check size={16} />
            </span>
            <p>{task.content}</p>
            <button onClick={() => onDeleteTaskRequest(task.id)}>
              <Trash size={20} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
