import { FormEvent, useState } from 'react';
import { Container } from './Container';
import { NewTaskForm } from './NewTaskForm';
import { TasksList } from './TasksList';
import { v4 as uuidv4 } from 'uuid';

export interface Task {
  id: string;
  content: string;
  completed: boolean;
}

export function TasksDashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newTask = {
      id: uuidv4(),
      content: event.currentTarget.taskTitle.value,
      completed: false,
    };

    setTasks((tasks) => [...tasks, newTask]);
  }

  function handleDeleteTask(taskId) {
    const newTasksList = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasksList);
  }

  return (
    <Container>
      <NewTaskForm handleAddNewTask={handleAddNewTask} />
      <TasksList tasks={tasks} onDeleteTaskRequest={handleDeleteTask} />
    </Container>
  );
}
