import { Trash, Check, X } from "lucide-react"
import { Button } from "./ui/button";
import { type Task } from "../data"

interface TaskListProps {
  taskList: Task[]
  toggleTask: (id: string) => void
}

export default function TaskList({ taskList, toggleTask }: TaskListProps) {
  return (
    <section className="py-6 px-8 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Minhas tarefas</h2>

      {taskList.length === 0 ? (
        <p className="text-zinc-500">Nenhuma tarefa encontrada</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-4">
          {taskList.map((task) => (
            <article
              key={task.id}
              className="py-4 px-2 md:p-4 rouded-lg flex items-center justify-between border"
            >
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">{task.title}</h3>
                <span className="text-zinc-700 text-sm">{task.category}</span>
                <span className="text-zinc-500 text-sm">{task.completed}</span>
              </div>

              <div className="space-x-2 flex items-center">
                <Button className="cursor-pointer" variant={"ghost"}
                onChange={() => toggleTask(task.id)}
                >
                  {task.completed === "Pendente" ? 
                  <X className="w-4 h-4 text-red-500" />
                  : 
                  <Check className="w-4 h-4 text-green-500" />

                  }
                </Button>
                <Button className="cursor-pointer" variant={"destructive"}>
                  <Trash className="w-4 h-4" />
                </Button>
              </div>

            </article>
          ))}
        </div>
      )}
      </section>
  )
}
