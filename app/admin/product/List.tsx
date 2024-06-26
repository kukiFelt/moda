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

  interface IProduct{
    id:number,
    name:string,
  }
  
  export default async function ListProduct() {
    const products = await list()
    async function list(){
      revalidatePath("/admin/products")
      const response = await fetch("https://serverkuki.vercel.app/products")
        return response.json();
    }

    async function deleteProduct(formData: FormData) {
      "use server"
      const id = formData.get("id") as string;
      const response = await fetch("https://serverkuki.vercel.app/products/"+id, {method: "DELETE"});
      revalidatePath("/admin/products")
  
    }

    return (
      <Table>
        <TableCaption>Lista de Produtos</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">ID</TableHead>
            <TableHead className="text-center">Nome</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((item:IProduct) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
              <form>
                <input type="text" hidden name="id" value={item.id} />
                <Button variant="destructive" formAction={deleteProduct}>EXCLUIR</Button>
              </form>
            </TableCell>
            </TableRow>

          ))}
        </TableBody>
       
      </Table>
    )
  }
  