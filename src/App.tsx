import { useTodo } from "./hooks/useTodo"
import TaskList from "./components/TaskList";
import TasksFilter from "./components/TasksFilter";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

export function App() {
  const { taskList, setTaskList, toggleTask, totalTasks, remainingTasks } = useTodo()


  return (
    <div className="mx-auto space-y-2 bg-zinc-50">
      <header className="p-4 max-w-4xl mx-auto md:max-w-7xl md:relative md:p-8">
        <h1 className="font-bold text-center text-2xl md:text-4xl">OrganizAi</h1>
        <Modal />
      </header>
      <main className="p-4 max-w-4xl mx-auto md:max-w-7xl space-y-5">

        <TasksFilter taskList={taskList} setTaskList={setTaskList} />
        <TaskList taskList={taskList} toggleTask={toggleTask} />
        

      </main>
      <Footer totalTasks={totalTasks} remainingTasks={remainingTasks} />
    </div>
  );
}
