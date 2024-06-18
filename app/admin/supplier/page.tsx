import { Button } from "@/components/ui/button";
import ListCourse from "./List";

export default function Supplier() {
    return (
        <div className="w-full flex flex-col  mt-6">
            <div className="flex justify-center mb-6">
                <a href="/admin/supplier/new">
                    <Button>Cadastrar Fornecedor</Button>
                </a>
            </div>
            <ListCourse />
        </div>
    )
}