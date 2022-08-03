import { PlusCircle } from 'phosphor-react';
import { FormEvent } from 'react';
import styles from './style.module.scss';

interface NewTaskFormProps {
  handleAddNewTask: (event: FormEvent<HTMLFormElement>) => void;
}

export function NewTaskForm({ handleAddNewTask }: NewTaskFormProps) {
  return (
    <form className={styles.formContainer} onSubmit={handleAddNewTask}>
      <input
        name="taskTitle"
        type="text"
        placeholder="Adicione uma nova tarefa"
        required
      />
      <button type="submit">
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  );
}
