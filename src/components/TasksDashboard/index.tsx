import { FormEvent, useEffect, useState } from 'react';
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
  const [tasks, setTasks] = useState<Task[]>(() => {
    const tasksList = localStorage.getItem('@Rocketodo:list');

    if (tasksList) {
      return JSON.parse(tasksList);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@Rocketodo:list', JSON.stringify(tasks));
  }, [tasks]);

  function handleAddNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newTask = {
      id: uuidv4(),
      content: event.currentTarget.taskTitle.value,
      completed: false,
    };

    setTasks((tasks) => [...tasks, newTask]);
    event.currentTarget.taskTitle.value = '';
  }

  function handleDeleteTask(taskId: string) {
    const newTasksList = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasksList);
  }

  function handleToggleTaskComplete(taskId: string) {
    const newTaskList = [...tasks];
    const taskCompleteId = tasks.findIndex((task) => task.id === taskId);
    newTaskList[taskCompleteId].completed =
      !newTaskList[taskCompleteId].completed;
    setTasks(newTaskList);
  }

  return (
    <Container>
      <NewTaskForm handleAddNewTask={handleAddNewTask} />
      <TasksList
        tasks={tasks}
        onDeleteTaskRequest={handleDeleteTask}
        onToggleTaskComplete={handleToggleTaskComplete}
      />
    </Container>
  );
}
