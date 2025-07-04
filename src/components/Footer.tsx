
type FooterProps = {
  totalTasks: number;
  remainingTasks: number;
}

export default function Footer({ totalTasks, remainingTasks }: FooterProps) {

  return (
    <footer className="w-full bg-zinc-200 shadow-md p-4 text-center text-zinc-800 fixed bottom-0 md:p-5">
      <p className="text-sm">Total de tarefas {totalTasks}</p>
      <p className="text-sm">Tarefas completas {remainingTasks}</p>
    </footer>
  )
}
