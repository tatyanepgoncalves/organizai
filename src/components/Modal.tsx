import { Plus } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Label } from "./ui/label"
import { Input } from "./ui/input"

export default function Modal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full mt-4">
          <Plus className="w-4 h-4" />
          Criar tarefa
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crie uma nova tarefa</DialogTitle>
          <DialogDescription>Insira o nome e categoria da tarefa</DialogDescription>
        </DialogHeader>

        <form className="space-y-6">
          
          <div className="grid grid-cols-4 items-center gap-3 justify-items-end">
            <Label htmlFor="title" className="">Nome</Label>
            <Input id="title" name="title" className="col-span-3" />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-3 justify-items-end">
            <Label htmlFor="category">Categoria</Label>
            <Input id="category" name="category" className="col-span-3" />
          </div>


          <DialogFooter>
            <Button type="button" variant="outline">Cancelar</Button>
            <Button type="submit">Salvar tarefa</Button>
          </DialogFooter>
        </form>

      </DialogContent>

    </Dialog>
  )
}
