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

  interface ISupplier{
    id:number,
    name:string,
    address:string,
  }
  
  export default async function ListSupplier() {
    const suppliers = await list()
    async function list(){
      revalidatePath("/admin/supplier")
      const response = await fetch("https://serverkuki.vercel.app/suppliers")
        return response.json();
    }

    async function deleteSupplier(formData: FormData) {
      "use server"
      const id = formData.get("id") as string;
      const response = await fetch("https://serverkuki.vercel.app/suppliers/"+id, {method: "DELETE"});
      revalidatePath("/admin/supplier")
  
    }

    return (
      <Table>
        <TableCaption>Lista de Fonecedores</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">ID</TableHead>
            <TableHead className="text-center">Nome</TableHead>
            <TableHead className="text-center">Endereço</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {suppliers.map((item:ISupplier) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.address}</TableCell>
              <TableCell>
              <form>
                <input type="text" hidden name="id" value={item.id} />
                <Button variant="destructive" formAction={deleteSupplier}>EXCLUIR</Button>
              </form>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    )
  }
  