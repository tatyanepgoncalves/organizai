import { useState, useMemo } from "react"
import { type Task, tasks as initialTasks } from "../data"

export const useTodo = () => {
  const [taskList, setTaskList] = useState<Task[]>(initialTasks)

  // Change status task
  const toggleTask = (id: string) => {
    setTaskList((prevTaskList) => prevTaskList.map((task) => task.id === id ? { ...task, completed: task.completed === "Pendente" ? "Completa" : "Pendente" } : task))
  }

  const totalTasks = useMemo(() => taskList.length, [taskList])

  const remainingTasks = useMemo(() => taskList.filter((task) => task.completed === "Pendente").length, [totalTasks])


  return {
    taskList,
    setTaskList,
    toggleTask,
    totalTasks,
    remainingTasks,
  }
}
