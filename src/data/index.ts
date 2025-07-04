export interface Task {
  id: string;
  title: string;
  category: string;
  completed: "Pendente" | "Completa";
}

export const tasks: Task[] = [
  {
    id: "1",
    title: "Estudar React",
    category: "Estudos",
    completed: "Pendente",
  },
  {
    id: "2",
    title: "Enviar portfólio",
    category: "Projetos",
    completed: "Completa",
  },
  {
    id: "3",
    title: "Estudar API",
    category: "Estudos",
    completed: "Pendente",
  },
  {
    id: "4",
    title: "Fazer compras",
    category: "Casa",
    completed: "Pendente",
  },
  {
    id: "5",
    title: "Pagar contas",
    category: "Finanças",
    completed: "Completa",
  },
];
