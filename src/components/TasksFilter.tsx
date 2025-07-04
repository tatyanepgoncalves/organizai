import { Input } from "./ui/input";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { type Task } from "../data";

interface TaskFilterProps {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function TasksFilter({
  taskList,
  setTaskList,
}: TaskFilterProps) {
  const [filter, setFilter] = useState<string>("all");
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const [newTaskCategory, setNewTaskCategory] = useState<string>("");

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
    console.log("Filtro selecionado", e.target.value);
  };

  const handleAddTask = () => {
    let message = "";
    if (newTaskTitle.trim() === "" || newTaskCategory.trim() === "") {
      message = "Por favor, preencha o titulo e a categoria da tarefa.";
      return <p>{message}</p>;
    }

    const newTask: Task = {
      id: String(taskList.length + 1),
      title: newTaskTitle,
      category: newTaskCategory,
      completed: "Pendente",
    };

    setTaskList((prevTasks) => [...prevTasks, newTask]);
    setNewTaskTitle("");
    setNewTaskCategory("");
  };

  return (
    <section className="shadow-sm rounded-lg p-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
      <form className="w-full flex flex-col items-center justify-between space-x-2 space-y-4 md:flex-row md:space-y-0">
        <select
          id="filter"
          value={filter}
          onChange={handleFilterChange}
          className="w-full md:w-auto border border-zinc-300 rounded-sm p-2 focus:ring-zinc-500 focus:border-purple-500"
        >
          <option value="all">Todas</option>
          <option value="Pendente">Pendente</option>
          <option value="Completa">Completa</option>
        </select>

        <Input
          name="title"
          placeholder="Nova tarefa"
          className="w-full lg:w-[450px]"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />

        <Input
          name="category"
          placeholder="Categoria da tarefa"
          className="lg:w-[450px]"
          value={newTaskCategory}
          onChange={(e) => setNewTaskCategory(e.target.value)}
        />
        <Button
          type="submit"
          variant={"secondary"}
          className="cursor-pointer w-full md:w-auto"
          onClick={handleAddTask}
        >
          <Search className="w-4 h-4" />
          Filtrar resultado
        </Button>
      </form>
    </section>
  );
}
