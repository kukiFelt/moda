import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { revalidatePath } from "next/cache"
import { TemplateContext } from "next/dist/shared/lib/app-router-context.shared-runtime"

interface IStudent {
  id: number,
  name: string,
  email: string
}

export default async function ListStudent() {
  const students = await list()
  async function list() {
    revalidatePath("/admin/student")
    const response = await fetch("https://serverkuki.vercel.app/students")
    return response.json();
  }

  async function deleteStudent(formData:FormData) {
    "use server"
    const  id = formData.get("id") as string;
    const response = await fetch("https://serverkuki.vercel.app/students/"+id, {method: "DELETE"});
    revalidatePath("/admin/student")
  }

  return (
    <Table>
      <TableCaption>Lista de Estudantes</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>E-mail</TableHead>
          <TableHead>Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((item: IStudent) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>
              <form>
              <input type="text" name="id" hidden value={item.id} />
              <Button formAction={deleteStudent} variant="destructive">Excluir</Button> 
              </form>
              </TableCell>
          </TableRow>
        ))}
      </TableBody>

    </Table>
  )
}
