import { Button } from "./components/ui/button";
import { Trash, Check, X } from "lucide-react";
import Form from "./components/Form";

export function App() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <header className="p-4">
        <h1 className="font-medium text-center text-2xl">OrganizAi</h1>
      </header>

      <Form />

      <section className="space-y-4">
        {Array.from({ length: 10 }).map((_, i) => {
          return (
            <div
              key={i}
              className="flex items-center justify-between p-4 rounded-sm"
            >
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-lg">Tarefa {i}</h3>
                <span className="">Categoria {i}</span>
                <span className="">Pendente | Completa</span>
              </div>

              <div className="space-x-2">
                <Button className="cursor-pointer" variant={"ghost"}>
                  <X className="w-4 h-4" />
                  <Check className="w-4 h-4" />
                </Button>
                <Button className="cursor-pointer" variant={"destructive"}>
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
