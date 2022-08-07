import { Check, Trash } from 'phosphor-react';
import { Task } from '..';
import clipboardIcon from '../../../assets/clipboard.svg';

import styles from './style.module.scss';

interface TasksListProps {
  tasks: Task[];
  onDeleteTaskRequest: (id: string) => void;
  onToggleTaskComplete: (id: string) => void;
}

export function TasksList({
  tasks,
  onDeleteTaskRequest,
  onToggleTaskComplete,
}: TasksListProps) {
  const sortedTasksByState = [...tasks].sort((a, b) => {
    return a.completed === b.completed ? 0 : b.completed ? -1 : 1;
  });
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
        {sortedTasksByState.length > 0 ? (
          sortedTasksByState.map((task) => (
            <div
              className={`${styles.item} ${task.completed && styles.completed}`}
              key={task.id}
            >
              <span onClick={() => onToggleTaskComplete(task.id)}>
                <Check size={16} />
              </span>
              <p>{task.content}</p>
              <button onClick={() => onDeleteTaskRequest(task.id)}>
                <Trash size={20} />
              </button>
            </div>
          ))
        ) : (
          <div className={styles.noTasksAdded}>
            <img src={clipboardIcon} alt="" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )}
      </div>
    </>
  );
}
