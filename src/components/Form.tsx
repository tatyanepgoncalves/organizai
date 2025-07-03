import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, Plus } from "lucide-react";
import Modal from "./Modal";

export default function Form() {
  return (
    <section className="border p-4 rounded-sm">
      <form className="flex flex-col gap-2">
        <Input name="title" placeholder="Nome da tarefa" />
        <Input name="category" placeholder="Categoria da tarefa" />
        <Button
          type="submit"
          variant={"secondary"}
          className="cursor-pointer w-auto"
        >
          <Search className="w-4 h-4" />
          Filtrar resultado
        </Button>
      </form>

      <Modal />

      {/* <Dialog>
          <form>
            <DialogTrigger>
              <Button type="submit" className="cursor-pointer w-full mt-4" variant="outline" asChild>
                <Plus className="w-4 h-4" />
                Nova tarefa
              </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Crie uma nova tarefa</DialogTitle>
                <DialogDescription>
                  Adicione o nome e categoria da tarefa. Clique em salvar quando terminar.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="title-1">Nome da tarefa</Label>
                  <Input id="name-1" name="name" defaultValue="Comprar leite" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="category-1">Categoria da tarefa</Label>
                  <Input id="category-1" name="category" defaultValue="Compras" />
                </div>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancelar</Button>
                </DialogClose>
                <Button type="submit">
                  Salvar tarefas
                </Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog> */}
    </section>
  );
}
